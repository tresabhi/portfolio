import { Em, Flex, Text } from "@radix-ui/themes";

interface PaintingLabelProps {
  name: string;
  year: number;
  description: string;
}

export function PaintingLabel({ name, year, description }: PaintingLabelProps) {
  return (
    <Flex align="center" direction="column">
      <Flex align="center" gap="2">
        <Text size="4">
          <Em>{name}</Em>
        </Text>
        <Text color="gray" size="2">
          ({year})
        </Text>
      </Flex>
      <Text color="gray" align="center">
        {description}
      </Text>
    </Flex>
  );
}
