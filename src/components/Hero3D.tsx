import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Image, MeshDistortMaterial, Sphere, Html, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { Sparkles as SparklesIcon } from 'lucide-react';

const MonolithicStructures = () => {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame((state, delta) => {
        // Slow structural rotation
        groupRef.current.rotation.y += delta * 0.08;
    });

    return (
        <group ref={groupRef} position={[0, -2, -6]}>
            <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
                {/* Central Monolith (Gold/Bronze) */}
                <mesh position={[0, 2, 0]} castShadow receiveShadow>
                    <boxGeometry args={[1.2, 8, 1.2]} />
                    <meshStandardMaterial color="#D4AF37" metalness={0.7} roughness={0.2} />
                </mesh>

                {/* Left Structural Slab (Marble/White) */}
                <mesh position={[-3, 1, -2]}>
                    <boxGeometry args={[1.5, 6, 1.5]} />
                    <meshStandardMaterial color="#f8fafc" metalness={0.1} roughness={0.9} />
                </mesh>

                {/* Right Structural Slab (Marble/White) */}
                <mesh position={[3, 3, 2]}>
                    <boxGeometry args={[1, 10, 1]} />
                    <meshStandardMaterial color="#f8fafc" metalness={0.1} roughness={0.9} />
                </mesh>

                {/* Intersecting Balance Beam (The Scale) */}
                <mesh position={[0, 5, 1.5]} rotation={[0, 0, Math.PI / 12]}>
                    <boxGeometry args={[8, 0.4, 0.4]} />
                    <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={0.5} />
                </mesh>

                {/* Subtile geometric accents */}
                <mesh position={[-3, 5, -2]} rotation={[Math.PI / 4, 0, 0]}>
                    <octahedronGeometry args={[0.8, 0]} />
                    <meshBasicMaterial color="#D4AF37" wireframe transparent opacity={0.4} />
                </mesh>

                <mesh position={[3, 0, 2]} rotation={[0, Math.PI / 4, 0]}>
                    <octahedronGeometry args={[1.2, 0]} />
                    <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.2} />
                </mesh>
            </Float>

            {/* Subtle atmospheric dust */}
            <Sparkles count={60} scale={12} size={1.5} speed={0.2} opacity={0.3} color="#D4AF37" />
        </group>
    );
};

export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-10 h-full w-full">
            <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#D4AF37" />
                <pointLight position={[5, 0, 5]} intensity={0.5} color="#ffffff" />

                <fog attach="fog" args={['#0f172a', 10, 30]} />
                <MonolithicStructures />
            </Canvas>
        </div>
    );
}
