import { Flex } from "@radix-ui/themes";
import { MeIntro } from "./MeIntro";

export function Page1() {
  return (
    <Flex width="100vw" height="100vh" align="center" justify="center">
      <MeIntro />
      <FeatureProjects />
    </Flex>
  );
}
