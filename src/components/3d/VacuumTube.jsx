import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function VacuumTube({ speedMode = 'cruise' }) {
  const ringsGroupRef = useRef();
  const railsRef = useRef();
  const speedLinesRef = useRef();

  // Speed factor
  const speed = speedMode === 'supersonic' ? 24 : speedMode === 'cruise' ? 8 : 1.2;

  // Create array of ring portals
  const ringCount = 18;
  const ringSpacing = 4.5;
  const rings = useMemo(() => {
    return Array.from({ length: ringCount }, (_, i) => ({
      id: i,
      initialZ: -i * ringSpacing + 10,
    }));
  }, [ringCount, ringSpacing]);

  // Speed particles
  const particleCount = 150;
  const particleData = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 2.0 + Math.random() * 2.2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = Math.sin(angle) * radius;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    return pos;
  }, [particleCount]);

  useFrame((state, delta) => {
    // Animate rings backward to simulate speed tunnel
    if (ringsGroupRef.current) {
      ringsGroupRef.current.children.forEach((child) => {
        child.position.z += delta * speed;
        // Loop back when passing camera
        if (child.position.z > 14) {
          child.position.z -= ringCount * ringSpacing;
        }
      });
    }

    // Animate speed lines
    if (speedLinesRef.current) {
      const positions = speedLinesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 2] += delta * speed * 1.5;
        if (positions[i * 3 + 2] > 20) {
          positions[i * 3 + 2] -= 60;
        }
      }
      speedLinesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* 1. Vacuum Tube Steel Guide Rails (Under the Pod) */}
      <group position={[0, -1.0, 0]}>
        {/* Left rail */}
        <mesh position={[-0.95, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <boxGeometry args={[0.08, 120, 0.15]} />
          <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Right rail */}
        <mesh position={[0.95, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <boxGeometry args={[0.08, 120, 0.15]} />
          <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Central LIM Reaction Plate (Stator track) */}
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <boxGeometry args={[0.6, 120, 0.05]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.95} roughness={0.1} />
        </mesh>
      </group>

      {/* 2. Repeating Vacuum Tube Structural Rings */}
      <group ref={ringsGroupRef}>
        {rings.map((ring) => (
          <group key={ring.id} position={[0, 0, ring.initialZ]}>
            {/* Outer structural hoop */}
            <mesh>
              <torusGeometry args={[3.2, 0.04, 16, 64]} />
              <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
            </mesh>
            {/* Accent neon ring (Alternating Orange / Cyan) */}
            <mesh>
              <torusGeometry args={[3.16, 0.015, 16, 64]} />
              <meshBasicMaterial
                color={ring.id % 2 === 0 ? '#f05423' : '#00d2ff'}
                transparent
                opacity={0.65}
              />
            </mesh>
          </group>
        ))}
      </group>

      {/* 3. High-Velocity Warp Particle Slipstream */}
      <points ref={speedLinesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particleData}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={speedMode === 'supersonic' ? 0.09 : 0.05}
          color={speedMode === 'supersonic' ? '#f05423' : '#00e5ff'}
          transparent
          opacity={speedMode === 'stationary' ? 0.2 : 0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* 4. Atmospheric Tube Fog & Ambient Gradients */}
      <fog attach="fog" args={['#030811', 12, 38]} />
    </group>
  );
}
