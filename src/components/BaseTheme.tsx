import { Box, Theme, type BoxProps, type ThemeProps } from "@radix-ui/themes";

export function BaseTheme({
  style,
  appearance,
  ...props
}: BoxProps & { appearance?: ThemeProps["appearance"] }) {
  return (
    <Theme
      accentColor="red"
      radius="full"
      style={{ display: "contents" }}
      appearance={appearance}
    >
      <Box style={{ background: "var(--mauve-3)", ...style }} {...props} />
    </Theme>
  );
}
