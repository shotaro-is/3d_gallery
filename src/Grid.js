import { useLoader } from '@react-three/fiber'
import { useEffect } from 'react'
import { RepeatWrapping, TextureLoader } from 'three'

export function Grid(){
    
    const diffuse = useLoader(TextureLoader, process.env.PUBLIC_URL + 'textures/grid-texture-white-10.png');

    useEffect(() => {
        diffuse.wrapS = RepeatWrapping;
        diffuse.wrapT = RepeatWrapping;
        diffuse.anisotropy = 4;
        diffuse.repeat.set(90,15);
        diffuse.offset.set(0, 0);
    }, [diffuse])

    return(
        <>
            <mesh rotation-x = { -Math.PI * 0.5 } rotation-z = { -Math.PI * 0.5 } position = { [0, 0.01, -5] } castShadow recieveShadow>
                <planeGeometry args = { [30, 5] } />
                <meshStandardMaterial
                    // resolution={2048}
                    color = { [1, 1, 1] }
                    opacity= { 0.5 }
                    map = { diffuse }
                    alphamap = { diffuse }
                    transparent = { true }
                    recieveShadow
                    castShadow
                    // alphaTest = {0.5}
                />
            </mesh>
        </>
    )
}