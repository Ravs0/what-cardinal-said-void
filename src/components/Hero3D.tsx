import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';

const InteractiveMonoliths = () => {
    const groupRef = useRef<THREE.Group>(null!);
    const mainPillarRef = useRef<THREE.Mesh>(null!);
    const scaleRef = useRef<THREE.Group>(null!);
    const ringsRef = useRef<THREE.Group>(null!);

    useFrame((state, delta) => {
        // 1. Smooth, high-end mouse parallax
        const targetX = (state.pointer.x * Math.PI) / 15;
        const targetY = (state.pointer.y * Math.PI) / 15;

        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);

        // 2. Constant elegant rotations for sub-elements
        if (ringsRef.current) {
            ringsRef.current.rotation.z += delta * 0.15;
            ringsRef.current.rotation.y += delta * 0.1;
        }

        // 3. Slow, subtle breathing of the "Scales" to symbolize searching for balance
        if (scaleRef.current) {
            scaleRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.04;
        }
    });

    return (
        <group ref={groupRef} position={[0, -1, -6]}>
            <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>

                {/* Center Core: Frosted Glass Legal Pillar */}
                <mesh ref={mainPillarRef} position={[0, 0, 0]}>
                    <cylinderGeometry args={[1.5, 1.5, 12, 64]} />
                    <meshPhysicalMaterial
                        color="#0f172a"
                        transmission={0.95}
                        opacity={1}
                        metalness={0.2}
                        roughness={0.1}
                        ior={1.4}
                        thickness={3}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                    />
                </mesh>

                {/* Inner Golden Core showing through the frosted glass */}
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[0.15, 0.15, 10, 32]} />
                    <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} emissive="#D4AF37" emissiveIntensity={0.8} />
                </mesh>

                {/* The Floating Scales (Sleek Golden Bars) */}
                <group ref={scaleRef} position={[0, 2.5, 2.5]}>
                    {/* Main Balance Beam */}
                    <mesh>
                        <boxGeometry args={[10, 0.08, 0.4]} />
                        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
                    </mesh>

                    {/* Left Plate Base */}
                    <mesh position={[-4.5, -1.2, 0]}>
                        <cylinderGeometry args={[0.8, 1, 0.05, 64]} />
                        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.2} />
                    </mesh>

                    {/* Right Plate Base */}
                    <mesh position={[4.5, -1.2, 0]}>
                        <cylinderGeometry args={[0.8, 1, 0.05, 64]} />
                        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.2} />
                    </mesh>

                    {/* Left Suspension Strings (Lasers/Light) */}
                    <mesh position={[-4.5, -0.6, 0]}>
                        <cylinderGeometry args={[0.01, 0.01, 1.2, 8]} />
                        <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.5} transparent opacity={0.3} emissive="#ffffff" emissiveIntensity={0.5} />
                    </mesh>

                    {/* Right Suspension Strings */}
                    <mesh position={[4.5, -0.6, 0]}>
                        <cylinderGeometry args={[0.01, 0.01, 1.2, 8]} />
                        <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.5} transparent opacity={0.3} emissive="#ffffff" emissiveIntensity={0.5} />
                    </mesh>
                </group>

                {/* Encircling Orbiting Rings (Data/Rules mapping) */}
                <group ref={ringsRef} position={[0, -1, 0]}>
                    <mesh rotation={[Math.PI / 3, 0, 0]}>
                        <torusGeometry args={[4.5, 0.01, 16, 100]} />
                        <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
                    </mesh>
                    <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
                        <torusGeometry args={[5.5, 0.02, 16, 100]} />
                        <meshBasicMaterial color="#D4AF37" transparent opacity={0.3} />
                    </mesh>
                    <mesh rotation={[0, Math.PI / 2, 0]}>
                        <torusGeometry args={[6.5, 0.01, 16, 100]} />
                        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
                    </mesh>
                </group>

            </Float>

            {/* Subtle atmospheric gold and void dust */}
            <Sparkles count={100} scale={15} size={1} speed={0.1} opacity={0.25} color="#D4AF37" />
            <Sparkles count={60} scale={10} size={2} speed={0.3} opacity={0.15} color="#f8fafc" />
        </group>
    );
};

export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-10 h-full w-full pointer-events-auto">
            <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
                {/* Studio lighting for high-end glass and metal reflections */}
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#D4AF37" />
                <pointLight position={[5, 2, 8]} intensity={1} color="#ffffff" />

                {/* Environment mapping gives the glass physical material something to reflect */}
                <Environment preset="city" />

                <fog attach="fog" args={['#0f172a', 10, 25]} />
                <InteractiveMonoliths />
            </Canvas>
        </div>
    );
}
