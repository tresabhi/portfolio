import { Flex, Heading, Separator } from "@radix-ui/themes";
import { ASPDoodle1, ASPDoodle2, ASPDoodle3, ASPDoodle4 } from "./ASPDoodle";
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
          title="F-4 Phantom II Digitalization"
          type={TimelineProjectType.Educational}
          time="2023"
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
          title="Nerdy Birds"
          type={TimelineProjectType.Club}
          time="2019-2023"
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

        <TimelineProject
          title="Abhi's Space Program"
          type={TimelineProjectType.Hobby}
          time="2013 - 2017"
          last
        >
          Abhi's Space Programs (or ASP for short), was my first endeavour into
          propulsion with absolutely no formal knowledge of rocketry (or safety
          for that matter.) Pretty much all launches underwent the following
          sequence:
        </TimelineProject>
      </Flex>

      <Flex wrap="wrap" gap="2" justify="center">
        <Flex gap="2" wrap="wrap" justify="center">
          <ASPDoodle1 width="17rem" height="17rem" />
          <ASPDoodle2 width="17rem" height="17rem" />
        </Flex>

        <Flex gap="2" wrap="wrap" justify="center">
          <ASPDoodle3 width="17rem" height="17rem" />
          <ASPDoodle4 width="17rem" height="17rem" />
        </Flex>
      </Flex>
    </>
  );
}
