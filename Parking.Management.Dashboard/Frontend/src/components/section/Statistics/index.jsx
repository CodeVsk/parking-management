import "./index.css";
import DefaultLineChart from "../LineChart";
import ListStatistics from "../ListStatistics";
import { useEffect, useState } from "react";
import { GarageApi, VehicleApi } from "../../../api";

const Statistcs = () => {
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [vehicles, setVehicles] = useState([]);
  const [statistics, setStatistics] = useState([]);
  const [garageApi] = useState(new GarageApi(token));
  const [vehicleApi] = useState(new VehicleApi(token));

  useEffect(() => {
    async function getData() {
      const response = await garageApi.getLatestUpdated(token);

      setVehicles(response.data);
    }

    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await vehicleApi.getStatistics(token);

      setStatistics(response.data);
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
      <DefaultLineChart
        data={statistics}
        chartKey="value"
        description="Veiculos"
      />
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
                { text: vehicle.status == "INSIDE" ? "Entrou" : "Saiu" },
                {
                  text:
                    vehicle.status == "INSIDE"
                      ? new Date(vehicle.entryTime).toLocaleString("pt-BR")
                      : new Date(vehicle.departureTime).toLocaleString("pt-BR"),
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
