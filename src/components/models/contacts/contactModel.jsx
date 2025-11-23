import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);

  return (
    <primitive
      object={scene}
      scale={0.3}             
      position={[0, -0.6, -0.5]} 
    />
  );
};

const ContactModel = ({ modelPath }) => {
  return (
    <Canvas
      shadows
      camera={{ position: [2, 1, 3], fov: 45 }} 
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} color="#fff436" />
        <directionalLight intensity={2.5} position={[5,5,3]} castShadow />

        <Model modelPath={modelPath} />

        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI /5}
          maxPolarAngle={Math.PI /2}
        />
      </Suspense>
    </Canvas>
  );
};

export default ContactModel;
