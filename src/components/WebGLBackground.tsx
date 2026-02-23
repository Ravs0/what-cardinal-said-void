import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ArchitecturalDataGrid() {
    const ref = useRef<THREE.Points>(null!);
    const count = 3000;

    const positions = useMemo(() => {
        const coords = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Snap points to an architectural grid structure
            const gridSize = 1.5;
            const spread = 40;

            coords[i * 3] = Math.round((Math.random() - 0.5) * spread / gridSize) * gridSize;     // X
            coords[i * 3 + 1] = Math.round((Math.random() - 0.5) * spread / gridSize) * gridSize; // Y
            coords[i * 3 + 2] = Math.round((Math.random() - 0.5) * spread / gridSize) * gridSize; // Z
        }
        return coords;
    }, [count]);

    const colors = useMemo(() => {
        const colorArr = new Float32Array(count * 3);
        const gold = new THREE.Color('#D4AF37');
        const slate = new THREE.Color('#334155');
        const ivory = new THREE.Color('#f8fafc');

        for (let i = 0; i < count; i++) {
            const mix = Math.random();
            let c = slate;

            if (mix > 0.7) c = ivory;
            if (mix > 0.95) c = gold; // Rare gold data points

            const brightness = 0.5 + Math.random() * 0.5;

            colorArr[i * 3] = c.r * brightness;
            colorArr[i * 3 + 1] = c.g * brightness;
            colorArr[i * 3 + 2] = c.b * brightness;
        }
        return colorArr;
    }, [count]);

    useFrame((state, delta) => {
        if (ref.current) {
            // Rigid, linear, calculated panning rather than swirling
            ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.1) * 2;
            ref.current.rotation.y += delta * 0.02;
        }
    });

    return (
        <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                vertexColors
                size={0.08}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    );
}

export default function WebGLBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none mix-blend-screen opacity-40">
            <Canvas camera={{ position: [0, 5, 20], fov: 60 }}>
                {/* Clean, deep legal blue fog to ground the structure */}
                <fog attach="fog" args={['#0f172a', 10, 35]} />
                <ArchitecturalDataGrid />
            </Canvas>
        </div>
    );
}
