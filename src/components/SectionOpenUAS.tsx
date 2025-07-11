import { Box, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { wiki } from "../core/wiki";
import { Section } from "./Section";
import { Skills } from "./Skills";

export function SectionOpenUAS() {
  return (
    <Section align="center">
      <Flex maxWidth="60rem" justify="center" gap="8rem">
        <Flex
          flexGrow="1"
          flexShrink="0"
          flexBasis="0"
          direction="column"
          gap="4"
        >
          <Heading weight="medium">OpenUAS</Heading>

          <Skills
            skills={["Git", "FPGA", "Ansys", "SOLIDWORKS", "C++", "Python"]}
          />

          <Text wrap="pretty">
            Designed and built a low-cost,{" "}
            <Link
              underline="always"
              href="https://github.com/UCLabNU/OpenUAS"
              target="_blank"
            >
              open-source
            </Link>
            , fixed-wing UAS (~4 ft wingspan) for educational and research use.
            The aircraft supports modular sensor configurations,{" "}
            <Link
              href={wiki("Field-programmable_gate_array")}
              target="_blank"
              underline="always"
            >
              FPGA
            </Link>
            -based health monitoring, and catapult launch designed to be fully
            3D-printable with{" "}
            <Link
              href={wiki("Commercial_off-the-shelf")}
              target="_blank"
              underline="always"
            >
              COTS parts
            </Link>
            . Focused on accessibility, documentation, and reusability, with CAD
            files, LaTeX manuals, and{" "}
            <Link href={wiki("Git")} target="_blank" underline="always">
              Git
            </Link>{" "}
            version control (hosted on{" "}
            <Link href={wiki("GitHub")} target="_blank" underline="always">
              GitHub
            </Link>
            ). Worked as part of about a 14-person team under the avionics and
            electronics subteam.
          </Text>
        </Flex>

        <Box
          flexGrow="1"
          flexShrink="0"
          flexBasis="0"
          style={{
            backgroundImage: "url(/images/open-uas-drone-640w.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter:
              "drop-shadow(calc(var(--space-1) * -1) var(--space-1) 0.25rem var(--black-a7))",
          }}
        />
      </Flex>
    </Section>
  );
}
