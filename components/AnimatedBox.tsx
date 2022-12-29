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
  
  export default AnimatedBox;