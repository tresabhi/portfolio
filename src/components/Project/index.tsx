import { PlayIcon } from "@radix-ui/react-icons";
import {
  Badge,
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  SegmentedControl,
  Separator,
  Text,
} from "@radix-ui/themes";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { imgur, ImgurSize } from "../../core/imgur";
import { BM } from "../BM";
import { TimelineProjectType as ProjectType } from "./constants";

interface ProjectProps {
  title: string;
  children: ReactNode;
  type: ProjectType;
  images?: string[];
  video?: { image: string; youtube: string };
  skills?: string[];
}

export function Project({
  title,
  children,
  type,
  images,
  video,
  skills,
}: ProjectProps) {
  const cycleTime = useRef(5000 + 1000 * (Math.random() - 0.5));
  const [imageIndex, setImageIndex] = useState(0);
  const [cycle, setCycle] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!cycle) return;

    const interval = setInterval(() => {
      setImageIndex((index) => (index + 1) % (images?.length ?? 1));
    }, cycleTime.current);

    return () => clearInterval(interval);
  }, [cycle]);

  return (
    <Flex gap="6" direction={{ initial: "column-reverse", sm: "row" }}>
      <Flex justify="center">
        <Separator size="4" />
      </Flex>

      <Flex
        direction="column"
        gap="4"
        flexGrow="1"
        flexBasis="0"
        minHeight={expanded ? undefined : { initial: "20rem", sm: "auto" }}
      >
        <Flex
          align="center"
          gap="3"
          justify={{ initial: "center", sm: "start" }}
        >
          <Heading>{title}</Heading>

          {type === ProjectType.Educational && (
            <Badge color="amber">Educational</Badge>
          )}
          {type === ProjectType.Club && <Badge color="green">Club</Badge>}
          {type === ProjectType.Hobby && <Badge color="pink">Hobby</Badge>}
        </Flex>

        {skills !== undefined && (
          <Flex gap="1" wrap="wrap">
            <BM mr="1">Skills used:</BM>{" "}
            {skills.map((skill) => (
              <Badge size="2" color="gray">
                {skill}
              </Badge>
            ))}
          </Flex>
        )}

        <Box
          flexGrow="1"
          flexBasis="0"
          position={expanded ? "static" : "relative"}
          overflow={expanded ? "visible" : "hidden"}
        >
          <Flex
            position={expanded ? "static" : "absolute"}
            direction="column"
            gap="2"
          >
            {typeof children === "string" ? <Text>{children}</Text> : children}
          </Flex>

          {!expanded && (
            <Flex
              left="0"
              bottom="0"
              width="100%"
              position="absolute"
              style={{
                background: "linear-gradient(transparent, var(--gray-3) 80%)",
              }}
              justify="center"
              align="center"
              pt="9"
            >
              <Link
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setExpanded(true);
                }}
              >
                Read more...
              </Link>
            </Flex>
          )}
        </Box>
      </Flex>

      {(images || video) && (
        <Flex flexGrow="1" flexBasis="0" justify="center" align="start">
          <Flex
            position="sticky"
            gap="2"
            direction="column"
            top="6"
            align="center"
          >
            {(() => {
              const box = (
                <Box
                  style={{
                    backgroundImage: `url(${imgur(
                      images ? images[imageIndex] : video!.image,
                      {
                        format: "jpeg",
                        size: ImgurSize.LargeThumbnail,
                      }
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
        </Flex>
      )}
    </Flex>
  );
}
