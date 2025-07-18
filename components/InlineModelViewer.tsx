import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface InlineModelViewerProps {
  modelUrl: string;
  className?: string;
  cameraPosition?: THREE.Vector3;
}

const InlineModelViewer: React.FC<InlineModelViewerProps> = ({ modelUrl, className, cameraPosition = new THREE.Vector3(0, 0.8, 2.9) }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    // Basic scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background

    const camera = new THREE.PerspectiveCamera(50, mountNode.clientWidth / mountNode.clientHeight, 0.1, 100);
    camera.position.copy(cameraPosition);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    mountNode.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;
    controls.target.set(0, 0.5, 0);

    // Lighting
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x888888, 3.5);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 4.0);
    dirLight.position.set(3, 10, 7);
    scene.add(dirLight);

    // Model Loading
    const loader = new GLTFLoader();
    loader.load(
        modelUrl,
        (gltf) => {
            const model = gltf.scene;
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            
            // Center model and position it on the "floor"
            model.position.sub(center);
            model.position.y += size.y / 2;
            
            // Set material properties
            model.traverse((child) => {
                if (child instanceof THREE.Mesh && child.material) {
                    const mat = child.material as THREE.MeshStandardMaterial;
                    mat.metalness = 0.4;
                    mat.roughness = 0.6;
                }
            });
            
            scene.add(model);
            controls.target.set(0, size.y / 2, 0); // Point controls at the center of the model
        },
        undefined, // onProgress callback (not used here)
        (error) => {
            console.error('An error happened during model loading:', error);
        }
    );

    // Handle resize
    const handleResize = () => {
      camera.aspect = mountNode.clientWidth / mountNode.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        controls.update(); // Required for damping and auto-rotate
        renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (mountNode && renderer.domElement.parentNode === mountNode) {
          mountNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.traverse(object => {
          if (object instanceof THREE.Mesh) {
              object.geometry.dispose();
              if (Array.isArray(object.material)) {
                  object.material.forEach(material => material.dispose());
              } else {
                  object.material.dispose();
              }
          }
      });
    };
  }, [modelUrl, cameraPosition]);

  return <div ref={mountRef} className={className} />;
};

export default InlineModelViewer;