import { Canvas } from '@react-three/fiber'
import {  Environment, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { Bloom, ChromaticAberration, EffectComposer } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing'


import { Grid } from './Grid.js'
import { Ground } from './Ground.js'
import { Frames } from './Frames.js'
import { GrandeArche } from './GrandeArche.js'


export const App = ({ images }) => (
  <Suspense fallback = { null }>
    <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
      {/* < OrbitControls /> */}
      <color attach="background" args={['#1c1d1d']} />
      <fog attach="fog" args={['#1c1d1d', 0, 18]} />
      
      <group position={[0, -0.5, 0]}>
        <GrandeArche />
        <Frames images={images} />
        <Grid />
        <Ground />
      </group>
      <Environment preset="city" />
      <EffectComposer>
        <Bloom
          blendFunction = { BlendFunction.ADD }
          intensity = { 0.2 }
          width = { 300 }
          height = { 300 }
          kernelSize = { 5 }
          luminanceThreshold = { 0.15 }
          luminanceSmoothing = { 0.025 }
        />
        <ChromaticAberration
          blendFunction = { BlendFunction.NORMAL }
          offset = {[0.001, 0.0015]}
          // offset = {[0.0005, 0.0012]}
        />
      </EffectComposer>
    </Canvas>
  </Suspense>
)
