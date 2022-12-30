// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })

import { Canvas } from "@react-three/fiber";
import { describe } from "node:test";
import AnimatedBox from "../components/AnimatedBox";
import { OrbitControls, Stats } from "@react-three/drei";

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
      <ambientLight intensity={0.1}/>
      <directionalLight position={[0,0,5]}/>
      <mesh >
      <sphereGeometry/>
      <meshStandardMaterial/>
    </mesh>
      {/* <AnimatedBox/> */}
    </Canvas>
    </div>
  )
}
