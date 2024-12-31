import { Code, Flex, Text } from "@radix-ui/themes";
import { IntroArrow } from "./IntroArrow";

export function Page1() {
  return (
    <Flex>
      <Flex direction="column" align="start" gap="4">
        <Flex align="end" gap="6">
          <img
            src="https://i.imgur.com/Il3PQon.png"
            style={{ width: "10rem", height: "10rem" }}
          />
          <IntroArrow style={{ height: "7rem", width: "12rem" }} />
        </Flex>

        <Text size="7" style={{ width: "31rem" }}>
          Hi, I'm <b>Abhi</b>, an <Code>aerospace engineer</Code> with a{" "}
          <i>ton</i> of projects and <i>infinite</i> passion for self-learning.
        </Text>
      </Flex>

      {/* <EngineModel /> */}
    </Flex>
  );
}
