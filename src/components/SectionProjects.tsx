import { Flex, Heading } from "@radix-ui/themes";
import { ProjectEntry } from "./ProjectEntry";

export function SectionProjects() {
  return (
    <Flex direction="column" gap="7">
      <Heading size="7">Projects</Heading>

      <ProjectEntry
        title="Nerdy Birds"
        image="https://i.imgur.com/5Wr1W1J.pngs"
        time="2019-2023"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </ProjectEntry>
    </Flex>
  );
}
