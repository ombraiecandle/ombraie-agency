"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingSphere() {
  const meshRef  = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ringRef  = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.rotation.z = t * 0.08;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.3;
      innerRef.current.rotation.x =  t * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.1;
      ringRef.current.rotation.x = Math.PI / 4 + Math.sin(t * 0.3) * 0.1;
    }
  });

  return (
    <group>
      {/* Outer distorted sphere */}
      <Sphere ref={meshRef} args={[1.8, 64, 64]}>
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.4}
          speed={1.8}
          roughness={0.05}
          metalness={0.9}
          transparent
          opacity={0.85}
          wireframe={false}
        />
      </Sphere>

      {/* Inner glowing sphere */}
      <Sphere ref={innerRef} args={[1.1, 32, 32]}>
        <meshStandardMaterial
          color="#a855f7"
          emissive="#7c3aed"
          emissiveIntensity={0.8}
          transparent
          opacity={0.5}
          roughness={0.1}
          metalness={1}
        />
      </Sphere>

      {/* Core gold */}
      <Sphere args={[0.38, 16, 16]}>
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={2}
          transparent
          opacity={1}
          roughness={0}
          metalness={1}
        />
      </Sphere>

      {/* Orbit ring 1 */}
      <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.4, 0.022, 8, 140]} />
        <meshStandardMaterial color="#7c3aed" emissive="#a855f7" emissiveIntensity={1.5} transparent opacity={0.9} roughness={0} metalness={1} />
      </mesh>

      {/* Orbit ring 2 */}
      <mesh rotation={[Math.PI / 2.5, Math.PI / 6, 0]}>
        <torusGeometry args={[2.9, 0.012, 8, 120]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={1.2} transparent opacity={0.6} roughness={0} />
      </mesh>

      {/* Orbit ring 3 */}
      <mesh rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[3.3, 0.006, 8, 100]} />
        <meshStandardMaterial color="#c084fc" emissive="#c084fc" emissiveIntensity={0.8} transparent opacity={0.45} roughness={0} />
      </mesh>

      {/* Lights — adapted for light background */}
      <pointLight color="#7c3aed" intensity={8}  position={[3, 3, 3]}   distance={12} />
      <pointLight color="#f59e0b" intensity={4}  position={[-3, -2, 2]} distance={10} />
      <pointLight color="#a855f7" intensity={3}  position={[0, -3, 2]}  distance={8}  />
      <ambientLight intensity={1.2} />
    </group>
  );
}
