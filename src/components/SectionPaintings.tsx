import { Box, Flex } from "@radix-ui/themes";
import { Painting } from "./Painting";
import { PaintingLabel } from "./PaintingLabel";
import { Section } from "./Section";

export function SectionPaintings() {
  return (
    <Section id="paintings" gap="9">
      <Flex direction="column" gap="6">
        <Box position="relative" height="min(calc(100vw * 5 / 4 / 2), 32rem)">
          <Painting
            position="absolute"
            bottom="0"
            left="50%"
            src="/paintings/ross-style-2-512h.jpg"
            height="75%"
            style={{
              transform: "translateX(calc(-12.5%))",
              backgroundSize: "cover",
              backgroundPosition: "center",
              aspectRatio: "4 / 5",
            }}
          />
          <Painting
            position="absolute"
            top="0"
            left="50%"
            src="/paintings/ross-style-1-512h.jpg"
            height="75%"
            style={{
              transform: "translateX(calc(-100% + 12.5%))",
              backgroundSize: "cover",
              backgroundPosition: "center",
              aspectRatio: "4 / 5",
            }}
          />
        </Box>

        <PaintingLabel
          name="Unnamed Doublet"
          year={2025}
          description="Bob Ross-style 30 minute paintings"
        />
      </Flex>

      <Flex direction="column" gap="6" align="center">
        <Painting
          width="min(80vw, 32rem)"
          src="/paintings/carina-nebula-640w.jpg"
          style={{ aspectRatio: "16 / 9" }}
        />
        <PaintingLabel
          name="Carina Nebula"
          year={2023}
          description="Faithful recreation of the iconic James Webb image"
        />
      </Flex>
    </Section>
  );
}
