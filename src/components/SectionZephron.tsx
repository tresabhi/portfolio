import { Text } from "@radix-ui/themes";
import { Project } from "./Project";

export function SectionZephron() {
  return (
    <Project
      title="Zephron"
      skills={["Git", "MATEK FC", "OnShape", "SolidWorks", "3D Printing"]}
      image="/images/zephron-640w.png"
      imageWidth="20rem"
      time="Sep 2025 - Present"
    >
      <Text wrap="pretty">
        I designed and led the development of Zephron, a Coandă-effect
        ground-effect drone optimized for stealth and efficiency. Built
        collaboratively in OnShape and iterated with CFD in SolidWorks, Zephron
        is almost entirely 3D-printed and runs on custom ROS firmware, which is
        flashed to a MATEK Wing FC V2-based flight controller. Over the course
        of one academic year, I led a team of four through rapid prototyping,
        hardware integration, and performance optimization.
      </Text>
    </Project>
  );
}
