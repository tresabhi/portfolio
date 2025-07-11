import { Badge, Flex, Text } from "@radix-ui/themes";

interface PaintingLabelProps {
  name: string;
  year: number;
  description: string;
}

export function PaintingLabel({ name, year, description }: PaintingLabelProps) {
  return (
    <Flex align="center" direction="column">
      <Flex align="center" gap="2">
        <Text size="4">{name}</Text>
        <Badge color="gray" size="1">
          {year}
        </Badge>
      </Flex>
      <Text color="gray" align="center">
        {description}
      </Text>
    </Flex>
  );
}
