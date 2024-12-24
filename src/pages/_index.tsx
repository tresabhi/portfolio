import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { LineBasicMaterial, MeshStandardMaterial, Plane, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { jsxTree } from "../core/jsxTree";

const outlineMaterial = new LineBasicMaterial({
  color: "red",
});

function EngineModel() {
  const model = useLoader(GLTFLoader, "/engine.glb");
  const nodes = Object.values(model.nodes);

  return (
    <group>
      {nodes.map((node) => {
        return jsxTree(node, {
          mesh: {
            material: new MeshStandardMaterial({
              color: "red",
              wireframe: true,
              clippingPlanes: [new Plane(new Vector3(0, 0, -1), 0)],
            }),
          },
        });
      })}
      {nodes.map((node) => {
        return jsxTree(node, {
          mesh: {
            material: new MeshStandardMaterial({
              color: "red",
              clippingPlanes: [new Plane(new Vector3(0, 0, 1), 0)],
            }),
          },
        });
      })}
    </group>
  );
}

export function Engine() {
  return (
    <Canvas
      style={{
        height: "20rem",
      }}
      gl={{
        clippingPlanes: [],
        localClippingEnabled: true,
      }}
    >
      <OrbitControls />
      <Environment preset="lobby" />
      <EngineModel />
    </Canvas>
  );
}
