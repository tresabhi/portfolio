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
          creativity, and STS-135 ignited my passion for flight. This love for
          rockets and airplanes continued strong through my childhood, even when
          faced with missions that would've been better scrubbed:
        </Text>
      </Flex>

      <ASPDoodle />

      <Flex direction="column" gap="3">
        <Heading>My curiosity didn't start easy</Heading>

        <Flex direction="column" gap="2">
          <Text>
            Abhi's Space Programs (ASP for short) marked my first venture into
            propulsion, armed with zero formal knowledge of rocketry—or safety,
            for that matter.
          </Text>
          <Text>
            With aluminum foil bodies and solid motor fuel from sparklers and
            candle wax, these rockets were truly the pinnacle of childhood
            engineering! For inexplicable reasons, however, nearly every launch
            followed the same familiar sequence:
          </Text>
        </Flex>
      </Flex>
    </Section>
  );
}
