import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';

// Three interlocking torus-knots in gold / emerald / bronze, echoing the
// "خيوط" (threads) motif from the logo and the three product tiers.
function WovenKnots() {
  const group = useRef();
  useFrame((state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });

  const knots = [
    { color: '#c9a227', scale: 1, position: [0, 0, 0] },
    { color: '#16806b', scale: 0.72, position: [0.4, 0.3, -0.6] },
    { color: '#b0793c', scale: 0.55, position: [-0.5, -0.35, 0.5] },
  ];

  return (
    <group ref={group}>
      {knots.map((k, i) => (
        <Float key={i} speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
          <mesh position={k.position} scale={k.scale}>
            <torusKnotGeometry args={[0.9, 0.24, 128, 24]} />
            <meshStandardMaterial
              color={k.color}
              metalness={0.85}
              roughness={0.28}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={60} color="#f3ede4" />
      <pointLight position={[-4, -2, 2]} intensity={30} color="#16806b" />
      <WovenKnots />
      <Environment preset="city" />
    </Canvas>
  );
}
