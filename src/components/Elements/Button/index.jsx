import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { children, type, to, fullWidth } = props;
  let buttonClass =
    "h-10 px-8 font-medium rounded-md text-white transition duration-300";
  let hoverClass = "";

  if (type === "filled") {
    buttonClass += ` bg-[#76a17f]`;
  } else if (type === "outlined") {
    buttonClass += ` border-[#76a17f] text-[#76a17f] border`;
    hoverClass = `hover:bg-[#76a17f] hover:text-white`;
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
