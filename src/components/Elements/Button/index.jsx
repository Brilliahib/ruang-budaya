import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { children, variant = "bg-[#5d9981]", to } = props; // Mengakses props.to
  return (
    <Link to={to}>
      <button
        className={`h-10 px-8 font-medium rounded-md ${variant} text-white border border-transparent transition duration-300 hover:bg-white hover:text-[#5d9981]`}
        type="submit"
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
