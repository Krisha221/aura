import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Loads a GLTF model and prepares it for the scene.
 * @param modelUrl - The URL of the .glb file.
 * @param onLoad - Callback function when the model is successfully loaded.
 * @param onProgress - Callback function to track loading progress.
 * @param onError - Callback function for loading errors.
 */
export const loadAndSetupModel = (
    modelUrl: string,
    onLoad: (model: THREE.Group, size: THREE.Vector3) => void,
    onProgress: (percent: number) => void,
    onError: (error: unknown) => void
) => {
    const loader = new GLTFLoader();
    loader.load(
        modelUrl,
        (gltf) => {
            const model = gltf.scene;

            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            
            // Center model and position it on the "floor" (y=0)
            model.position.sub(center);
            model.position.y += size.y / 2;

            // Apply shadows and enhance material properties for all meshes
            model.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    if (child.material) {
                        const mat = child.material as THREE.MeshStandardMaterial;
                        mat.metalness = 0.4; // A bit more metallic
                        mat.roughness = 0.6; // A bit less shiny
                    }
                }
            });

            onLoad(model, size);
        },
        (xhr) => onProgress(Math.round((xhr.loaded / xhr.total) * 100)),
        (err) => onError(err)
    );
};