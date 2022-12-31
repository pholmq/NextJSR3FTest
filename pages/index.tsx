// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })
import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
// import { describe } from "node:test";
// import AnimatedBox from "../components/AnimatedBox";
import Lights from "../components/lights";
import Ground from "../components/ground";
import { OrbitControls, Stats, useTexture } from "@react-three/drei";

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Skull = () => {
  const model = useLoader(GLTFLoader, "./models/skull_salazar_downloadable.glb")
  model.scene.traverse((object) => {
    if (object.isObject3D) {
      object.castShadow = true;
    }
  })
  return <primitive object={model.scene} position={[0, 1, 0]}/>
}

const TexturedSpheres = () => {
  const map = useTexture("./textures/metal_plate_diff_1k.jpg");
  const displacementMap = useTexture("./textures/metal_plate_disp_1k.png");
  const normalMap = useTexture("./textures/metal_plate_nor_gl_1k.jpg");
  const roughnessMap = useTexture("./textures/metal_plate_rough_1k.jpg");

  return (
    <>
    {/* <mesh scale={[0.5, 0.5, 0.5]} position={[-1, 1, 0]}>
      <sphereGeometry />
      <meshStandardMaterial map={map}/>
    </mesh> */}
    <mesh scale={[0.5, 0.5, 0.5]} position={[0, 1, 0]} castShadow >
      <sphereGeometry args={[1, 50, 50]}/>
      <meshStandardMaterial map={map} normalMap={normalMap} roughnessMap={roughnessMap}/>
    </mesh>
    {/* <mesh scale={[0.5, 0.5, 0.5]} position={[1, 1, 0]}>
      <sphereGeometry args={[1, 300, 300]} />
      <meshStandardMaterial 
      map={map} 
      normalMap={normalMap} 
      roughnessMap={roughnessMap} 
      displacementMap={displacementMap}
      displacementScale={0.1}
      />
    </mesh> */}


    </>
  )
}

const Home: NextPage = () => {

  const testing = true;

  return (
    <div className="container">
    <Canvas shadows>
      {testing ? <>
      <Stats/>
      <axesHelper args={[2]}/>
      <gridHelper args={[10, 10]}/>
      </>
       : null }
      <OrbitControls/>
      <Skull/>
      <Lights/>
      <Ground/>
      {/* <TexturedSpheres/> */}
      {/* <mesh >
      <coneGeometry/>
      <meshStandardMaterial color="blue" wireframe/>
    </mesh> */}
      {/* <AnimatedBox/> */}
    </Canvas>
    </div>
  )
}

export default Home;