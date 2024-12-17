interface SectionHeading {
  title: string;
  subtitle: string;
  variant?: "white" | "black";
}

export const SectionHeading: React.FC<SectionHeading> = ({
  title,
  subtitle,
  variant = "white",
}) => {
  return (
    <>
      <p className="text-main text-sm font-medium ">{title.toUpperCase()}</p>
      <p
        className={`text-5xl font-semibold mt-1 ${
          variant === "white" ? "text-black" : "text-white"
        }`}
      >
        {subtitle}
      </p>
    </>
  );
};
