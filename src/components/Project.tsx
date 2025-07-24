import { Flex, Heading } from "@radix-ui/themes";
import { Section } from "./Section";
import { Skills } from "./Skills";

interface ProjectProps {
  image: string;
  shadowX?: string;
  shadowY?: string;
  shadowIntensity?: number;
  title: string;
  skills: string[];
  children: React.ReactNode;
  imageWidth: string;
  reverse?: boolean;
  sticky?: boolean;
}

export function Project({
  image,
  reverse,
  shadowIntensity = 6,
  shadowX = reverse ? "var(--space-1)" : "calc(var(--space-1) * -1)",
  shadowY = "var(--space-1)",
  title,
  skills,
  children,
  imageWidth,
  sticky,
}: ProjectProps) {
  return (
    <Section align="center">
      <Flex
        justify="center"
        gap="6rem"
        direction={reverse ? "row-reverse" : "row"}
        width="60rem"
        align={sticky ? "start" : "center"}
      >
        <Flex flexGrow="1" direction="column" gap="4">
          <Heading weight="medium">{title}</Heading>

          <Skills skills={skills} />

          {children}
        </Flex>

        <img
          src={image}
          style={{
            position: sticky ? "sticky" : undefined,
            top: "var(--space-5)",
            flexShrink: 0,
            width: imageWidth,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: `drop-shadow(${shadowX} ${shadowY} 0.25rem var(--black-a${shadowIntensity}))`,
          }}
        />
      </Flex>
    </Section>
  );
}
