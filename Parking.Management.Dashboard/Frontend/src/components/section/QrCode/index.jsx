import { useSelector } from "react-redux";
import { QRCodeApi } from "../../../api";
import "./index.css";
import { useEffect, useState } from "react";
import CountdownTimer from "../../common/Countdown";

const QrCode = () => {
  const user = useSelector((state) => state.user);

  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [qrCode, setQRCode] = useState("");
  const [expireIn, setExpireIn] = useState("");
  const [qrcodeApi] = useState(new QRCodeApi());

  useEffect(() => {
    async function getData() {
      const result = await qrcodeApi.generateQRCode(token);

      setQRCode(result.data);
    }

    getData();
  }, []);

  return (
    <div id="qrcode-wrapper">
      <div className="qrcode-header">
        <div className="qrcode-title">
          <span>Informações</span>
        </div>
        <div className="qrcode-divisor"></div>
      </div>
      <div className="qrcode-content">
        <span>Validação QRCode</span>
        <div className="qrcode-list">
          {qrCode ? <img src={qrCode} alt="" /> : <></>}

          <CountdownTimer
            text="O código acima irá expirar em"
            timer={user.expireIn}
          />

          <p>(Utilize o código acima para autenticar sua saida)</p>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
