import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EngineModel } from "../components/Engine";

export function Engine() {
  return (
    <Canvas
      style={{
        height: "50rem",
      }}
      gl={{
        clippingPlanes: [],
        localClippingEnabled: true,
      }}
      camera={{
        position: [15, 6, -15],
        fov: 20,
      }}
    >
      <Environment preset="warehouse" />
      <EngineModel />
    </Canvas>
  );
}
