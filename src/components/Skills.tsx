import { Badge, Flex } from "@radix-ui/themes";

interface SkillsProps {
  skills: string[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Flex gap="1" wrap="wrap">
      {skills.map((skill) => (
        <Badge key={skill} size="2" color="gray">
          {skill}
        </Badge>
      ))}
    </Flex>
  );
}
