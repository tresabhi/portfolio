import { Flex } from "@radix-ui/themes";
import { BaseTheme } from "../components/BaseTheme";
import { Page1 } from "../components/Page1";

export function Page() {
  return (
    <BaseTheme>
      <Flex direction="column">
        <Page1 />
      </Flex>
    </BaseTheme>
  );
}
