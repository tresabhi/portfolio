import { Flex, type ThemeProps } from "@radix-ui/themes";
import { BaseTheme } from "./BaseTheme";

interface SectionProps extends ThemeProps {}

export function Section({ children, ...props }: SectionProps) {
  return (
    <BaseTheme {...props}>
      <Flex direction="column" py="9" gap="9" px="9">
        {children}
      </Flex>
    </BaseTheme>
  );
}
