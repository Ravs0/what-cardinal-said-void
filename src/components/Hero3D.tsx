import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Image, MeshDistortMaterial, Sphere, Html, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { Sparkles as SparklesIcon } from 'lucide-react';

const AbstractRings = () => {
    const ring1 = useRef<THREE.Mesh>(null!);
    const ring2 = useRef<THREE.Mesh>(null!);

    useFrame((state, delta) => {
        ring1.current.rotation.x += delta * 0.1;
        ring1.current.rotation.y += delta * 0.15;
        ring2.current.rotation.x -= delta * 0.15;
        ring2.current.rotation.y -= delta * 0.1;
    });

    return (
        <group position={[0, 0, -5]}>
            <Float speed={2} floatIntensity={2} rotationIntensity={1}>
                <mesh ref={ring1}>
                    <torusGeometry args={[4, 0.02, 16, 100]} />
                    <meshBasicMaterial color="#c41e3a" transparent opacity={0.3} />
                </mesh>
            </Float>
            <Float speed={1.5} floatIntensity={2} rotationIntensity={2}>
                <mesh ref={ring2}>
                    <torusGeometry args={[5, 0.02, 16, 100]} />
                    <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
                </mesh>
            </Float>
        </group>
    );
};

const DarkMatterCore = () => {
    return (
        <Float speed={2} rotationIntensity={2} floatIntensity={1}>
            <Sphere args={[2.5, 64, 64]} position={[0, 0, -8]}>
                <MeshDistortMaterial
                    color="#050505"
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.9}
                />
            </Sphere>
        </Float>
    );
};

const CardinalGem = () => {
    const gemRef = useRef<THREE.Mesh>(null!);
    const wireRef = useRef<THREE.Mesh>(null!);

    useFrame((state, delta) => {
        gemRef.current.rotation.y -= delta * 0.5;
        gemRef.current.rotation.x -= delta * 0.2;
        wireRef.current.rotation.y += delta * 0.2;
        wireRef.current.rotation.z += delta * 0.1;
    });

    return (
        <group position={[0, 1.5, 0]}>
            <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
                {/* Inner glowing cardinal crystal octahedron */}
                <mesh ref={gemRef}>
                    <octahedronGeometry args={[0.8, 0]} />
                    <meshPhysicalMaterial
                        color="#ff0040"
                        emissive="#c41e3a"
                        emissiveIntensity={2}
                        transparent
                        opacity={0.9}
                        roughness={0.1}
                        transmission={0.9}
                        thickness={2}
                    />
                </mesh>

                {/* Outer wireframe icosahedron void architecture */}
                <mesh ref={wireRef} scale={[1.5, 1.5, 1.5]}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.15} />
                </mesh>

                {/* Floating energy particles */}
                <Sparkles count={50} scale={4} size={2} speed={0.4} opacity={0.5} color="#c41e3a" />
            </Float>
        </group>
    );
};

const TitleScene = () => {
    return (
        <group position={[0, -0.5, 0]}>
            {/* The completely 3D Geometric Logo */}
            <CardinalGem />
        </group>
    );
};

export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-10 h-full w-full">
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={2} color="#ffffff" />
                <pointLight position={[0, 0, 5]} intensity={1} color="#c41e3a" />

                <AbstractRings />
                <DarkMatterCore />
                <TitleScene />
            </Canvas>
        </div>
    );
}
