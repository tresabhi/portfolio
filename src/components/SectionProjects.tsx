import { Flex, Heading, Separator } from "@radix-ui/themes";
import { TimelineProject } from "./TimelineProject";
import { TimelineProjectType } from "./TimelineProject/constants";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export function SectionProjects() {
  return (
    <>
      <Separator size="4" id="projects" />

      <Heading size="8" align="center">
        Projects
      </Heading>

      <Flex direction="column">
        <TimelineProject
          title="Cloud Surfers"
          type={TimelineProjectType.Educational}
          time="2024"
          first
        >
          {lorem}
        </TimelineProject>

        <TimelineProject
          title="J.E.T."
          type={TimelineProjectType.Club}
          time="2024 - present"
        >
          {lorem}
        </TimelineProject>

        <TimelineProject
          title="Avionics in Rocketry Club"
          type={TimelineProjectType.Club}
          time="2023"
        >
          {lorem}
        </TimelineProject>

        <TimelineProject
          title="BlitzKit"
          type={TimelineProjectType.Hobby}
          time="2022 - present"
        >
          {lorem}
        </TimelineProject>

        <TimelineProject
          title="Stellar"
          type={TimelineProjectType.Hobby}
          time="2021 - present"
        >
          {lorem}
        </TimelineProject>
      </Flex>
    </>
  );
}
