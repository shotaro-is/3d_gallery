import { MeshReflectorMaterial } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { RepeatWrapping, TextureLoader } from 'three'
import { useEffect } from 'react'

export function Ground(){

    const diffuse = useLoader(TextureLoader, 'textures/grid-texture-white-10.png');

    useEffect(() => {
        diffuse.wrapS = RepeatWrapping;
        diffuse.wrapT = RepeatWrapping;
        diffuse.anisotropy = 4;
        diffuse.repeat.set(30,150);
        diffuse.offset.set(0, 0);
    }, [diffuse])

    return (
        <>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[5, 30]} />
            <MeshReflectorMaterial
                map = { diffuse }
                blur={[300, 100]}
                resolution={1024}
                mixBlur={1}
                mixStrength={80}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#333333"
                metalness= { 0.75 }
                roughness= { 1 }
            />
        </mesh>
        </>       
    )
}
