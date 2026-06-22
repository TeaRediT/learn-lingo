import Link from "next/link";
import Button from "../button/Button";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center max-w-360 px-32 my-5 mx-auto">
        <Link className="flex items-center gap-2" href={"/"}>
          <svg width={28} height={28}>
            <use href="/sprite.svg#icon-logo"></use>
          </svg>
          <p className="text-[20px] leading-[1.2] tracking-[-0.02em]">
            LearnLingo
          </p>
        </Link>
        <nav>
          <ul className="flex gap-7 font-normal leading-tight">
            <li>
              <Link
                className="[:hover,:focus]:text-yellow transition-colors ease-in-out duration-250"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="[:hover,:focus]:text-yellow transition-colors ease-in-out duration-250"
                href={"/teachers"}
              >
                Teachers
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="flex gap-4 h-12">
          <li>
            <button
              type="button"
              className="flex items-center gap-2 h-full cursor-pointer font-bold leading-tight  [:hover,:focus]:text-yellow transition-colors ease-in-out duration-250"
            >
              <svg className="text-yellow" width={20} height={20}>
                <use href="/sprite.svg#icon-login"></use>
              </svg>
              Log in
            </button>
          </li>
          <li>
            <Button
              type="button"
              className="bg-primary text-white h-12 min-w-41.5 [:hover,:focus]:bg-[#4f4f50]"
            >
              Registration
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
