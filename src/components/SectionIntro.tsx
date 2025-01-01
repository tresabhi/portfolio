import { EnvelopeClosedIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Code, Flex, Link, Separator, Text } from "@radix-ui/themes";
import { Engine } from "./Engine";
import { IntroArrow } from "./IntroArrow";

export function SectionIntro() {
  return (
    <>
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
            <i>ton</i> of projects and <i>infinite</i> passion for
            self-learning.
          </Text>
        </Flex>

        <Engine />
      </Flex>

      <Flex justify="center" gap="6" align="center">
        <Flex gap="4">
          <Link href="mailto:abhigyaan457@gmail.com" size="7" trim="end">
            <EnvelopeClosedIcon width="1em" height="1em" />
          </Link>

          <Link href="mailto:abhigyaan457@gmail.com" size="7" trim="end">
            <LinkedInLogoIcon width="1em" height="1em" />
          </Link>
        </Flex>

        <Separator orientation="vertical" size="4" />

        <Flex gap="4">
          <Link href="#education" size="4">
            Education
          </Link>
          <Text color="gray">•</Text>
          <Link href="#projects" size="4">
            Projects
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
