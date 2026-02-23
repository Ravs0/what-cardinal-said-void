import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Starfield() {
    const ref = useRef<THREE.Points>(null!);
    const count = 5000;

    const positions = useMemo(() => {
        const coords = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const r = 25 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            let pX = r * Math.sin(phi) * Math.cos(theta);
            let pY = r * Math.sin(phi) * Math.sin(theta);
            let pZ = r * Math.cos(phi);

            // Give it a swirling galaxy effect
            const swirl = r * 0.1;
            const sP = Math.sin(swirl);
            const cP = Math.cos(swirl);

            const tempX = pX * cP - pZ * sP;
            const tempZ = pX * sP + pZ * cP;

            coords[i * 3] = tempX;
            coords[i * 3 + 1] = pY * 0.3; // Flatten it slightly
            coords[i * 3 + 2] = tempZ;
        }
        return coords;
    }, [count]);

    const colors = useMemo(() => {
        const colorArr = new Float32Array(count * 3);
        const cardinal = new THREE.Color('#c41e3a');
        const indigo = new THREE.Color('#4a4a4a'); // Replaced indigo with deep grey
        const voidColor = new THREE.Color('#ffffff'); // Replaced soft blue with stark white

        for (let i = 0; i < count; i++) {
            const mix = Math.random();
            let c = cardinal;

            if (mix > 0.4) c = indigo;
            if (mix > 0.9) c = voidColor;

            // Add some brightness variance
            const brightness = 0.5 + Math.random() * 0.5;

            colorArr[i * 3] = c.r * brightness;
            colorArr[i * 3 + 1] = c.g * brightness;
            colorArr[i * 3 + 2] = c.b * brightness;
        }
        return colorArr;
    }, [count]);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.05;
            ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                vertexColors
                size={0.06}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.8}
            />
        </Points>
    );
}

export default function WebGLBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none mix-blend-screen opacity-60">
            <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
                <fog attach="fog" args={['#000000', 10, 40]} />
                <Starfield />
            </Canvas>
        </div>
    );
}
