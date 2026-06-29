interface ContainerProps {
  children: React.ReactNode;
  size: "sm" | "md";
}

const Container = ({ children, size }: ContainerProps) => {
  return (
    <div
      className={` max-w-360 mx-auto ${size === "sm" ? "px-16" : ""} ${size === "md" ? "px-32" : ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
