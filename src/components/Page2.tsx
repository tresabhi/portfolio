import { Blockquote, Box, Flex, Heading } from "@radix-ui/themes";
import { EducationCard } from "./EducationCard";

const BIRTH = new Date(2005, 3, 7);

export function Page2() {
  const timeElapsed = Date.now() - BIRTH.getTime();
  const age = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));

  return (
    <>
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
          style={{ maxWidth: "50rem" }}
        >
          The STS-135 may have marked the <i>end</i> of the Space Shuttle era,
          but it <i>ignited</i> my lifelong fascination with flying machines. At
          just seven years old, I could not even remotely grasp the mission's
          magnitude and scale. Even now, as a {age}-year-old, its enormity and
          complexity still astounds me! Over the years, I've developed an
          enduring passion for rockets and airplanes. Coupled with a growing
          interest in computers, choosing Aerospace Engineering with a
          Cyber-Physical Systems minor was an obvious path forward.
        </Blockquote>
      </Flex>
    </>
  );
}
