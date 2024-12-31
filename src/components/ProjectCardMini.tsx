import { Flex, Link, Text } from "@radix-ui/themes";

interface ProjectCardMiniProps {
  title: string;
  image: string;
  white?: boolean;
  href: string;
}

export function ProjectCardMini({
  title,
  image,
  white,
  href,
}: ProjectCardMiniProps) {
  return (
    <Link href={href}>
      <Flex
        direction="column"
        width="15rem"
        height="15rem"
        style={{
          borderRadius: "var(--radius-4)",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          style={{ objectFit: "cover", flex: "1", minHeight: 0 }}
        />
        <Flex
          align="center"
          justify="center"
          width="100%"
          height="fit-content"
          py="2"
          style={{
            backdropFilter: "blur(1rem)",
            backgroundColor: white ? undefined : "var(--gray-a4)",
          }}
        >
          <Text
            weight="medium"
            size="4"
            style={{ color: white ? "var(--gray-1)" : undefined }}
            highContrast
          >
            {title}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}
