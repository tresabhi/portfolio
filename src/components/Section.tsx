import { Flex, type FlexProps, type ThemeProps } from "@radix-ui/themes";
import { BaseTheme } from "./BaseTheme";

type SectionProps = FlexProps & Pick<ThemeProps, "appearance"> & {};

export function Section({ children, appearance, ...props }: SectionProps) {
  return (
    <BaseTheme appearance={appearance}>
      <Flex
        direction="column"
        py={{ initial: "7", md: "9" }}
        px={{ initial: "5", xs: "7", md: "9" }}
        gap={{ initial: "7", md: "9" }}
        {...props}
      >
        {children}
      </Flex>
    </BaseTheme>
  );
}
