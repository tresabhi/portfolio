import {
  CopyIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Box, Flex, IconButton, Link, Popover, Text } from "@radix-ui/themes";
import { imgur } from "../core/imgur";
import { Engine } from "./Engine";
import { Section } from "./Section";

export function SectionIntro() {
  return (
    <Section
      appearance="dark"
      style={{
        position: "relative",
        overflow: "clip",
      }}
    >
      <Engine />

      <Flex direction="column" flexGrow="1" gap="9" position="relative" px="9">
        <Flex justify="between" gap="9" py="9">
          <Flex flexGrow="1" flexBasis="0" maxWidth="38rem">
            <Text
              size="5"
              wrap="pretty"
              style={{
                lineHeight: "1.8",
              }}
            >
              Hi, I'm <Text weight="bold">Abhi</Text>—an{" "}
              <Text
                weight="bold"
                color="red"
                style={{ color: "var(--accent-10)" }}
              >
                Aerospace Engineer
              </Text>{" "}
              driven by an insatiable curiosity and a passion for turning
              ambitious ideas into reality. From designing and manufacturing jet
              engines and pioneering in autonomous robotics to building software
              that bridges the gap between the digital and physical worlds, I am
              fueled by a love for <i>exploration</i> and <i>self-learning</i>.
              With every project, I strive to push boundaries and inspire
              innovation in aerospace and beyond.
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
            <Popover.Root>
              <Popover.Trigger>
                <Link
                  href="mailto:abhigyaan457@gmail.com"
                  size="4"
                  style={{ color: "var(--accent-10)" }}
                >
                  <Flex align="center" gap="2">
                    <EnvelopeClosedIcon width="1em" height="1em" />
                    Gmail
                  </Flex>
                </Link>
              </Popover.Trigger>

              <Popover.Content size="1">
                <Flex align="center" gap="2">
                  <Text>
                    E-mail app didn't open? Mail to abhigyaan457@gmail.com{" "}
                  </Text>

                  <Popover.Close>
                    <IconButton
                      variant="ghost"
                      onClick={() => {
                        navigator.clipboard.writeText("abhigyaan457@gmail.com");
                      }}
                    >
                      <CopyIcon />
                    </IconButton>
                  </Popover.Close>
                </Flex>
              </Popover.Content>
            </Popover.Root>

            <Text color="gray">•</Text>

            <Link
              href="https://www.linkedin.com/in/abhigyaan-deep-7b3a9b278/"
              size="4"
              target="_blank"
              style={{ color: "var(--accent-10)" }}
            >
              <Flex align="center" gap="2">
                <LinkedInLogoIcon width="1em" height="1em" />
                LinkedIn
              </Flex>
            </Link>

            <Text color="gray">•</Text>

            <Link
              href="https://github.com/tresabhi"
              size="4"
              target="_blank"
              style={{ color: "var(--accent-10)" }}
            >
              <Flex align="center" gap="2">
                <GitHubLogoIcon width="1em" height="1em" />
                GitHub
              </Flex>
            </Link>
          </Flex>

          <Flex gap="4">
            <Link
              href="#journey"
              size="4"
              style={{ color: "var(--accent-10)" }}
            >
              Journey
            </Link>

            <Text color="gray">•</Text>

            <Link
              href="#education"
              size="4"
              style={{ color: "var(--accent-10)" }}
            >
              Education
            </Link>

            <Text color="gray">•</Text>

            <Link
              href="#projects"
              size="4"
              style={{ color: "var(--accent-10)" }}
            >
              Projects
            </Link>

            <Text color="gray">•</Text>

            <Link
              href="/resume.pdf"
              target="_blank"
              size="4"
              style={{ color: "var(--accent-10)" }}
            >
              Résumé
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}
