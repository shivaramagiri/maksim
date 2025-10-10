import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import home_2 from "../../assets/threeDModels/home_2.glb";
import "./threeDViewer.scss";
function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ThreeDViewer() {
  return (
    <div className="threeD-wrapper">
      <div className="threeD-container">
        <Canvas camera={{ position: [0, 2, 15], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <Model url={home_2} />
          </Suspense>
          <OrbitControls
            target={[-1, 5, 0]} // center of your model
            enablePan={true} // allow moving around
            enableZoom={true} // allow zoom
            enableRotate={true} // allow rotation
          />
        </Canvas>
      </div>
    </div>
  );
}
