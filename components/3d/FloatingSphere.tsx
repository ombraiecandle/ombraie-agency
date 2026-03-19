"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.rotation.z = t * 0.08;
    }

    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.3;
      innerRef.current.rotation.x = t * 0.2;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.1;
      ringRef.current.rotation.x = Math.PI / 4 + Math.sin(t * 0.3) * 0.1;
    }
  });

  return (
    <group>
      {/* Outer distorted sphere */}
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.35}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.5}
          wireframe={false}
        />
      </Sphere>

      {/* Inner glowing sphere */}
      <Sphere ref={innerRef} args={[0.9, 32, 32]}>
        <meshStandardMaterial
          color="#a855f7"
          emissive="#7c3aed"
          emissiveIntensity={0.8}
          transparent
          opacity={0.3}
          roughness={0.2}
          metalness={1}
        />
      </Sphere>

      {/* Core */}
      <Sphere args={[0.3, 16, 16]}>
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={2}
          transparent
          opacity={0.9}
          roughness={0}
          metalness={1}
        />
      </Sphere>

      {/* Orbit ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2, 0.015, 8, 120]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={1.5}
          transparent
          opacity={0.5}
          roughness={0}
          metalness={1}
        />
      </mesh>

      {/* Second ring */}
      <mesh rotation={[Math.PI / 2.5, Math.PI / 6, 0]}>
        <torusGeometry args={[2.4, 0.008, 8, 100]} />
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={1}
          transparent
          opacity={0.3}
          roughness={0}
        />
      </mesh>

      {/* Ambient lights */}
      <pointLight color="#7c3aed" intensity={3} position={[2, 2, 2]} distance={8} />
      <pointLight color="#f59e0b" intensity={1.5} position={[-2, -1, 1]} distance={6} />
      <ambientLight intensity={0.3} />
    </group>
  );
}
