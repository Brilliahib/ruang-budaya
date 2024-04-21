import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { children, type, to, fullWidth } = props;
  let buttonClass =
    "h-10 px-8 font-medium rounded-md text-white transition duration-300";
  let hoverClass = "";

  if (type === "filled") {
    buttonClass += ` bg-[#5d9981]`;
  } else if (type === "outlined") {
    buttonClass += ` border-[#5d9981] text-[#5d9980] border`;
    hoverClass = `hover:bg-[#5d9981] hover:text-white`;
  }

  if (fullWidth) {
    buttonClass += ` w-full`;
  }

  return (
    <Link to={to}>
      <button className={`${buttonClass} ${hoverClass}`} type="submit">
        {children}
      </button>
    </Link>
  );
};

export default Button;
