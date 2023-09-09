import "./index.css";
import { Link } from "react-router-dom";

const ButtonLink = ({ className, name, ...rest }) => {
  return (
    <Link className={`custom-button ${className}`} {...rest}>
      {name}
    </Link>
  );
};

export default ButtonLink;
