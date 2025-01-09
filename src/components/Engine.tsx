import { Box } from "@radix-ui/themes";
import { Environment } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import {
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  type Group,
} from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useOnScreen } from "../hooks/useOnScreen";

export function Engine() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const onScreen = useOnScreen(canvas);

  return (
    <Box
      flexGrow="1"
      position="absolute"
      width="100%"
      height="100%"
      top="0"
      left="0"
      style={{
        transform: "translate(25%, 0)",
      }}
    >
      <Box position="absolute" top="0" left="0" width="100%" height="100%">
        <Canvas
          ref={canvas}
          frameloop={onScreen ? "always" : "never"}
          camera={{
            // fov: 25,
            position: [3, 1, -3],
          }}
        >
          <Suspense fallback={null}>
            {/* <Lighting /> */}
            <Model />
          </Suspense>
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

const outlineMaterial = new LineBasicMaterial({
  color: 0x808080,
  linewidth: 190,
});

function Model() {
  const model = useLoader(GLTFLoader, `${import.meta.env.BASE_URL}engine.glb`);
  const scene = useMemo(() => {
    const scene = model.scene.clone(true);

    console.log(scene);

    scene.children.forEach((child) => {
      if (child instanceof Mesh) {
        child.material = new MeshBasicMaterial({
          color: 0x404040,
        });

        return;
      }

      child.remove(child.children[0]);

      [...child.children].forEach((grandChild) => {
        if (!(grandChild instanceof Mesh)) {
          return;
        }

        child.remove(grandChild);

        const edgesGeometry = new EdgesGeometry(grandChild.geometry, 85);
        const lineSegments = new LineSegments(edgesGeometry, outlineMaterial);

        lineSegments.position.copy(grandChild.position);
        lineSegments.rotation.copy(grandChild.rotation);
        lineSegments.scale.copy(grandChild.scale);

        child.add(lineSegments);
      });
    });

    return scene;
  }, [model]);
  const wrapper = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!wrapper.current) return;
    wrapper.current.rotation.x = clock.elapsedTime / 20;
  });

  return (
    <group ref={wrapper} position={[2, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}
