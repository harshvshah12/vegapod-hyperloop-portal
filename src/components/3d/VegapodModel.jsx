import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export function VegapodModel({ speedMode = 'cruise', activeHotspot, onSelectHotspot }) {
  const groupRef = useRef();
  const maglevGlowRef = useRef();
  const trailRef = useRef();

  // Speed multiplier based on mode
  const speedFactor = speedMode === 'supersonic' ? 3.5 : speedMode === 'cruise' ? 1.5 : 0.2;

  // Pre-generate particle positions for supersonic wake
  const particleCount = 80;
  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < particleCount; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 0.8,
        y: (Math.random() - 0.5) * 0.5 - 0.1,
        z: -2.5 - Math.random() * 4,
        speed: 1.5 + Math.random() * 2,
        size: 0.03 + Math.random() * 0.05,
        color: Math.random() > 0.4 ? '#f05423' : '#00d2ff'
      });
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Magnetic levitation hover wave
      const hoverAmp = speedMode === 'supersonic' ? 0.03 : 0.08;
      const hoverFreq = speedMode === 'supersonic' ? 8.0 : 2.0;
      groupRef.current.position.y = Math.sin(t * hoverFreq) * hoverAmp;

      // Slight aerodynamic roll & pitch sway
      if (speedMode !== 'stationary') {
        groupRef.current.rotation.z = Math.sin(t * 1.8) * 0.02 * speedFactor;
        groupRef.current.rotation.x = Math.sin(t * 2.2) * 0.015 * speedFactor;
      } else {
        groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, 0, delta * 3);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, delta * 3);
      }
    }

    // Pulse magnetic levitation glow
    if (maglevGlowRef.current) {
      maglevGlowRef.current.intensity = 1.5 + Math.sin(t * 6) * 0.8;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 1. Main Aerodynamic Carbon Fuselage */}
      {/* Nose cone - sleek tapered front */}
      <mesh position={[0, 0, 2.2]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <coneGeometry args={[0.82, 1.8, 32]} />
        <meshPhysicalMaterial
          color="#0d2446"
          roughness={0.15}
          metalness={0.85}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
        />
      </mesh>

      {/* Main pod body cylinder */}
      <mesh position={[0, 0, 0.4]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.82, 0.82, 2.6, 32]} />
        <meshPhysicalMaterial
          color="#0d2446"
          roughness={0.18}
          metalness={0.8}
          clearcoat={0.9}
        />
      </mesh>

      {/* Rear diffuser taper */}
      <mesh position={[0, 0, -1.3]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.82, 0.65, 1.0, 32]} />
        <meshStandardMaterial color="#09182f" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* 2. Official Brand Orange Aerodynamic Racing Stripes */}
      {/* Top spine stripe */}
      <mesh position={[0, 0.83, 0.5]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.18, 0.02, 3.2]} />
        <meshStandardMaterial color="#f05423" emissive="#f05423" emissiveIntensity={0.6} roughness={0.2} metalness={0.5} />
      </mesh>

      {/* Left flank orange racing accent */}
      <mesh position={[-0.83, 0, 0.5]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.02, 0.12, 3.0]} />
        <meshStandardMaterial color="#f05423" emissive="#f05423" emissiveIntensity={0.5} roughness={0.3} />
      </mesh>

      {/* Right flank orange racing accent */}
      <mesh position={[0.83, 0, 0.5]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.02, 0.12, 3.0]} />
        <meshStandardMaterial color="#f05423" emissive="#f05423" emissiveIntensity={0.5} roughness={0.3} />
      </mesh>

      {/* 3. Cockpit Tinted Canopy / Telemetry Visor */}
      <mesh position={[0, 0.55, 1.2]} rotation={[Math.PI / 4, 0, 0]}>
        <boxGeometry args={[0.7, 0.28, 1.2]} />
        <meshPhysicalMaterial
          color="#040b17"
          transparent
          opacity={0.88}
          roughness={0.05}
          metalness={0.95}
          transmission={0.4}
          thickness={0.5}
        />
      </mesh>

      {/* 4. Internal Space Truss / Chassis Glimpse (Visible inside canopy) */}
      <mesh position={[0, 0.35, 1.1]}>
        <boxGeometry args={[0.55, 0.08, 0.9]} />
        <meshStandardMaterial color="#00d2ff" wireframe />
      </mesh>

      {/* 5. Underbody Linear Induction Motor (LIM) Stator Core */}
      <group position={[0, -0.78, 0.2]}>
        <mesh castShadow>
          <boxGeometry args={[0.7, 0.18, 2.2]} />
          <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.3} />
        </mesh>
        {/* Copper coils row */}
        {[-0.8, -0.4, 0, 0.4, 0.8].map((zPos, idx) => (
          <mesh key={idx} position={[0, -0.09, zPos]}>
            <boxGeometry args={[0.62, 0.06, 0.25]} />
            <meshStandardMaterial color="#d97706" metalness={0.95} roughness={0.2} />
          </mesh>
        ))}
      </group>

      {/* 6. Four Electromagnetic Levitation Sleds (Skids) */}
      {/* Front Left */}
      <mesh position={[-0.95, -0.55, 1.4]} castShadow>
        <boxGeometry args={[0.22, 0.14, 0.8]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Front Right */}
      <mesh position={[0.95, -0.55, 1.4]} castShadow>
        <boxGeometry args={[0.22, 0.14, 0.8]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Rear Left */}
      <mesh position={[-0.95, -0.55, -0.8]} castShadow>
        <boxGeometry args={[0.22, 0.14, 0.8]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Rear Right */}
      <mesh position={[0.95, -0.55, -0.8]} castShadow>
        <boxGeometry args={[0.22, 0.14, 0.8]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* 7. Magnetic Levitation Flux Emitters (Pulsating Cyan/Orange Halbach arrays) */}
      <mesh position={[-0.95, -0.64, 1.4]}>
        <boxGeometry args={[0.18, 0.02, 0.7]} />
        <meshBasicMaterial color="#00d2ff" />
      </mesh>
      <mesh position={[0.95, -0.64, 1.4]}>
        <boxGeometry args={[0.18, 0.02, 0.7]} />
        <meshBasicMaterial color="#00d2ff" />
      </mesh>
      <mesh position={[-0.95, -0.64, -0.8]}>
        <boxGeometry args={[0.18, 0.02, 0.7]} />
        <meshBasicMaterial color="#00d2ff" />
      </mesh>
      <mesh position={[0.95, -0.64, -0.8]}>
        <boxGeometry args={[0.18, 0.02, 0.7]} />
        <meshBasicMaterial color="#00d2ff" />
      </mesh>

      {/* Dynamic Maglev Field Point Lights */}
      <pointLight ref={maglevGlowRef} position={[0, -0.8, 0.5]} color="#00d2ff" intensity={2} distance={3} />
      <pointLight position={[0, 0.6, 2.0]} color="#f05423" intensity={1.5} distance={3} />

      {/* 8. Rear High-Speed Propulsion Thruster / Vacuum Exhaust Nozzle */}
      <group position={[0, 0, -1.8]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.6, 0.4, 24, 1, true]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} side={THREE.DoubleSide} />
        </mesh>
        {/* Core thrust glow */}
        <mesh position={[0, 0, -0.1]}>
          <circleGeometry args={[0.45, 24]} />
          <meshBasicMaterial color={speedMode === 'supersonic' ? '#ff3b00' : '#00d2ff'} />
        </mesh>
        <pointLight position={[0, 0, -0.3]} color={speedMode === 'supersonic' ? '#f05423' : '#00d2ff'} intensity={speedMode === 'supersonic' ? 4 : 2} distance={4} />
      </group>

      {/* 9. Interactive Engineering Hotspots */}
      {/* Hotspot 1: Aerodynamics / Aeroshell */}
      <group position={[0, 0.95, 1.8]}>
        <Html distanceFactor={10} position={[0, 0, 0]} center>
          <button
            onClick={() => onSelectHotspot && onSelectHotspot('aero')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold transition-all shadow-lg backdrop-blur-md cursor-pointer select-none ${
              activeHotspot === 'aero'
                ? 'bg-[#f05423] text-white ring-2 ring-white scale-110 shadow-orange-500/50'
                : 'bg-[#0d2446]/80 text-[#00d2ff] hover:bg-[#f05423] hover:text-white border border-[#00d2ff]/40'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#f05423] animate-ping" />
            <span>AERODYNAMICS</span>
          </button>
        </Html>
      </group>

      {/* Hotspot 2: Maglev / Halbach Levitation */}
      <group position={[1.15, -0.65, 0.8]}>
        <Html distanceFactor={10} position={[0, 0, 0]} center>
          <button
            onClick={() => onSelectHotspot && onSelectHotspot('maglev')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold transition-all shadow-lg backdrop-blur-md cursor-pointer select-none ${
              activeHotspot === 'maglev'
                ? 'bg-[#f05423] text-white ring-2 ring-white scale-110 shadow-orange-500/50'
                : 'bg-[#0d2446]/80 text-[#00d2ff] hover:bg-[#f05423] hover:text-white border border-[#00d2ff]/40'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-ping" />
            <span>MAGLEV</span>
          </button>
        </Html>
      </group>

      {/* Hotspot 3: Linear Induction Motor (LIM) */}
      <group position={[-1.15, -0.85, -0.2]}>
        <Html distanceFactor={10} position={[0, 0, 0]} center>
          <button
            onClick={() => onSelectHotspot && onSelectHotspot('propulsion')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold transition-all shadow-lg backdrop-blur-md cursor-pointer select-none ${
              activeHotspot === 'propulsion'
                ? 'bg-[#f05423] text-white ring-2 ring-white scale-110 shadow-orange-500/50'
                : 'bg-[#0d2446]/80 text-[#00d2ff] hover:bg-[#f05423] hover:text-white border border-[#00d2ff]/40'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#f05423] animate-ping" />
            <span>LIM PROPULSION</span>
          </button>
        </Html>
      </group>

      {/* Hotspot 4: Modular Chassis Framework (Patent 2026) */}
      <group position={[0, -0.3, -1.4]}>
        <Html distanceFactor={10} position={[0, 0, 0]} center>
          <button
            onClick={() => onSelectHotspot && onSelectHotspot('chassis')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold transition-all shadow-lg backdrop-blur-md cursor-pointer select-none ${
              activeHotspot === 'chassis'
                ? 'bg-[#f05423] text-white ring-2 ring-white scale-110 shadow-orange-500/50'
                : 'bg-[#0d2446]/80 text-[#00d2ff] hover:bg-[#f05423] hover:text-white border border-[#00d2ff]/40'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-ping" />
            <span>CHASSIS PATENT</span>
          </button>
        </Html>
      </group>
    </group>
  );
}
