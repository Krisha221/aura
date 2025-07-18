import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js';
import { loadAndSetupModel } from '../utils/threeUtils';

interface ModelViewerProps {
  modelUrl: string;
  autoRotate: boolean;
  resetTrigger: number;
  onARButtonReady: (button: HTMLButtonElement) => void;
  setIsInAR: (isInAR: boolean) => void;
  arScale: number;
  theme: 'light' | 'dark';
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelUrl, autoRotate, resetTrigger, onARButtonReady, setIsInAR, arScale, theme }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [loadPercent, setLoadPercent] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [arMessage, setArMessage] = useState<string | null>(null);

  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const reticleRef = useRef<THREE.Mesh | null>(null);
  const initialCameraPos = useRef(new THREE.Vector3(0, 1.5, 4));
  const floorRef = useRef<THREE.Mesh>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const initialBgColor = useRef(new THREE.Color(theme === 'dark' ? 0x000000 : 0xffffff));


  useEffect(() => {
    initialBgColor.current.set(theme === 'dark' ? 0x000000 : 0xffffff);
    if (sceneRef.current && !rendererRef.current?.xr.isPresenting) {
        sceneRef.current.background = initialBgColor.current.clone();
    }
  }, [theme]);

  useEffect(() => {
    if (modelRef.current && rendererRef.current?.xr.isPresenting) {
      modelRef.current.scale.set(arScale, arScale, arScale);
    }
  }, [arScale]);


  useEffect(() => {
    if (cameraRef.current && controlsRef.current) {
        cameraRef.current.position.copy(initialCameraPos.current);
        controlsRef.current.target.set(0, 0.5, 0);
        controlsRef.current.update();
    }
  }, [resetTrigger]);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const scene = new THREE.Scene();
    scene.background = initialBgColor.current.clone();
    sceneRef.current = scene;


    const camera = new THREE.PerspectiveCamera(60, mountNode.clientWidth / mountNode.clientHeight, 0.1, 1000);
    camera.position.copy(initialCameraPos.current);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.xr.enabled = true;
    rendererRef.current = renderer;
    mountNode.appendChild(renderer.domElement);
    
    const arButton = ARButton.createButton(renderer, { requiredFeatures: ['hit-test'] } as any);
    arButton.style.display = 'none';
    onARButtonReady(arButton as HTMLButtonElement);
    mountNode.appendChild(arButton);

    const reticle = new THREE.Mesh(
      new THREE.RingGeometry(0.08, 0.1, 32).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: 0xdc2626 })
    );
    reticle.matrixAutoUpdate = false;
    reticle.visible = false;
    scene.add(reticle);
    reticleRef.current = reticle;

    let hitTestSource: any | null = null;
    let hitTestSourceRequested = false;

    const onSelect = () => {
      if (reticleRef.current?.visible && modelRef.current) {
        const poseMatrix = reticleRef.current.matrix;
        
        const position = new THREE.Vector3();
        const quaternion = new THREE.Quaternion();
        poseMatrix.decompose(position, quaternion, new THREE.Vector3());
        
        const model = modelRef.current;
        model.position.copy(position);
        model.quaternion.copy(quaternion);

        if (!model.visible) {
          model.visible = true;
          setArMessage('Tap a surface to move the model.');
        }
      }
    };

    const controller = renderer.xr.getController(0);
    controller.addEventListener('select', onSelect);

    renderer.xr.addEventListener('sessionstart', async () => {
      setIsInAR(true);
      scene.background = null;
      if (floorRef.current) floorRef.current.visible = false;
      if (controlsRef.current) controlsRef.current.enabled = false;
      if (modelRef.current) {
        modelRef.current.visible = false;
        modelRef.current.scale.set(arScale, arScale, arScale);
      }
      if (reticleRef.current) reticleRef.current.visible = false;
      
      setArMessage('Scan your environment to find a surface...');
      
      const session = renderer.xr.getSession();
      if(session) {
        try {
          const viewerSpace = await session.requestReferenceSpace('viewer');
          hitTestSource = await (session as any).requestHitTestSource({ space: viewerSpace });
          hitTestSourceRequested = true;
        } catch (e) {
            console.error('Could not start AR hit-test session.', e);
            setArMessage('AR Error: Could not start hit-test.');
        }
      }
    });

    renderer.xr.addEventListener('sessionend', () => {
      setIsInAR(false);
      scene.background = initialBgColor.current.clone();
      if (floorRef.current) floorRef.current.visible = true;
      if (controlsRef.current) controlsRef.current.enabled = true;
      
      if (modelRef.current) {
        modelRef.current.visible = true;
        const box = new THREE.Box3().setFromObject(modelRef.current);
        const size = box.getSize(new THREE.Vector3());
        modelRef.current.position.set(0, size.y / 2, 0);
        modelRef.current.rotation.set(0, 0, 0);
        modelRef.current.scale.set(1, 1, 1);
        modelRef.current.updateMatrix();
      }
      
      hitTestSource = null;
      hitTestSourceRequested = false;
      if (reticleRef.current) reticleRef.current.visible = false;
      setArMessage(null);
    });

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(10, 20, 10);
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 4;
    dirLight.shadow.camera.bottom = -4;
    dirLight.shadow.camera.left = -4;
    dirLight.shadow.camera.right = 4;
    scene.add(dirLight);

    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 100),
        new THREE.ShadowMaterial({ opacity: 0.3 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    scene.add(floor);
    floorRef.current = floor;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(0, 0.5, 0);
    controlsRef.current = controls;

    loadAndSetupModel(
      modelUrl,
      (model, size) => {
        modelRef.current = model;
        scene.add(model);

        const cameraDistance = size.length() * 0.8;
        camera.position.set(0, size.y * 0.75, cameraDistance);
        initialCameraPos.current.copy(camera.position);
        controls.target.set(0, size.y / 2, 0);
        controls.update();

        setLoading(false);
      },
      (percent) => setLoadPercent(percent),
      (err) => {
        console.error('Failed to load model:', err);
        setError('Failed to load 3D model.');
        setLoading(false);
      }
    );

    const handleResize = () => {
      camera.aspect = mountNode.clientWidth / mountNode.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    const animate = (timestamp: number, frame?: any) => {
      controls.update();
      if (modelRef.current && autoRotate && !renderer.xr.isPresenting) {
        modelRef.current.rotation.y += 0.002;
      }
      
      if (renderer.xr.isPresenting && frame && hitTestSource) {
        const referenceSpace = renderer.xr.getReferenceSpace();
        if (referenceSpace) {
          const hitTestResults = frame.getHitTestResults(hitTestSource);
          if (hitTestResults.length > 0) {
              const hit = hitTestResults[0];
              const pose = hit.getPose(referenceSpace);
              if (reticleRef.current && pose) {
                  reticleRef.current.matrix.fromArray(pose.transform.matrix);
                  reticleRef.current.visible = true;
                  
                  if (modelRef.current && !modelRef.current.visible) {
                      setArMessage('Tap to place the model.');
                  }
              }
          } else if(reticleRef.current) {
              reticleRef.current.visible = false;
          }
        }
      }

      renderer.render(scene, camera);
    };
    renderer.setAnimationLoop(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      controller.removeEventListener('select', onSelect);
      renderer.setAnimationLoop(null);
      if (mountNode) {
        if(arButton.parentNode) mountNode.removeChild(arButton);
        mountNode.removeChild(renderer.domElement);
      }
      scene.traverse(object => {
        if (object instanceof THREE.Mesh) {
            object.geometry?.dispose();
            if (Array.isArray(object.material)) {
                object.material.forEach(material => material.dispose());
            } else {
                object.material?.dispose();
            }
        }
      });
      renderer.dispose();
      rendererRef.current = null;
    };
  }, [modelUrl, autoRotate, onARButtonReady, setIsInAR]);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {arMessage && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 bg-white/80 dark:bg-black/80 text-gray-900 dark:text-white px-6 py-3 rounded-lg text-center backdrop-blur-sm">
          <p>{arMessage}</p>
        </div>
      )}
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/50 dark:bg-black/50 backdrop-blur-sm">
          <div className="text-center text-gray-900 dark:text-white">
            <div className="text-xl font-semibold">Loading 3D Model...</div>
            <div className="w-64 h-2 mt-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full transition-all duration-300" style={{ width: `${loadPercent}%` }}></div>
            </div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">{loadPercent}%</div>
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/50 dark:bg-black/50">
           <div className="text-center text-red-500 dark:text-red-400 bg-red-100/50 dark:bg-red-900/50 p-6 rounded-lg">
             <div className="text-xl font-semibold">An Error Occurred</div>
             <div className="mt-2">{error}</div>
           </div>
        </div>
      )}
      <div ref={mountRef} className="w-full h-full"></div>
    </div>
  );
};

export default React.memo(ModelViewer);