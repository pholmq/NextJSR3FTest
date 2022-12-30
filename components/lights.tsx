import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights: React.FC = () => {
    const lightRef = useRef<THREE.DirectionalLight>()

    useHelper(lightRef, DirectionalLightHelper, 2, "red");

    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight ref={lightRef} position={[0, 10, 10]} castShadow />
            {/* <hemisphereLight args={["#c257ff", "#fff23b", 10]} /> */}
        </>
    );
};

export default Lights;