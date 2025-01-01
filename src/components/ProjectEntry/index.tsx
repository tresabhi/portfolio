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
import { useEffect, useRef, useState, type ReactNode } from "react";
import "./index.css";

interface ProjectEntryProps {
  title: string;
  image: string | string[];
  children: ReactNode;
  time: string;
  truncate?: boolean;
  video?: string;
  alternative?: boolean;
}

export function ProjectEntry({
  title,
  image,
  children,
  time,
  video,
  truncate,
  alternative,
}: ProjectEntryProps) {
  const [expanded, setExpanded] = useState(!truncate);
  const [index, setIndex] = useState(0);
  const images = Array.isArray(image) ? image : [image];
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);

      const indexAfterThis = (index + 2) % images.length;
      const image = images[indexAfterThis];
      const img = new Image();

      img.src = image;
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex gap="6" direction={alternative ? "row-reverse" : "row"}>
      <Link href={video} target="_blank">
        <Box
          width="15rem"
          height="15rem"
          flexShrink="0"
          style={{
            backgroundImage: `url(${images[index]})`,
            boxShadow: "var(--shadow-5)",
            borderRadius: "var(--radius-4)",
            backgroundSize: "cover",
            overflow: "hidden",
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

          {Array.isArray(image) && (
            <Flex
              justify="end"
              width="100%"
              bottom="0"
              key={index}
              position="absolute"
              style={{
                backgroundColor: "var(--gray-11)",
              }}
            >
              <Box
                height="0.25rem"
                ref={progress}
                className="project-image-progress"
                style={{
                  backgroundColor: "var(--gray-1)",
                }}
              />
            </Flex>
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
        <Flex
          align="center"
          gap="4"
          direction={alternative ? "row-reverse" : "row"}
        >
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
      1
    </Flex>
  );
}
