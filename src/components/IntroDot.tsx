import { Box, Text } from "@radix-ui/themes";

export function IntroDot() {
  return (
    <Box display={{ initial: "none", xs: "block" }}>
      <Text color="gray">•</Text>
    </Box>
  );
}
