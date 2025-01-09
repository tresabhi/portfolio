import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Box, Code, Flex, Link, Separator, Text } from "@radix-ui/themes";
import { imgur } from "../core/imgur";
import { IntroArrowDoodle } from "./IntroArrowDoodle";
import { Section } from "./Section";

export function SectionIntro() {
  return (
    <Section
      appearance="dark"
      style={{ position: "relative", overflow: "clip" }}
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        top="0"
        left="0"
        style={{
          backgroundImage: `url(${imgur("QldKqwi")})`,
          backgroundSize: "60rem",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "invert(100%) brightness(50%)",
          transform: "translate(25%, 0)",
        }}
      />

      <Flex direction="column" align="start" gap="5" pl="5">
        <Flex align="end" gap="6">
          <img
            alt="Abhi"
            src={imgur("2aKUhJV", { format: "jpeg" })}
            style={{
              width: "12rem",
              height: "12rem",
            }}
          />

          <Text color="blue" highContrast>
            <IntroArrowDoodle style={{ height: "7rem", width: "10rem" }} />
          </Text>
        </Flex>

        <Text size="7" style={{ width: "31rem" }}>
          Hi, I'm <b>Abhi</b>, an <Code>aerospace engineer</Code> with a{" "}
          <i>ton</i> of projects and <i>infinite</i> passion for self-learning.
        </Text>
      </Flex>

      <Flex justify="center" gap="6" align="center" position="relative">
        <Flex gap="4">
          <Link href="mailto:abhigyaan457@gmail.com" size="4" target="_blank">
            <Flex align="center" gap="2">
              <EnvelopeClosedIcon width="1em" height="1em" />
              Gmail
            </Flex>
          </Link>

          <Text color="gray">•</Text>

          <Link
            href="https://www.linkedin.com/in/abhigyaan-deep-7b3a9b278/"
            size="4"
            target="_blank"
          >
            <Flex align="center" gap="2">
              <LinkedInLogoIcon width="1em" height="1em" />
              LinkedIn
            </Flex>
          </Link>

          <Text color="gray">•</Text>

          <Link
            href="https://www.linkedin.com/in/abhigyaan-deep-7b3a9b278/"
            size="4"
            target="_blank"
          >
            <Flex align="center" gap="2">
              <GitHubLogoIcon width="1em" height="1em" />
              GitHub
            </Flex>
          </Link>
        </Flex>

        <Separator orientation="vertical" />

        <Flex gap="4">
          <Link href="#journey" size="4">
            Journey
          </Link>

          <Text color="gray">•</Text>

          <Link href="#education" size="4">
            Education
          </Link>

          <Text color="gray">•</Text>

          <Link href="#projects" size="4">
            Projects
          </Link>
        </Flex>
      </Flex>
    </Section>
  );
}
