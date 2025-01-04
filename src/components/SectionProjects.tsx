import { Flex, Heading, Separator } from "@radix-ui/themes";
import { times } from "lodash-es";
import { TimelineProject } from "./TimelineProject";

export function SectionProjects() {
  return (
    <>
      <Separator size="4" id="projects" />

      <Heading size="8" align="center">
        Projects
      </Heading>

      <Flex direction="column">
        {times(25, (index) => (
          <TimelineProject
            title={`Test ${index}`}
            first={index === 0}
            last={index === 24}
            alternate={index % 2 === 1}
            time="2023 - present"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </TimelineProject>
        ))}
      </Flex>
    </>
  );
}
