import { Flex, Heading } from "@radix-ui/themes";
import { EducationCard } from "./EducationCard";

export function Page2() {
  return (
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
  );
}
