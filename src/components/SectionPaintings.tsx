import { Box, Flex } from "@radix-ui/themes";
import { PaintingLabel } from "./PaintingLabel";
import { Section } from "./Section";

export function SectionPaintings() {
  return (
    <Section id="projects" gap="9">
      <Flex direction="column" gap="6">
        <Box position="relative" height="min(calc(100vw * 5 / 4 / 2), 32rem)">
          <Box
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(calc(-12.5%))",
              backgroundImage: "url(/paintings/ross-style-2-512.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              aspectRatio: "4 / 5",
              height: "75%",
              borderRadius: "var(--radius-1)",
              boxShadow: "var(--shadow-6)",
            }}
          />
          <Box
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(calc(-100% + 12.5%))",
              backgroundImage: "url(/paintings/ross-style-1-512.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              aspectRatio: "4 / 5",
              height: "75%",
              borderRadius: "var(--radius-1)",
              boxShadow: "var(--shadow-6)",
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
        <Box
          width="min(80vw, 32rem)"
          style={{
            aspectRatio: "16 / 9",
            backgroundImage:
              "url(https://stsci-opo.org/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "var(--radius-1)",
            boxShadow: "var(--shadow-6)",
          }}
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
