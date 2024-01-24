import { MeshReflectorMaterial } from '@react-three/drei'

export function Ground(){
    return (
        <>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[5, 30]} />
            <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={80}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#1c1c1c"
                metalness= { 0.75 }
                roughness= { 1 }
            />
        </mesh>
        </>       
    )
}
