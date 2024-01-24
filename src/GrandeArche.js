import { useLoader } from "@react-three/fiber";
import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh } from 'three'
import { useEffect } from "react";

export function GrandeArche(){
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL +  "/models/grandearche-5.glb")
        useEffect(()=>{
            gltf.scene.scale.set(8, 8, 8.5);
            gltf.scene.position.set(0, 4, -13);
            gltf.scene.traverse(object =>{
                if (object instanceof Mesh)
                object.castShadow = true;
                object.receiveShadow = true;
                // object.material.envMapIntensity = 20;
            })
        })
    
    return (<primitive object={gltf.scene} fog={false} />)
    
}