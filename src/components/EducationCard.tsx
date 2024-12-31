import { FileTextIcon, RocketIcon, SewingPinIcon } from "@radix-ui/react-icons";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";

interface EducationCardProps {
  name: string;
  type: string;
  location: string;
  time: string;
  image: string;
  grade: string;
}

export function EducationCard({
  name,
  type,
  location,
  time,
  grade,
  image,
}: EducationCardProps) {
  return (
    <Card variant="classic" style={{ flexGrow: 1, flexShrink: 0 }}>
      <Flex align="center" gap="6" px="2">
        <img src={image} style={{ height: "7rem", width: "7rem" }} />

        <Flex direction="column" gap="1">
          <Flex align="center" gap="2">
            <Heading size="5">{name}</Heading>
            <Text trim="end" color="gray">
              {time}
            </Text>
          </Flex>

          <Flex gap="2">
            <Text>
              <Flex align="center" gap="1">
                <RocketIcon />
                {type}
              </Flex>
            </Text>

            <Text>
              <Flex align="center" gap="0">
                <SewingPinIcon />
                {location}
              </Flex>
            </Text>
          </Flex>

          <Flex gap="2">
            <Text>
              <Flex align="center" gap="1">
                <FileTextIcon />
                {grade}
              </Flex>
            </Text>

            {/* <Text>
              <Flex align="center" gap="0">
                <SewingPinIcon />
                {location}
              </Flex>
            </Text> */}
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
