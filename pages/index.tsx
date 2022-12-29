// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  }
  });

  return (
    <mesh ref={meshRef}>
    <boxGeometry/>
    <meshStandardMaterial/>
  </mesh>

  );

};


export default function Home() {
  return (
    <div className="container">
    <Canvas>
      <ambientLight intensity={0.1}/>
      <directionalLight color="red" position={[0,0,5]}/>
      <AnimatedBox/>
    </Canvas>
    </div>
  )
}
