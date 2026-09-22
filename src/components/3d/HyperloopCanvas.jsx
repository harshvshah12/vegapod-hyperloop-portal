import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, AdaptiveDpr, Float } from '@react-three/drei';
import * as THREE from 'three';
import { VegapodModel } from './VegapodModel';
import { VacuumTube } from './VacuumTube';

function SceneLighting({ speedMode }) {
  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight
        position={[8, 12, 10]}
        intensity={1.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
        color="#ffffff"
      />
      {/* Front rim orange key light */}
      <directionalLight
        position={[-8, 4, 8]}
        intensity={1.4}
        color="#f05423"
      />
      {/* Rear cool blue rim fill */}
      <directionalLight
        position={[6, -4, -10]}
        intensity={1.2}
        color="#00d2ff"
      />
    </>
  );
}

function CanvasFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#030811] text-[#f05423]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-4 border-[#f05423]/20 border-t-[#f05423] rounded-full animate-spin" />
        <span className="font-mono text-sm tracking-widest uppercase text-slate-300">
          Initializing 3D Telemetry...
        </span>
      </div>
    </div>
  );
}

export function HyperloopCanvas({ speedMode = 'cruise', activeHotspot, onSelectHotspot, isInteractive = true }) {
  const controlsRef = useRef();

  return (
    <div className="relative w-full h-full min-h-[480px] select-none">
      <Canvas
        camera={{ position: [5.5, 2.2, 5.8], fov: 42 }}
        dpr={[1, Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)]}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <AdaptiveDpr pixelated />
        <SceneLighting speedMode={speedMode} />

        <Suspense fallback={null}>
          <Float
            speed={speedMode === 'stationary' ? 1.5 : 0}
            rotationIntensity={speedMode === 'stationary' ? 0.2 : 0}
            floatIntensity={speedMode === 'stationary' ? 0.3 : 0}
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
              minDistance={3.2}
              maxDistance={14.0}
              maxPolarAngle={Math.PI / 2 + 0.1}
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
