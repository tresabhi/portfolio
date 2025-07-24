import { Box, Flex } from "@radix-ui/themes";

export function SubtleSeparator() {
  return (
    <Flex justify="center" px="9" py="7">
      <Box
        height="0.5px"
        flexGrow="1"
        style={{ backgroundColor: "var(--gray-8)" }}
        maxWidth="60rem"
      />
    </Flex>
  );
}
