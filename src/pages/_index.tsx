import { Flex } from "@radix-ui/themes";
import { BaseTheme } from "../components/BaseTheme";
import { SectionEducation } from "../components/SectionEducation";
import { SectionIntro } from "../components/SectionIntro";
import { SectionJourney } from "../components/SectionJourney";
import { SectionProjects } from "../components/SectionProjects";

export function Page() {
  return (
    <BaseTheme>
      <Flex
        justify="center"
        style={{ background: "var(--gray-3)" }}
        minHeight="100vh"
      >
        <Flex
          direction="column"
          flexGrow="1"
          px="9"
          py="9"
          gap="9"
          maxWidth="80rem"
          style={{ background: "var(--gray-1)", boxShadow: "var(--shadow-3)" }}
        >
          <SectionIntro />
          <SectionJourney />
          <SectionEducation />
          <SectionProjects />
        </Flex>
      </Flex>
    </BaseTheme>
  );
}
