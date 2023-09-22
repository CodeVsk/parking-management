import "./index.css";
import Card from "../Card";
import DefaultBarChart from "../BarChart";
import RadialChart from "../RadialChart";
import DefaultLineChart from "../LineChart";
import ListStatistics from "../ListStatistics";

const Statistcs = () => {
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
          <ListStatistics
            title="Matheus Testudo Turolla"
            description="Celta Rosa"
            icon="bi bi-arrow-up-right-square-fill"
            content={[{ text: "Entrou" }, { text: "12:00" }]}
          />
          <ListStatistics
            title="Matheus Testudo Turolla"
            description="Celta Rosa"
            icon="bi bi-arrow-down-left-square-fill"
            content={[{ text: "Saiu" }, { text: "15:00" }]}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistcs;
