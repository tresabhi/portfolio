import { Flex, Heading, Link, Separator, Text } from "@radix-ui/themes";
import { ProjectEntry } from "./ProjectEntry";

export function SectionProjects() {
  return (
    <>
      <Separator id="projects" size="4" />

      <Flex direction="column" gap="7">
        <Heading size="7">Projects</Heading>

        <ProjectEntry
          video="https://www.youtube.com/watch?v=mjuX8Oxbl0k"
          title="Nerdy Birds"
          image="https://i.imgur.com/5Wr1W1J.pngs"
          time="2019-2023"
        >
          <Text>
            As the team captain and programmer for the Nerdy Birds{" "}
            <Link
              target="_blank"
              href="https://www.firstinspires.org/robotics/ftc"
            >
              FTC team
            </Link>
            , I led us to a decisive first-place victory at districts in
            2023—our best performance in the team's 10-year history—and a strong
            finish at states.
          </Text>
          <Text>
            With no prior guidance or existing solutions, I took the initiative
            to research and implement advanced technologies for our robot solo.
            I mastered{" "}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Computer_visions"
            >
              computer vision
            </Link>
            ,{" "}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Pathfinding"
            >
              pathfinding
            </Link>
            ,{" "}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Inertial_navigation_system"
            >
              inertial navigation
            </Link>
            , and{" "}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Mecanum_wheel"
            >
              mecanum omnidirectional traversal
            </Link>
            , pushing both my high school knowledge and the boundaries of what's
            possible in FTC.
          </Text>
        </ProjectEntry>
      </Flex>
    </>
  );
}
