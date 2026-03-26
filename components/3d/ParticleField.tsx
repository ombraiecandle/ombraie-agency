"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleField({ count = 900 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const purple = new THREE.Color("#7c3aed");
    const violet = new THREE.Color("#a855f7");
    const indigo = new THREE.Color("#4f46e5");
    const gold   = new THREE.Color("#f59e0b");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      const r     = 4 + Math.random() * 5;

      positions[i3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = r * Math.cos(phi);

      const t = Math.random();
      let c: THREE.Color;
      if      (t < 0.5)  c = purple.clone().lerp(violet, Math.random());
      else if (t < 0.8)  c = violet.clone().lerp(indigo, Math.random());
      else               c = gold.clone().lerp(violet, Math.random() * 0.5);

      colors[i3]     = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.035;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.018) * 0.08;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]}    />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}
