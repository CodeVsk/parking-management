import { useRef } from "react";
import "./index.css";

const Button = ({ className, name, ...rest }) => {
  return (
    <button className={className || "custom-button"} {...rest}>
      {name}
    </button>
  );
};

export default Button;
