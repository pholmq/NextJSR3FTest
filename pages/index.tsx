// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })

import { Canvas } from "@react-three/fiber";
import { describe } from "node:test";
import AnimatedBox from "../components/AnimatedBox";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <div className="container">
    <Canvas>
      <OrbitControls/>
      <ambientLight intensity={0.1}/>
      <directionalLight color="red" position={[0,0,5]}/>
      <AnimatedBox/>
    </Canvas>
    </div>
  )
}
