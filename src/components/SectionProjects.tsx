import { Flex, Heading, Link, Separator, Text } from "@radix-ui/themes";
import { ProjectEntry } from "./ProjectEntry";

export function SectionProjects() {
  return (
    <>
      <Separator id="projects" size="4" />

      <Flex direction="column" gap="7">
        <Heading size="7">Projects</Heading>

        <Flex direction="column" gap="8">
          <ProjectEntry
            time="2024 - present"
            title="J.E.T. (AMC)"
            image={[
              "https://i.imgur.com/dFofBwn.png",
              "https://i.imgur.com/3Wo1TaL.png",
            ]}
          >
            <Text>
              I am responsible for creating the heart of our jet engine as the
              lead designer for the combustion chamber of J.E.T. (Jet Engine
              Team, a humorously unexacting name I coined under the Advanced
              Manufacturing Club).
            </Text>
            <Text>
              This project draws knowledge beyond my current coursework; hence,
              I primarily rely on independent research. I am honing the
              combustion chamber to achieve an optimal stoichiometric combustion
              at a precise 37:2 ratio. My design focuses on ease of
              manufacturing while maintaining maximum efficiency to lower
              emissions.
            </Text>
          </ProjectEntry>

          <ProjectEntry
            video="https://www.youtube.com/watch?v=mjuX8Oxbl0k"
            title="Nerdy Birds"
            image="https://i.imgur.com/5Wr1W1J.pngs"
            time="2019 - 2023"
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
              2023—our best performance in the team's 10-year history—and a
              strong finish at states.
            </Text>
            <Text>
              With no prior guidance or existing solutions, I took the
              initiative to research and implement advanced technologies for our
              robot solo. I mastered{" "}
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
              , pushing both my high school knowledge and the boundaries of
              what's possible in FTC.
            </Text>
          </ProjectEntry>
        </Flex>
      </Flex>
    </>
  );
}
