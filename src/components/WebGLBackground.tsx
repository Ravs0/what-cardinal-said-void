import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function UndulatingDataTerrain() {
    const ref = useRef<THREE.Points>(null!);
    const count = 6000;

    // Grid dimensions
    const width = 100;
    const depth = 60;

    const [positions, colors] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);

        const gold = new THREE.Color('#D4AF37');
        const slate = new THREE.Color('#1e293b');
        const ivory = new THREE.Color('#f8fafc');

        let i = 0;
        for (let x = 0; x < width; x++) {
            for (let z = 0; z < depth; z++) {
                if (i >= count) continue;

                // Spread the grid
                const pX = (x - width / 2) * 1.5;
                const pZ = (z - depth / 2) * 1.5;

                pos[i * 3] = pX;
                pos[i * 3 + 1] = 0; // Y will be animated
                pos[i * 3 + 2] = pZ;

                const mix = Math.random();
                let c = slate;
                if (mix > 0.8) c = ivory;
                if (mix > 0.98) c = gold;

                const brightness = 0.3 + Math.random() * 0.7;
                col[i * 3] = c.r * brightness;
                col[i * 3 + 1] = c.g * brightness;
                col[i * 3 + 2] = c.b * brightness;

                i++;
            }
        }
        return [pos, col];
    }, [count]);

    useFrame((state) => {
        const time = state.clock.elapsedTime * 0.3;
        if (ref.current) {
            const positions = ref.current.geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < count; i++) {
                const x = positions[i * 3];
                const z = positions[i * 3 + 2];
                // Smooth undulating wave algorithm
                const y = Math.sin(x * 0.1 + time) * 3 + Math.cos(z * 0.1 + time) * 3;
                positions[i * 3 + 1] = y;
            }
            ref.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} rotation={[Math.PI / 6, 0, 0]} position={[0, -10, -20]}>
            <PointMaterial
                transparent
                vertexColors
                size={0.12}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.8}
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
                <UndulatingDataTerrain />
            </Canvas>
        </div>
    );
}
