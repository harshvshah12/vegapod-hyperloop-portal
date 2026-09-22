import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, AdaptiveDpr, Float } from '@react-three/drei';
import * as THREE from 'three';
import { VegapodModel } from './VegapodModel';
import { VacuumTube } from './VacuumTube';

function SceneLighting({ speedMode }) {
  return (
    <>
      <ambientLight intensity={0.9} />
      {/* Primary Key Light directly on Pod */}
      <directionalLight
        position={[6, 10, 8]}
        intensity={2.4}
        castShadow
        shadow-mapSize={[1024, 1024]}
        color="#ffffff"
      />
      {/* Front Nose Key Light for Crisp Aerodynamic Highlights */}
      <directionalLight
        position={[0, 2, 7]}
        intensity={1.8}
        color="#ffffff"
      />
      {/* Front rim orange key light */}
      <directionalLight
        position={[-7, 3, 5]}
        intensity={2.0}
        color="#f05423"
      />
      {/* Rear cool blue rim fill */}
      <directionalLight
        position={[5, -2, -8]}
        intensity={1.6}
        color="#00d2ff"
      />
      {/* Underside Maglev Glow Point Light */}
      <pointLight
        position={[0, -0.6, 0.5]}
        intensity={3.5}
        color="#f05423"
        distance={5}
      />
      {/* Top Focused Spotlight */}
      <spotLight
        position={[0, 7, 3]}
        angle={0.7}
        penumbra={0.5}
        intensity={3.0}
        color="#ffffff"
      />
    </>
  );
}

export function HyperloopCanvas({ speedMode = 'cruise', activeHotspot, onSelectHotspot, isInteractive = true }) {
  const controlsRef = useRef();

  return (
    <div className="relative w-full h-full min-h-[500px] select-none">
      <Canvas
        camera={{ position: [3.2, 1.2, 3.8], fov: 36 }}
        dpr={[1, Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)]}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.25,
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <AdaptiveDpr pixelated />
        <SceneLighting speedMode={speedMode} />

        <Suspense fallback={null}>
          <Float
            speed={speedMode === 'stationary' ? 1.5 : 0}
            rotationIntensity={speedMode === 'stationary' ? 0.15 : 0}
            floatIntensity={speedMode === 'stationary' ? 0.25 : 0}
          >
            <VegapodModel
              speedMode={speedMode}
              activeHotspot={activeHotspot}
              onSelectHotspot={onSelectHotspot}
            />
          </Float>

          <VacuumTube speedMode={speedMode} />

          {isInteractive && (
            <OrbitControls
              ref={controlsRef}
              enablePan={false}
              enableZoom={true}
              minDistance={2.5}
              maxDistance={9.0}
              maxPolarAngle={Math.PI / 2 + 0.15}
              minPolarAngle={Math.PI / 6}
              dampingFactor={0.06}
              rotateSpeed={0.8}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
