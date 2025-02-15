import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

export const NavButton = ({ className, buttonText, path }) => {
  return (
    <Link
      to={path}
      className={twMerge(
        "absolute text-white font-bold px-4 py-2 bg-brand opacity-60 rounded-full transition duration-300 hover:opacity-80 shadow-2xl hover:shadow-xl",
        className
      )}
    >
      {buttonText}
    </Link>
  );
};
