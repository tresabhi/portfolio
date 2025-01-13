import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Box, Code, Flex, Link, Text } from "@radix-ui/themes";
import { imgur } from "../core/imgur";
import { Engine } from "./Engine";
import { Section } from "./Section";

export function SectionIntro() {
  return (
    <Section
      appearance="dark"
      style={{ position: "relative", overflow: "clip" }}
    >
      <Engine />

      <Flex direction="column" flexGrow="1" gap="9" position="relative">
        <Flex justify="between" gap="9" align="center" py="9">
          <Flex flexGrow="1" flexBasis="0" maxWidth="40rem">
            <Text size="6" wrap="pretty">
              Hi, I'm <Text weight="bold">Abhi</Text>—an{" "}
              <Code variant="solid" color="red">
                Aerospace Engineer
              </Code>{" "}
              driven by an insatiable curiosity and a passion for turning
              ambitious ideas into reality. From designing and manufacturing{" "}
              <u>jet engines</u> and pioneering in <u>autonomous robotics</u> to
              building software that bridges the gap between the digital and
              physical worlds, I am fueled by a love for <i>exploration</i> and{" "}
              <i>self-learning</i>. With every project, I strive to push
              boundaries and inspire innovation in aerospace and beyond.
            </Text>
          </Flex>

          <Box
            flexGrow="0"
            overflow="hidden"
            width="17rem"
            height="17rem"
            style={{
              backgroundImage: `url(${imgur("FEx150k", { format: "jpeg" })})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "45% 25%",
              objectPosition: "top",
              borderRadius: "var(--radius-3)",
              boxShadow: "var(--shadow-2)",
            }}
          >
            <Box
              width="100%"
              height="100%"
              style={{
                backgroundColor: "var(--gray-a3)",
                filter: "invert(1)",
              }}
            />
          </Box>
        </Flex>

        <Flex justify="between" align="center" position="relative">
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
      </Flex>
    </Section>
  );
}
