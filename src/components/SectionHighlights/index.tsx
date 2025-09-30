import { Box, Flex, Link } from "@radix-ui/themes";
import { NasaWorm } from "../NasaWorm";
import "./index.css";

export function SectionHighlights() {
  return (
    <Box position="relative" height={{ initial: "3rem", xs: "4rem" }}>
      <Flex
        position="absolute"
        left={{ initial: "0", lg: "calc(var(--space-1) * -1)" }}
        top="0"
        height="100%"
        width={{ initial: "100%", lg: "calc(100% + 2 * var(--space-1))" }}
        align="center"
        justify="center"
        id="banner"
        py={{ initial: "3", xs: "4" }}
        gap={{ initial: "6", xs: "8", sm: "9" }}
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
          <img
            src="/logos/temporal-logic-white-256w.png"
            style={{ height: "100%" }}
          />
        </Link>

        {/* <Link
          highContrast
          style={{ display: "contents", color: "var(--white-a12)" }}
        >
          <img src="/logos/first-256w.png" style={{ height: "100%" }} />
        </Link> */}
      </Flex>
    </Box>
  );
}
