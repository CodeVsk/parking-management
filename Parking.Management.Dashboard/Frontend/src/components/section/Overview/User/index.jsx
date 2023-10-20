import "./index.css";
import Card from "../../Card";
import CardStatistics from "../../CardStatistics";
import { useEffect, useState } from "react";
import { GarageApi, UserApi } from "../../../../api";
import { formatHour } from "../../../../global/hour-format";

const OverviewUser = () => {
  const [hours] = useState(new Date());
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [insideGarageCount, setInsideGarageCount] = useState(0);
  const [userCount, setUserCount] = useState({
    totalUsers: 0,
    createdthisMonth: 0,
  });
  const [userApi] = useState(new UserApi(token));
  const [garageApi] = useState(new GarageApi(token));

  useEffect(() => {
    async function getData() {
      const response = await userApi.getStatistics(token);

      setUserCount(response.data);
    }

    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await garageApi.countInside(token);

      setInsideGarageCount(response.data);
    }

    getData();
  }, []);

  return (
    <div id="overview-wrapper">
      <div className="overview-header">
        <span className="overview-title">Visão Geral</span>
      </div>
      <div className="overview-content">
        <span className="overview-description">Dados Atuais</span>
        <Card
          title="Garagem"
          description={
            insideGarageCount == 1
              ? `Veiculo no estacionamento atualmente`
              : `Veiculos no estacionamento atualmente`
          }
          counter={insideGarageCount}
        />
      </div>
    </div>
  );
};

export default OverviewUser;
