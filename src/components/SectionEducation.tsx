import { Box, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import { GPA } from "../core/constants";
import { RocketDoodle } from "./RocketDoodle";
import { TowerDoodle } from "./TowerDoodle";

const BIRTH = new Date(2005, 3, 7);

export function SectionEducation() {
  const timeElapsed = Date.now() - BIRTH.getTime();
  const age = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));

  return (
    <>
      <Separator size="4" id="education" />

      <Heading size="8" align="center">
        Education
      </Heading>

      <Flex justify="center">
        <Flex direction="column" flexGrow="1" maxWidth="50rem" gap="4">
          <Flex justify="between" width="100%" px="8">
            <Text color="blue" highContrast>
              <RocketDoodle width="10rem" height="10rem" />
            </Text>

            <Text color="orange" highContrast>
              <TowerDoodle width="10rem" height="10rem" />
            </Text>
          </Flex>

          <Flex gap={{ initial: "6", md: "9" }} justify="between">
            <Flex direction="column" gap="3" flexBasis="0" flexGrow="1">
              <Flex direction="column">
                <Heading color="blue">Aerospace Engineering</Heading>
                <Text color="gray" trim="end">
                  2023 - 2027
                </Text>
              </Flex>

              <Text wrap="pretty">
                Hailing from Iowa State University with a GPA of {GPA}, I am
                completing my bachelor's degree in Aerospace Engineering.
              </Text>
            </Flex>

            <Flex direction="column" gap="3" flexBasis="0" flexGrow="1">
              <Flex direction="column" align="end">
                <Heading color="orange">Cyber Physical Systems</Heading>
                <Text color="gray" trim="end">
                  2025 - 2027
                </Text>
              </Flex>

              <Text align="right" wrap="pretty">
                In combination with my major, I am furthering my expertise with
                computers with a minor in Cyber Physical Systems. Courses are
                yet to begin.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex gap="7" align="center" justify="center">
        <Box
          width="10rem"
          height="10rem"
          flexShrink="0"
          style={{
            backgroundImage: "url(https://i.imgur.com/4DvrZho.png)",
            backgroundSize: "cover",
            borderRadius: "var(--radius-4)",
            boxShadow: "var(--shadow-5)",
          }}
        />

        <Flex direction="column" gap="2">
          <Heading>Why Aerospace?</Heading>

          <Text
            color="gray"
            highContrast
            size="4"
            style={{ maxWidth: "40rem" }}
          >
            STS-135 sparked my fascination with flying machines at seven years
            old. Today, at {age}, I'm still amazed by its complexity. This
            technological marvel is unquestionably something I wanted to be a
            part of. This enduring passion for rockets and airplanes, paired
            with an interest in computers, led me to pursue Aerospace
            Engineering with a Cyber-Physical Systems minor.
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
