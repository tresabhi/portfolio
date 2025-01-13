import { PlayIcon } from "@radix-ui/react-icons";
import {
  Badge,
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  SegmentedControl,
  Text,
} from "@radix-ui/themes";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { imgur } from "../../core/imgur";
import { TimelineProjectType as ProjectType } from "./constants";

interface ProjectProps {
  title: string;
  children: ReactNode;
  time?: string;
  type: ProjectType;
  images?: string[];
  video?: { image: string; youtube: string };
  skills?: string[];
}

export function Project({
  title,
  children,
  time,
  type,
  images,
  video,
  skills,
}: ProjectProps) {
  const cycleTime = useRef(5000 + 1000 * (Math.random() - 0.5));
  const [imageIndex, setImageIndex] = useState(0);
  const [cycle, setCycle] = useState(true);

  useEffect(() => {
    if (!cycle) return;

    const interval = setInterval(() => {
      setImageIndex((index) => (index + 1) % (images?.length ?? 1));
    }, cycleTime.current);

    return () => clearInterval(interval);
  }, [cycle]);

  return (
    <Flex gap="6">
      <Flex ml="9" direction="column" gap="4" flexGrow="1" flexBasis="0">
        <Flex direction="column">
          <Flex align="center" gap="3">
            <Heading>{title}</Heading>

            {type === ProjectType.Educational && (
              <Badge color="amber">Educational</Badge>
            )}
            {type === ProjectType.Club && <Badge color="green">Club</Badge>}
            {type === ProjectType.Hobby && <Badge color="pink">Hobby</Badge>}
          </Flex>

          <Text color="gray">{time}</Text>
        </Flex>

        {skills !== undefined && (
          <Flex gap="1" wrap="wrap">
            <Text weight="bold" mr="1">
              Skills used:
            </Text>{" "}
            {skills.map((skill) => (
              <Badge size="2" color="gray">
                {skill}
              </Badge>
            ))}
          </Flex>
        )}

        <Flex direction="column" gap="2">
          {typeof children === "string" ? <Text>{children}</Text> : children}
        </Flex>
      </Flex>

      {(images || video) && (
        <Flex
          flexGrow="1"
          direction="column"
          flexBasis="0"
          align="center"
          justify="center"
          gap="2"
          position="relative"
        >
          {(() => {
            const box = (
              <Box
                style={{
                  backgroundImage: `url(${imgur(
                    images ? images[imageIndex] : video!.image
                  )})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "20rem",
                  height: "20rem",
                  boxShadow: "var(--shadow-2)",
                  borderRadius: "var(--radius-2)",
                }}
              />
            );

            if (video)
              return (
                <Link
                  href={`https://youtu.be/${video.youtube}`}
                  target="_blank"
                >
                  {box}
                </Link>
              );

            return box;
          })()}

          {images && (
            <SegmentedControl.Root
              size="1"
              value={`${imageIndex}`}
              onValueChange={(value) => {
                setImageIndex(parseInt(value));
                setCycle(false);
              }}
            >
              {images.map((_, index) => (
                <SegmentedControl.Item value={`${index}`}>
                  {index + 1}
                </SegmentedControl.Item>
              ))}
            </SegmentedControl.Root>
          )}

          {video && (
            <IconButton
              size="4"
              variant="surface"
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
              tabIndex={-1}
            >
              <PlayIcon />
            </IconButton>
          )}
        </Flex>
      )}
    </Flex>
  );
}
