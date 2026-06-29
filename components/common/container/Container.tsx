interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size: "sm" | "md";
}

const Container = ({ children, className, size }: ContainerProps) => {
  return (
    <div
      className={`${className || ""} max-w-360 mx-auto ${size === "sm" ? "px-16" : ""} ${size === "md" ? "px-32" : ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
