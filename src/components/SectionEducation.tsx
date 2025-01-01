import { Blockquote, Box, Flex, Heading, Separator } from "@radix-ui/themes";
import { EducationCard } from "./EducationCard";

const BIRTH = new Date(2005, 3, 7);

export function SectionEducation() {
  const timeElapsed = Date.now() - BIRTH.getTime();
  const age = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));

  return (
    <>
      <Separator size="4" id="education" />

      <Flex direction="column" gap="4">
        <Heading size="7">Education</Heading>

        <Flex wrap="wrap" gap="3" width="100%">
          <EducationCard
            name="Aerospace Engineering"
            type="Bachelor, Major"
            location="Iowa State University"
            time="2023-present"
            image="https://i.imgur.com/iHpzvUm.png"
            grade="GPA 3.83"
          />

          <EducationCard
            name="Cyber-Physical Systems"
            type="Bachelor, Minor"
            location="Iowa State University"
            time="2025-present"
            image="https://i.imgur.com/iHpzvUm.png"
          />
        </Flex>
      </Flex>

      <Flex gap="7" align="center" justify="center">
        <Box
          width="10rem"
          height="10rem"
          flexShrink="0"
          style={{
            backgroundImage: "url(https://i.imgur.com/4DvrZho.png)",
            backgroundSize: "cover",
            borderRadius: "var(--radius-4)",
            boxShadow: "var(--shadow-5)",
          }}
        />

        <Blockquote
          color="gray"
          highContrast
          size="4"
          style={{ maxWidth: "40rem" }}
        >
          STS-135 sparked my fascination with flying machines at seven years
          old. Today, at {age}, I'm still amazed by its complexity. This
          enduring passion for rockets and airplanes, paired with an interest in
          computers, led me to pursue Aerospace Engineering with a
          Cyber-Physical Systems minor.
        </Blockquote>
      </Flex>
    </>
  );
}
