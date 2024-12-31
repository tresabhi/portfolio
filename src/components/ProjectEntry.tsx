import { CaretDownIcon } from "@radix-ui/react-icons";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { useState, type ReactNode } from "react";

interface ProjectEntryProps {
  title: string;
  image: string;
  children: ReactNode;
  time: string;
  truncate?: boolean;
}

export function ProjectEntry({
  title,
  image,
  children,
  time,
  truncate,
}: ProjectEntryProps) {
  const [expanded, setExpanded] = useState(!truncate);

  return (
    <Flex gap="6">
      <img
        src={image}
        style={{
          width: "15rem",
          height: "15rem",
          borderRadius: "var(--radius-4)",
          boxShadow: "var(--shadow-5)",
        }}
      />

      <Flex
        flexGrow="1"
        direction="column"
        maxHeight={expanded ? "50rem" : "15rem"}
        style={{
          transition: "max-height 0.3s ease-in-out",
        }}
        overflow="hidden"
        position="relative"
      >
        <Flex align="center" gap="3">
          <Heading weight="medium" size="6">
            {title}
          </Heading>
          <Text size="2">{time}</Text>
        </Flex>

        <Text>{children}</Text>

        {!expanded && (
          <Flex
            position="absolute"
            bottom="0"
            width="100%"
            left="0"
            justify="center"
            pt="9"
            onClick={() => setExpanded(true)}
            style={{
              background:
                "linear-gradient(transparent, var(--mauve-1), var(--mauve-1))",
            }}
          >
            <Button variant="ghost" size="3" mb="2">
              More <CaretDownIcon />
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
