import { Flex, Heading, Text } from "@radix-ui/themes";
import { ASPDoodle } from "./Doodles/ASP";
import { EvolutionDoodle } from "./Doodles/Evolution";
import { Section } from "./Section";

export function SectionJourney() {
  return (
    <Section id="journey">
      <Heading size="8" align="center">
        My Journey
      </Heading>

      <Flex direction="column" align="center" gap="5">
        <EvolutionDoodle height="5rem" width="100%" />

        <Text style={{ maxWidth: "50rem" }}>
          Watching scientists juggle colorful chemicals fascinated me as a
          child, but Mechanix, a toy of bolts and beams, shifted my focus to
          engineering. Building helicopters and battle-bots sparked my
          creativity. And the launch of the STS-135 (the last Space Shuttle)
          finally ignited my passion for flight. This love for aerospace
          continued strong through my childhood, even when faced with missions
          that didn't quite seem to go nominally...
        </Text>
      </Flex>

      <ASPDoodle />
    </Section>
  );
}
