interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`${className || ""} max-w-360 mx-auto px-16`}>
      {children}
    </div>
  );
};

export default Container;
