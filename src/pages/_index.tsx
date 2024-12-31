import { Flex, Separator } from "@radix-ui/themes";
import { BaseTheme } from "../components/BaseTheme";
import { Page1 } from "../components/Page1";
import { Page2 } from "../components/Page2";

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
          <Page1 />
          <Separator size="4" />
          <Page2 />
        </Flex>
      </Flex>
    </BaseTheme>
  );
}
