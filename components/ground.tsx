const Ground: React.FC = () => {
    return (
        <>
            <mesh rotation-x={Math.PI * -0.5} receiveShadow>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color={"#555555"} />
            </mesh>
        </>
    );
};

export default Ground;