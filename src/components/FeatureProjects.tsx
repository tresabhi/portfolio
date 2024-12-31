import { Flex } from "@radix-ui/themes";
import { ProjectCardMini } from "./ProjectCardMini";

export function FeatureProjects() {
  return (
    <Flex>
      <Flex>
        <ProjectCardMini />
        <ProjectCardMini />
      </Flex>
      <Flex>
        <ProjectCardMini />
        <ProjectCardMini />
      </Flex>
    </Flex>
  );
}
