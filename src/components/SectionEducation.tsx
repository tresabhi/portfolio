import {
  Badge,
  Box,
  Flex,
  Heading,
  Link,
  Separator,
  Text,
} from "@radix-ui/themes";
import { wiki } from "../core/wiki";
import { PerseveranceDoodle } from "./Doodles/Perseverance";
import { RocketDoodle } from "./Doodles/Rocket";
import { SpaceShuttleDoodle } from "./Doodles/SpaceShuttle";
import { TowerDoodle } from "./Doodles/Tower";
import { Section } from "./Section";

const BIRTH = new Date(2005, 3, 7);
const GPA = 3.83;

export function SectionEducation() {
  const timeElapsed = Date.now() - BIRTH.getTime();
  const age = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));

  return (
    <Section id="education" appearance="dark">
      <Flex justify="center">
        <Heading size="8">Education</Heading>
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
          <Text color="red" style={{ color: "var(--accent-10)" }}>
            <RocketDoodle width="10rem" height="10rem" />
          </Text>

          <Flex align="center" gap="3">
            <Heading color="red" style={{ color: "var(--accent-10)" }}>
              Aerospace Engineering
            </Heading>
            <Badge color="gray">2023 - 2027</Badge>
          </Flex>

          <Box maxWidth="30rem">
            <Text wrap="pretty">
              <Text weight="bold">Iowa State University</Text> has been the
              launchpad for my aerospace journey, where I'm tackling everything
              from advanced thermodynamics to structural design. With a GPA of{" "}
              {GPA}, I am immersed in projects like designing{" "}
              <Link
                href={wiki("Combustion_chamber")}
                target="_blank"
                underline="always"
                color="red"
                style={{ color: "var(--accent-10)" }}
              >
                combustion chambers
              </Link>{" "}
              and modeling{" "}
              <Link
                href={wiki("Avionics")}
                target="_blank"
                underline="always"
                color="red"
                style={{ color: "var(--accent-10)" }}
              >
                avionics.
              </Link>
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
          <Text color="jade">
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
              technologies like{" "}
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
                embedded systems.
              </Link>
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Flex justify="center" px="8">
        <Separator size="4" />
      </Flex>

      <Flex direction="column" gap="9">
        <Flex gap="8" align="center" justify="center" py="2">
          <Text color="red" style={{ color: "var(--accent-10)" }}>
            <SpaceShuttleDoodle width="8rem" height="8rem" />
          </Text>

          <Flex direction="column" gap="2">
            <Heading size="5" color="red" style={{ color: "var(--accent-10)" }}>
              Why Aerospace?
            </Heading>

            <Text style={{ maxWidth: "40rem" }} wrap="pretty">
              STS-135 (the last Space Shuttle) sparked my fascination with
              flying machines at seven years old. Today, at {age}, I'm still
              amazed by its complexity. This technological marvel is
              unquestionably something I wanted to be a part of. This enduring
              passion for rockets and airplanes led me to pursue Aerospace
              Engineering.
            </Text>
          </Flex>
        </Flex>

        <Flex gap="8" align="center" justify="center" py="2">
          <Text color="jade">
            <PerseveranceDoodle width="8rem" height="8rem" />
          </Text>

          <Flex direction="column" gap="2">
            <Heading size="5" color="jade">
              Why C-P Systems?
            </Heading>

            <Text style={{ maxWidth: "40rem" }} wrap="pretty">
              I love creating robots, simulations, and websites like this one!
              The ability to transform abstractions into functional, visual
              realities within seconds is fascinating. It feels natural to
              combine my skills with computers to breathe life into complex
              physical systems through seamless integration and design.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}
