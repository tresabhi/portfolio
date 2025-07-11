import { Box, Flex, Link } from "@radix-ui/themes";
import { NasaWorm } from "../NasaWorm";
import "./index.css";

export function SectionHighlights() {
  return (
    <Box position="relative" height="4rem">
      <Flex
        position="absolute"
        left="calc(var(--space-1) * -1)"
        top="0"
        height="100%"
        width="calc(100% + 2 * var(--space-1))"
        align="center"
        justify="center"
        id="banner"
        py="4"
        gap="5"
      >
        <Link
          highContrast
          style={{ display: "contents", color: "var(--white-a12)" }}
        >
          <NasaWorm width="5.5rem" />
        </Link>

        <Link
          highContrast
          style={{ display: "contents", color: "var(--white-a12)" }}
        >
          <img src="/logos/first-256w.png" style={{ height: "100%" }} />
        </Link>

        <Link
          highContrast
          style={{ display: "contents", color: "var(--white-a12)" }}
        >
          <img
            src="/logos/temporal-logic-256w.png"
            style={{ height: "100%" }}
          />
        </Link>
      </Flex>
    </Box>
  );
}
