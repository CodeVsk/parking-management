import "./index.css";
import DefaultLineChart from "../LineChart";
import ListStatistics from "../ListStatistics";
import { useEffect, useState } from "react";
import { GarageApi } from "../../../api";

const Statistcs = () => {
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [vehicles, setVehicles] = useState([]);
  const [garageApi] = useState(new GarageApi(token));

  useEffect(() => {
    async function getData() {
      const response = await garageApi.getLatestUpdated(token);

      setVehicles(response.data);
    }

    getData();
  }, []);

  return (
    <div id="statistics-wrapper">
      <div className="statistics-header">
        <div className="statistics-title">
          <span>Estatisticas</span>
        </div>
        <div className="statistics-divisor"></div>
      </div>
      <DefaultLineChart />
      <div className="statistics-content">
        <span>Últimas movimentações</span>
        <div className="statistics-list">
          {vehicles.map((vehicle) => (
            <ListStatistics
              key={vehicle.id}
              title="Matheus Testudo Turolla"
              description={`${vehicle.vehicle.model} (${vehicle.vehicle.plate})`}
              icon={
                vehicle.status == "INSIDE"
                  ? "bi bi-arrow-up-right-square-fill"
                  : "bi bi-arrow-down-left-square-fill"
              }
              content={[
                { text: vehicle.status == "INSIDE" ? "Entrou" : "SAIU" },
                {
                  text:
                    vehicle.status == "INSIDE"
                      ? new Date(vehicle.entryTime).toLocaleTimeString()
                      : vehicle.departureTime,
                },
              ]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistcs;
