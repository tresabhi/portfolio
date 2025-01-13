import { Box, Flex, Heading, Separator, Text } from "@radix-ui/themes";
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
      <Separator size="4" />

      <Section id="education">
        <Heading size="7" align="center">
          Education
        </Heading>

        <Flex direction="column" gap="4">
          <Flex justify="center">
            <Flex direction="column" flexGrow="1" maxWidth="50rem" gap="4">
              <Flex justify="between" width="100%" px="8">
                <Text color="indigo" highContrast>
                  <RocketDoodle width="10rem" height="10rem" />
                </Text>

                <Text color="jade" highContrast>
                  <TowerDoodle width="10rem" height="10rem" />
                </Text>
              </Flex>

              <Flex gap={{ initial: "6", md: "9" }} justify="between">
                <Flex direction="column" gap="3" flexBasis="0" flexGrow="1">
                  <Flex direction="column">
                    <Heading color="indigo">Aerospace Engineering</Heading>
                    <Text color="gray" trim="end">
                      2023 - 2027
                    </Text>
                  </Flex>

                  <Text wrap="pretty">
                    Hailing from <b>Iowa State University</b> with a GPA of{" "}
                    {GPA}, I am completing my bachelor's degree in Aerospace
                    Engineering.
                  </Text>
                </Flex>

                <Flex direction="column" gap="3" flexBasis="0" flexGrow="1">
                  <Flex direction="column" align="end">
                    <Heading color="jade">Cyber Physical Systems</Heading>
                    <Text color="gray" trim="end">
                      2025 - 2027
                    </Text>
                  </Flex>

                  <Text align="right" wrap="pretty">
                    In combination with my major, I am furthering my expertise
                    with computers with a minor in Cyber Physical Systems.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

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
