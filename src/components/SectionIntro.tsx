import { Code, Flex, Text } from "@radix-ui/themes";
import { Engine } from "./Engine";
import { IntroArrow } from "./IntroArrow";

export function SectionIntro() {
  return (
    <Flex justify="between" wrap="wrap" align="center">
      <Flex direction="column" align="start" gap="4">
        <Flex align="end" gap="6">
          <img
            src="https://i.imgur.com/2aKUhJV.png"
            style={{
              width: "12rem",
              height: "12rem",
              filter: "drop-shadow(1px 1px 2px var(--gray-a10))",
            }}
          />
          <IntroArrow style={{ height: "7rem", width: "10rem" }} />
        </Flex>

        <Text size="7" style={{ width: "31rem" }}>
          Hi, I'm <b>Abhi</b>, an <Code>aerospace engineer</Code> with a{" "}
          <i>ton</i> of projects and <i>infinite</i> passion for self-learning.
        </Text>
      </Flex>

      <Engine />
    </Flex>
  );
}
