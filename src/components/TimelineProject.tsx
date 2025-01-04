import { DotIcon } from "@radix-ui/react-icons";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";

interface TimelineProjectProps {
  alternate?: boolean;
  title: string;
  children: string;
  first?: boolean;
  last?: boolean;
  time?: string;
}

const RADIUS = "4rem";
const WIDTH = "0.25rem";
const COLOR = "var(--gray-4)";
const PADDING = "10em";

export function TimelineProject({
  alternate,
  title,
  children,
  first,
  last,
  time,
}: TimelineProjectProps) {
  return (
    <>
      <Flex
        direction="column"
        pr={alternate ? undefined : PADDING}
        pl={alternate ? PADDING : undefined}
      >
        <Flex direction={alternate ? "row-reverse" : "row"}>
          <Flex
            align="center"
            justify={alternate ? "start" : "end"}
            flexShrink="0"
            width={PADDING}
            pr={alternate ? undefined : "3"}
            pl={alternate ? "3" : undefined}
          >
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

          <Flex
            ml={alternate ? undefined : "9"}
            mr={alternate ? "9" : undefined}
            direction="column"
          >
            <Heading>{title}</Heading>
            <Text>{children}</Text>
          </Flex>
        </Flex>
      </Flex>

      {!last && (
        <Flex
          px={PADDING}
          align="center"
          style={{
            transform: `scaleX(${alternate ? -1 : 1})`,
          }}
        >
          <Box
            width={RADIUS}
            height={RADIUS}
            overflow="hidden"
            mb={`calc(${RADIUS} - ${WIDTH})`}
          >
            <Box
              width={RADIUS}
              height={RADIUS}
              style={{
                marginLeft: WIDTH,
                marginTop: `-${WIDTH}`,
                outline: `${WIDTH} solid ${COLOR}`,
                borderBottomLeftRadius: "100%",
              }}
            />
          </Box>

          <Box flexGrow="1" height={WIDTH} style={{ backgroundColor: COLOR }} />

          <Box
            width={RADIUS}
            height={RADIUS}
            overflow="hidden"
            mt={`calc(${RADIUS} - ${WIDTH})`}
          >
            <Box
              width={RADIUS}
              height={RADIUS}
              style={{
                marginLeft: `-${WIDTH}`,
                marginTop: WIDTH,
                outline: `${WIDTH} solid ${COLOR}`,
                borderTopRightRadius: "100%",
              }}
            />
          </Box>
        </Flex>
      )}
    </>
  );
}
