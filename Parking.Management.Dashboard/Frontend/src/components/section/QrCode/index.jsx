import "./index.css";
import { useEffect, useState } from "react";

const Statistcs = () => {
  const [token] = useState(localStorage.getItem("PM:TOKEN"));

  return (
    <div className="qrcode-wrapper">
      <div className="qrcode-container"></div>
    </div>
  );
};

export default Statistcs;
