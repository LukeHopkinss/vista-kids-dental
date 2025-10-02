export default function BackgroundBlobs({
  variant = "left",
}: {
  variant?: "left" | "right";
}) {
  // Left variant: orange top-left, sky bottom-right
  // Right variant: swap corners/colors for variety
  const isLeft = variant === "left";
  return (
    <>
      <div
        className={[
          "pointer-events-none absolute h-80 w-80 -z-10 rounded-full blur-[64px]",
          isLeft ? "-top-40 -left-40 bg-orange-100" : "-top-40 -right-40 bg-sky-100",
        ].join(" ")}
      />
      <div
        className={[
          "pointer-events-none absolute h-80 w-80 -z-10 rounded-full blur-[64px]",
          isLeft ? "-bottom-40 -right-40 bg-sky-100" : "-bottom-40 -left-40 bg-orange-100",
        ].join(" ")}
      />
    </>
  );
}