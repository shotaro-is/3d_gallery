import { Canvas } from '@react-three/fiber'
import {  Environment  } from '@react-three/drei'
import { Suspense } from 'react'

import { Ground } from './Ground.js'
import { Frames } from './Frames.js'
import { GrandeArche } from './GrandeArche.js'
import { Beams } from './Beams.js'


export const App = ({ images }) => (
  <Suspense fallback = { null }>
    <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 30] }}>
      <color attach="background" args={['#191920']} />
      <fog attach="fog" args={['#191920', 0, 13]} />
      <group position={[0, -0.5, 0]}>
        <GrandeArche />
        <Beams />
        <Frames images={images} />
        <Ground />
      </group>
      <Environment preset="city" />
    </Canvas>
  </Suspense>
)
