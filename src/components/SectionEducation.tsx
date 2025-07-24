import { Badge, Box, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { wiki } from "../core/wiki";
import { PerseveranceDoodle } from "./Doodles/Perseverance";
import { SpaceShuttleDoodle } from "./Doodles/SpaceShuttle";
import { Section } from "./Section";

const BIRTH = new Date(2005, 3, 7);
const GPA = 3.83;

export function SectionEducation() {
  const timeElapsed = Date.now() - BIRTH.getTime();
  const age = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));

  return (
    <Section id="education" appearance="dark">
      <Flex
        justify="between"
        gap={{ initial: "9", md: "6" }}
        direction={{ initial: "column", md: "row" }}
        align="center"
      >
        <Flex
          direction="column"
          gap="3"
          flexBasis="0"
          flexGrow="1"
          align="center"
          width="fit-content"
        >
          <Text color="red" style={{ color: "var(--accent-10)" }}>
            <SpaceShuttleDoodle width="10rem" height="10rem" />
          </Text>

          <Flex
            align="center"
            gap="3"
            direction={{ initial: "column-reverse", md: "row" }}
          >
            <Heading
              weight="medium"
              color="red"
              style={{ color: "var(--accent-10)" }}
            >
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
            <PerseveranceDoodle width="10rem" height="10rem" />
          </Text>

          <Flex
            align="center"
            gap="3"
            direction={{ initial: "column-reverse", md: "row" }}
          >
            <Heading weight="medium" color="jade">
              Cyber Physical Systems
            </Heading>
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
    </Section>
  );
}
