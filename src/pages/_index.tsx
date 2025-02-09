import { Flex } from "@radix-ui/themes";
import { BaseTheme } from "../components/BaseTheme";
import { SectionIntro } from "../components/SectionIntro";

export function Page() {
  return (
    <BaseTheme>
      <Flex
        justify="center"
        minHeight="100vh"
        style={{ background: "var(--gray-1)" }}
        py={{ initial: "0", lg: "9" }}
      >
        <Flex
          direction="column"
          flexGrow="1"
          maxWidth="80rem"
          style={{
            background: "var(--gray-3)",
          }}
        >
          <SectionIntro />
          {/* <SectionJourney /> */}
          {/* <SectionEducation /> */}
          {/* <SectionProjects /> */}
        </Flex>
      </Flex>
    </BaseTheme>
  );
}
