import { cn } from "@/lib/utils";

interface ButtonProps {
  type: "submit" | "button";
  className?: string;
  children: React.ReactNode;
}

const Button = ({ type, className, children }: ButtonProps) => {
  const baseStyles =
    "flex justify-center items-center h-15 font-bold text-[18px] leading-[1.56] bg-yellow transition-colors ease-in-out duration-250 [:hover,:focus]:bg-[#ffdc86] rounded-xl cursor-pointer";
  const mergedStyles = cn(baseStyles, className);

  return (
    <button className={mergedStyles} type={type}>
      {children}
    </button>
  );
};

export default Button;
