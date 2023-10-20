import "bootstrap/dist/css/bootstrap.min.css";
import StockChart from "../../../assets/images/stock-chart.svg";
import "./index.css";
import CountUp from "react-countup";

const CardStatistics = ({ title, description, information, counter }) => {
  return (
    <div id="card-statistic-wrapper">
      <div className="card-statistic-header">
        <span className="card-statistic-title">{title}</span>
        <p className="card-statistic-description">{description}</p>
      </div>
      <div className="card-statistic-content">
        <CountUp end={counter} className="card-statistic-counter" />
        <p className="card-statistic-information"> / {information}</p>
      </div>
    </div>
  );
};

export default CardStatistics;
