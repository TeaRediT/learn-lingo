interface ButtonProps {
  type: "submit" | "button";
  className?: string;
  children: React.ReactNode;
}

const Button = ({ type, className, children }: ButtonProps) => {
  return (
    <button
      className={`${className || ""} flex justify-center items-center h-15 font-bold text-[18px] leading-[1.56] bg-yellow transition-colors ease-in-out duration-250 [:hover,:focus]:bg-[#ffdc86] rounded-xl cursor-pointer`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
