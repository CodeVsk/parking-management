import { useRef } from "react";
import "./index.css";

const Button = ({ className, name, ...rest }) => {
  return (
    <button className={`custom-button ${className}`} {...rest}>
      {name}
    </button>
  );
};

export default Button;
