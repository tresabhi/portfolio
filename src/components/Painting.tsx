import { Box, type BoxProps } from "@radix-ui/themes";

type PaintingProps = BoxProps & {
  src: string;
};

export function Painting({ style, src, ...props }: PaintingProps) {
  return (
    <Box
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "var(--radius-1)",
        boxShadow: "var(--shadow-6)",
        ...style,
      }}
      {...props}
    />
  );
}
