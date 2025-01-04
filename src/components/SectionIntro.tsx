import { EnvelopeClosedIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Code, Flex, Link, Separator, Text } from "@radix-ui/themes";
import { imgur } from "../core/imgur";
import { Engine } from "./Engine";
import { IntroArrowDoodle } from "./IntroArrowDoodle";

export function SectionIntro() {
  return (
    <>
      <Flex justify="between" wrap="wrap" align="center">
        <Flex direction="column" align="start" gap="4">
          <Flex align="end" gap="6">
            <img
              alt="Abhi"
              src={imgur("2aKUhJV", { format: "jpeg" })}
              style={{
                width: "12rem",
                height: "12rem",
                filter: "drop-shadow(0.125rem 0.25rem 0 var(--gray-12))",
              }}
            />

            <Text color="blue" highContrast>
              <IntroArrowDoodle style={{ height: "7rem", width: "10rem" }} />
            </Text>
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

          <Link
            href="https://www.linkedin.com/in/abhigyaan-deep-7b3a9b278/"
            size="7"
            target="_blank"
            trim="end"
          >
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
