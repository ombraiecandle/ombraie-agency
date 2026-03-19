"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import FloatingSphere from "./FloatingSphere";
import ParticleField from "./ParticleField";

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ParticleField count={1400} />
        <FloatingSphere />
      </Suspense>
    </Canvas>
  );
}
