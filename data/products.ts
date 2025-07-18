
import { Product } from '../types';

const robotModelUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/RobotExpressive/RobotExpressive.glb';

export const products: Product[] = [
  {
    id: 'orion-mk4',
    name: 'Orion Mark IV',
    description: 'Versatile humanoid robot for research and human-robot interaction.',
    detailedDescription: 'The Orion Mark IV is our flagship humanoid platform, engineered for advanced research and development. It features a state-of-the-art sensor suite, fully articulated limbs, and an open-source software stack, making it the perfect choice for universities and R&D labs.',
    imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Orion+IV',
    modelUrl: robotModelUrl,
  },
  {
    id: 'titan-hauler',
    name: 'Titan Hauler',
    description: 'Heavy-duty autonomous mobile robot for industrial and logistics applications.',
    detailedDescription: 'Designed for the modern warehouse, the Titan Hauler can autonomously transport payloads up to 1500 kg. Its advanced LiDAR and computer vision systems allow for safe and efficient navigation in dynamic environments, optimizing your entire logistics workflow.',
    imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Titan+Hauler',
    modelUrl: robotModelUrl, // Using same model for demo purposes
  },
  {
    id: 'scout-drone',
    name: 'Scout Drone',
    description: 'Autonomous aerial drone for surveillance, inspection, and mapping.',
    detailedDescription: 'The Scout Drone combines long flight times with a high-resolution, gimbal-stabilized camera system. It is ideal for automated security patrols, infrastructure inspection, and creating detailed 3D maps of large areas.',
    imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Scout+Drone',
    modelUrl: robotModelUrl, // Using same model for demo purposes
  },
  {
    id: 'guardian-sentry',
    name: 'Guardian Sentry Unit',
    description: 'Rugged, all-terrain robot for automated security and perimeter defense.',
    detailedDescription: 'The Guardian Sentry Unit provides a persistent security presence in challenging environments. Equipped with thermal and optical sensors, it can autonomously patrol large perimeters, detect intrusions, and provide real-time alerts to a central command station.',
    imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Guardian',
    modelUrl: robotModelUrl, // Using same model for demo purposes
  },
  {
    id: 'apollo-assistant',
    name: 'Apollo Assistant',
    description: 'Friendly and capable service robot for domestic and commercial environments.',
    detailedDescription: 'The Apollo Assistant is designed to help with everyday tasks in homes, hospitals, and retail spaces. Its advanced manipulation and natural language processing abilities allow it to interact with people and its environment in a helpful and intuitive way.',
    imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Apollo',
    modelUrl: robotModelUrl, // Using same model for demo purposes
  },
  {
    id: 'nexus-core',
    name: 'Nexus AI Core',
    description: 'Centralized AI processing unit for coordinating fleets of robots.',
    detailedDescription: 'The Nexus AI Core is a powerful server-grade appliance that acts as the brain for your entire robotic fleet. It runs advanced scheduling, optimization, and machine learning models to ensure your robots work together seamlessly and efficiently.',
    imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Nexus+Core',
    modelUrl: robotModelUrl, // Using same model for demo purposes
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
