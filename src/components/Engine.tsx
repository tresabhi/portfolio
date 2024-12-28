import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Mesh, type Group } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export function EngineModel() {
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
