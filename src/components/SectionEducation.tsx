import { Badge, Box, Flex, Heading, Text } from "@radix-ui/themes";
import { GPA } from "../core/constants";
import { imgur, ImgurSize } from "../core/imgur";
import { RocketDoodle } from "./RocketDoodle";
import { Section } from "./Section";
import { TowerDoodle } from "./TowerDoodle";

const BIRTH = new Date(2005, 3, 7);

export function SectionEducation() {
  const timeElapsed = Date.now() - BIRTH.getTime();
  const age = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));

  return (
    <>
      <Section id="education" appearance="dark">
        <Flex justify="between">
          <Flex
            direction="column"
            gap="3"
            flexBasis="0"
            flexGrow="1"
            align="center"
            width="fit-content"
          >
            <Text color="indigo" highContrast>
              <RocketDoodle width="10rem" height="10rem" />
            </Text>

            <Flex align="center" gap="3">
              <Heading color="indigo">Aerospace Engineering</Heading>
              <Badge color="gray">2023 - 2027</Badge>
            </Flex>

            <Box maxWidth="23rem">
              <Text wrap="pretty">
                Hailing from <b>Iowa State University</b> with a GPA of {GPA}, I
                am completing my bachelor's degree in Aerospace Engineering.
              </Text>
            </Box>
          </Flex>

          <Flex
            direction="column"
            gap="3"
            flexBasis="0"
            flexGrow="1"
            align="center"
            width="fit-content"
          >
            <Text color="jade" highContrast>
              <TowerDoodle width="10rem" height="10rem" />
            </Text>

            <Flex align="center" gap="3">
              <Heading color="jade">Cyber Physical Systems</Heading>
              <Badge color="gray">2025 - 2027</Badge>
            </Flex>

            <Box maxWidth="23rem">
              <Text wrap="pretty">
                In combination with my major, I am furthering my expertise with
                computers with a minor in Cyber Physical Systems.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Section>

      <Section>
        <Flex direction="column" gap="6">
          <Flex gap="7" align="center" justify="center">
            <Box
              width="10rem"
              height="10rem"
              flexShrink="0"
              style={{
                backgroundImage: `url(${imgur("4DvrZho", {
                  format: "jpeg",
                  size: ImgurSize.MediumThumbnail,
                })})`,
                backgroundSize: "cover",
                borderRadius: "var(--radius-4)",
                boxShadow: "var(--shadow-5)",
              }}
            />

            <Flex direction="column" gap="2">
              <Heading size="5">Why Aerospace?</Heading>

              <Text
                color="gray"
                highContrast
                size="4"
                style={{ maxWidth: "40rem" }}
                wrap="pretty"
              >
                STS-135 sparked my fascination with flying machines at seven
                years old. Today, at {age}, I'm still amazed by its complexity.
                This technological marvel is unquestionably something I wanted
                to be a part of. This enduring passion for rockets and airplanes
                led me to pursue Aerospace Engineering.
              </Text>
            </Flex>
          </Flex>

          <Flex gap="7" align="center" justify="center">
            <Box
              width="10rem"
              height="10rem"
              flexShrink="0"
              style={{
                backgroundImage: `url(${imgur("TDN9Exk", {
                  format: "jpeg",
                  size: ImgurSize.MediumThumbnail,
                })})`,
                backgroundSize: "cover",
                borderRadius: "var(--radius-4)",
                boxShadow: "var(--shadow-5)",
              }}
            />

            <Flex direction="column" gap="2">
              <Heading size="5">Why C-P Systems?</Heading>

              <Text
                color="gray"
                highContrast
                size="4"
                style={{ maxWidth: "40rem" }}
                wrap="pretty"
              >
                I love creating simulations and websites like this one! The
                ability to transform abstractions into functional, visual
                realities within nanoseconds is endlessly fascinating. It feels
                natural to combine my skills with computers to breathe life into
                complex physical systems through seamless integration and
                design.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Section>
    </>
  );
}
