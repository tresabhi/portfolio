import { Flex } from "@radix-ui/themes";
import { ProjectCardMini } from "./ProjectCardMini";

export function FeatureProjects() {
  return (
    <Flex gap="3">
      <Flex direction="column" gap="3">
        <ProjectCardMini
          href="#jet"
          title="J.E.T. (AMC)"
          image="https://i.imgur.com/rJt0Xvf.png"
        />
        <ProjectCardMini />
      </Flex>
      <Flex direction="column" gap="3">
        <ProjectCardMini
          image="https://i.imgur.com/5Wr1W1J.png"
          title="Nerdy Birds"
          white
          href="#ftc"
        />
        <ProjectCardMini />
      </Flex>
    </Flex>
  );
}
