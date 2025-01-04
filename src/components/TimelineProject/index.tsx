import { DotIcon } from "@radix-ui/react-icons";
import { Badge, Box, Flex, Heading, Text } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { TimelineProjectType } from "./constants";

interface TimelineProjectProps {
  title: string;
  children: ReactNode;
  first?: boolean;
  last?: boolean;
  time?: string;
  type: TimelineProjectType;
}

const WIDTH = "0.25rem";
const COLOR = "var(--gray-4)";

export function TimelineProject({
  title,
  children,
  first,
  last,
  time,
  type,
}: TimelineProjectProps) {
  return (
    <Flex>
      <Flex align="center" justify="end" flexShrink="0" width="9rem" pr="3">
        <Text trim="start">{time}</Text>
      </Flex>

      <Box
        position="relative"
        width={WIDTH}
        style={
          first || last
            ? {
                background: `linear-gradient(to ${
                  first ? "bottom" : "top"
                }, var(--gray-1), ${COLOR} 50%)`,
              }
            : { backgroundColor: COLOR }
        }
        flexShrink="0"
      >
        <Text color="gray" size="8">
          <Box
            position="absolute"
            top="50%"
            left="50%"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <DotIcon width="1em" height="1em" />
          </Box>
        </Text>
      </Box>

      <Flex ml="9" direction="column" my="6" gap="2">
        <Flex align="center" gap="3">
          <Heading>{title}</Heading>

          {type === TimelineProjectType.Educational && (
            <Badge color="amber">Educational</Badge>
          )}
          {type === TimelineProjectType.Club && (
            <Badge color="green">Club</Badge>
          )}
          {type === TimelineProjectType.Hobby && (
            <Badge color="pink">Hobby</Badge>
          )}
        </Flex>

        {typeof children === "string" ? <Text>{children}</Text> : children}
      </Flex>
    </Flex>
  );
}
