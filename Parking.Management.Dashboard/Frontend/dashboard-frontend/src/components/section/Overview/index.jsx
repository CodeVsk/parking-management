import "./index.css";
import Card from "../Card";
import CardStatistics from "../CardStatistics";

const Overview = () => {
  return (
    <div id="overview-wrapper">
      <div className="overview-header">
        <span className="overview-title">Visão Geral</span>
      </div>
      <div className="overview-content">
        <span className="overview-description">Dados Atuais</span>
        <Card
          title="Usuários cadastrados"
          description="100 novos cadastrados este mês"
          counter={100}
        />

        <span className="overview-description">Garagem</span>
        <CardStatistics
          title="Veiculos"
          information="Carros no estacionamento atualmente"
          description="Última atualização - 21:33"
          counter={100}
        />
      </div>
    </div>
  );
};

export default Overview;
