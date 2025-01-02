import { Theme, type ThemeProps } from "@radix-ui/themes";

export function BaseTheme(props: ThemeProps) {
  return (
    <Theme accentColor="blue" appearance="dark" radius="full" {...props} />
  );
}
