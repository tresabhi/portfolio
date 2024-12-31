import { Box } from "@radix-ui/themes";
import { Environment } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Mesh, type Group } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useOnScreen } from "../hooks/useOnScreen";

export function Engine() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const onScreen = useOnScreen(canvas);

  return (
    <Box
      position="relative"
      maxWidth="40rem"
      flexGrow="1"
      minWidth="30rem"
      height="20rem"
    >
      <Box position="absolute" top="0" left="0" width="100%" height="100%">
        <Canvas
          ref={canvas}
          frameloop={onScreen ? "always" : "never"}
          camera={{
            fov: 25,
            position: [10, 2, -10],
          }}
        >
          <Lighting />
          <Model />
        </Canvas>
      </Box>
    </Box>
  );
}

function Lighting() {
  return (
    <Environment
      preset="sunset"
      environmentIntensity={2}
      environmentRotation={[Math.PI / 2, 0, 0]}
    />
  );
}

function Model() {
  const model = useLoader(GLTFLoader, "/engine.glb");
  const scene = useMemo(() => {
    const scene = model.scene.clone(true);

    scene.children.forEach((child) => {
      if (child instanceof Mesh) {
        return;
      }
      child.remove(child.children[0]);
    });

    return scene;
  }, [model]);
  const wrapper = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!wrapper.current) return;
    wrapper.current.rotation.x = clock.elapsedTime / 6;
  });

  return (
    <group ref={wrapper} position={[2, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}
