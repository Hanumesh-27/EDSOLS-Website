
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  ContactShadows,
  Environment,
  useGLTF,
} from '@react-three/drei'

function RobotModel() {
  const robotRef = useRef()
  const { scene } = useGLTF('/models/humanoid-robot/source/model.glb')

  useFrame((state, delta) => {
  if (robotRef.current) {
    // Continuous 360-degree rotation
    robotRef.current.rotation.y += delta * 0.4

    // Gentle mouse-responsive tilt
    robotRef.current.rotation.x +=
      (state.pointer.y * 0.06 - robotRef.current.rotation.x) * 0.03
  }
})
  return (
    <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.08}>
      <primitive
        ref={robotRef}
        object={scene}
        scale={1.9}
        position={[0, -0.1, 0]}
      />
    </Float>
  )
}

function HeroScene() {
  return (
    <div className="hero-canvas">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[4, 5, 5]}
          intensity={2.5}
          color="#FFFFFF"
        />

        <pointLight
          position={[-3, 1, 2]}
          intensity={18}
          color="#FFFFFF"
        />

        <pointLight
          position={[3, 2, -3]}
          intensity={10}
          color="#FFFFFF"
        />

        <Suspense fallback={null}>
          <RobotModel />
          <Environment preset="studio" />

          <ContactShadows
            position={[0, -1.8, 0]}
            opacity={0.4}
            scale={4}
            blur={2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

useGLTF.preload('/models/humanoid-robot/source/model.glb')

export default HeroScene
