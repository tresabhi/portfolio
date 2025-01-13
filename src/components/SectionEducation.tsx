import { Badge, Box, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { imgur, ImgurSize } from "../core/imgur";
import { wiki } from "../core/wiki";
import { RocketDoodle } from "./RocketDoodle";
import { Section } from "./Section";
import { TowerDoodle } from "./TowerDoodle";

const BIRTH = new Date(2005, 3, 7);
const GPA = 3.83;

export function SectionEducation() {
  const timeElapsed = Date.now() - BIRTH.getTime();
  const age = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));

  return (
    <>
      <Section id="education" appearance="dark">
        <Flex justify="center">
          <Heading size="7">Education</Heading>
        </Flex>

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

            <Box maxWidth="30rem">
              <Text wrap="pretty">
                <Text weight="bold">Iowa State University</Text> has been the
                launchpad for my aerospace journey, where I'm tackling
                everything from advanced thermodynamics to structural design.
                With a GPA of {GPA}, I am immersed in projects like designing{" "}
                <Link
                  href={wiki("Combustion_chamber")}
                  target="_blank"
                  underline="always"
                  color="indigo"
                >
                  combustion chambers
                </Link>{" "}
                and modeling{" "}
                <Link
                  href={wiki("Avionics")}
                  target="_blank"
                  underline="always"
                  color="indigo"
                >
                  avionics
                </Link>
                .
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

            <Box maxWidth="30rem">
              <Text wrap="pretty">
                As a natural extension of my aerospace passion, I'm pursuing a{" "}
                <b>minor</b> in Cyber-Physical Systems to master the art of
                integrating software with hardware. I am pursuing cutting-edge
                fields like{" "}
                <Link
                  href={wiki("Autonomous_robot")}
                  target="_blank"
                  underline="always"
                  color="jade"
                >
                  autonomous navigation
                </Link>
                ,{" "}
                <Link
                  href={wiki("Simulation_modeling")}
                  target="_blank"
                  underline="always"
                  color="jade"
                >
                  simulation design
                </Link>
                , and{" "}
                <Link
                  href={wiki("Embedded_system")}
                  target="_blank"
                  underline="always"
                  color="jade"
                >
                  embedded systems
                </Link>
                .
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
