import { DotFilledIcon, DotIcon, PlayIcon } from "@radix-ui/react-icons";
import { Box, Flex, Heading, IconButton, Link, Text } from "@radix-ui/themes";
import { useEffect, useState, type ReactNode } from "react";
import "./index.css";

interface ProjectEntryProps {
  title: string;
  image: string | string[];
  children: ReactNode;
  time: string;
  video?: string;
  shotDescription: string;
}

export function ProjectEntry({
  title,
  image,
  children,
  time,
  video,
  shotDescription,
}: ProjectEntryProps) {
  const [index, setIndex] = useState(0);
  const images = Array.isArray(image) ? image : [image];
  const [expanded, setExpanded] = useState(false);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((index) => (index + 1) % images.length);

      const indexAfterThis = (index + 2) % images.length;
      const image = images[indexAfterThis];
      const img = new Image();

      img.src = image;
    }, 10000);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <Flex
      style={{
        borderRadius: "var(--radius-4)",
        overflow: "hidden",
        backgroundColor: "var(--gray-3)",
        boxShadow: "var(--shadow-2)",
      }}
      direction="column"
    >
      <Box>
        <Link href={video} target="_blank">
          <Box
            height="22rem"
            style={{
              backgroundImage: `url(${images[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
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
          </Box>
        </Link>
      </Box>

      {hasMultipleImages && (
        <Flex justify="center" align="center" pt="2" my="2">
          {images.map((_, thisIndex) => {
            let Icon = DotIcon;

            if (thisIndex === index) {
              Icon = DotFilledIcon;
            }

            return (
              <Box
                style={{ cursor: "pointer" }}
                width="2rem"
                height="2rem"
                onClick={() => setIndex(thisIndex)}
              >
                <Icon width="100%" height="100%" />
              </Box>
            );
          })}
        </Flex>
      )}

      <Flex
        direction="column"
        style={{
          transition: "max-height 0.3s ease-in-out",
        }}
        overflow="hidden"
        position="relative"
        justify="center"
        gap="2"
        p="6"
        pt={hasMultipleImages ? "0" : undefined}
      >
        <Flex align="center" gap="4">
          <Heading weight="medium" size="6">
            {title}
          </Heading>
          <Text trim="end">{time}</Text>
        </Flex>

        {!expanded && (
          <Text style={{ maxWidth: "100%" }} wrap="wrap">
            {shotDescription}{" "}
            <Link
              underline="always"
              href="#"
              onClick={(event) => {
                event.preventDefault();
                setExpanded(true);
              }}
            >
              More...
            </Link>
          </Text>
        )}

        {expanded && children}
      </Flex>
    </Flex>
  );
}
