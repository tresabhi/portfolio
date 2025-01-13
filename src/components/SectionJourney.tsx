import { Flex, Heading, Text } from "@radix-ui/themes";
import { ASPDoodle } from "./ASPDoodle";
import { EvolutionDoodle } from "./EvolutionDoodle";
import { Section } from "./Section";

const BIRTH = new Date(2005, 3, 7);

export function SectionJourney() {
  const timeElapsed = Date.now() - BIRTH.getTime();
  const age = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));

  return (
    <Section id="journey">
      <Heading size="7" align="center">
        My Journey
      </Heading>

      <Flex direction="column" align="center" gap="5">
        <EvolutionDoodle height="5rem" width="100%" />

        <Text style={{ maxWidth: "50rem" }}>
          Watching scientists juggle colorful chemicals fascinated me as a
          child, but Mechanix, a toy of bolts and beams, shifted my focus to
          engineering. Building helicopters and battle-bots sparked my
          creativity. And the launch of the STS-135 finally ignited my passion
          for flight. This love for aerospace continued strong through my
          childhood, even when faced with missions that didn't quite seem to go
          nominally...
        </Text>
      </Flex>

      <ASPDoodle />
    </Section>
  );
}
