import { CaretDownIcon, PlayIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
} from "@radix-ui/themes";
import { useState, type ReactNode } from "react";

interface ProjectEntryProps {
  title: string;
  image: string;
  children: ReactNode;
  time: string;
  truncate?: boolean;
  video?: string;
}

export function ProjectEntry({
  title,
  image,
  children,
  time,
  video,
  truncate,
}: ProjectEntryProps) {
  const [expanded, setExpanded] = useState(!truncate);

  return (
    <Flex gap="6">
      <Link href={video} target="_blank">
        <Box
          width="15rem"
          height="15rem"
          flexShrink="0"
          style={{
            backgroundImage: `url(${image})`,
            boxShadow: "var(--shadow-5)",
            borderRadius: "var(--radius-4)",
            backgroundSize: "cover",
          }}
          position="relative"
        >
          {video && (
            <IconButton
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                cursor: "inherit",
              }}
              size="4"
              color="gray"
              variant="surface"
            >
              <PlayIcon width="1em" height="1em" />
            </IconButton>
          )}
        </Box>
      </Link>

      <Flex
        flexGrow="1"
        direction="column"
        maxHeight={expanded ? "50rem" : "15rem"}
        style={{
          transition: "max-height 0.3s ease-in-out",
        }}
        overflow="hidden"
        position="relative"
        gap="3"
      >
        <Flex align="center" gap="3">
          <Heading weight="medium" size="6">
            {title}
          </Heading>
          <Text size="2">{time}</Text>
        </Flex>

        <Text size="4">
          <Flex direction="column" gap="2">
            {children}
          </Flex>
        </Text>

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
