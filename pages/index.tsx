// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })

import { Canvas } from "@react-three/fiber";
import { describe } from "node:test";
import AnimatedBox from "../components/AnimatedBox";
import { OrbitControls, Stats, useTexture } from "@react-three/drei";


const TexturedSpheres = () => {
  const map = useTexture("./textures/metal_plate_diff_1k.jpg");
  const displacementMap = useTexture("./textures/metal_plate_disp_1k.png");
  const normalMap = useTexture("./textures/metal_plate_nor_gl_1k.jpg");
  const roughnessMap = useTexture("./textures/metal_plate_rough_1k.jpg");

  return (
    <>
    <mesh scale={[0.5, 0.5, 0.5]} position={[-1, 0, 0]}>
      <sphereGeometry />
      <meshStandardMaterial map={map}/>
    </mesh>
    <mesh scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]}>
      <sphereGeometry />
      <meshStandardMaterial map={map} normalMap={normalMap} roughnessMap={roughnessMap}/>
    </mesh>
    <mesh scale={[0.5, 0.5, 0.5]} position={[1, 0, 0]}>
      <sphereGeometry args={[1, 300, 300]} />
      <meshStandardMaterial 
      map={map} 
      normalMap={normalMap} 
      roughnessMap={roughnessMap} 
      displacementMap={displacementMap}
      displacementScale={0.1}
      />
    </mesh>


    </>
  )
}

export default function Home() {

  const testing = true;

  return (
    <div className="container">
    <Canvas>
      {testing ? <>
      <Stats/>
      <axesHelper args={[2]}/>
      <gridHelper args={[10, 10]}/>
      </>
       : null }
      <OrbitControls/>
      <ambientLight intensity={0.3}/>
      <directionalLight position={[0,5,5]}/>
      <TexturedSpheres/>
      {/* <mesh >
      <coneGeometry/>
      <meshStandardMaterial color="blue" wireframe/>
    </mesh> */}
      {/* <AnimatedBox/> */}
    </Canvas>
    </div>
  )
}
