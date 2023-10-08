import { useRef } from "react";
import "./index.css";

const Input = ({ name, className, defaultValue, ...rest }) => {
  const inputRef = useRef(null);
  return (
    <input
      className={className || "custom-input"}
      ref={inputRef}
      defaultValue={defaultValue}
      {...rest}
    />
  );
};

export default Input;
