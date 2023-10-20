import "bootstrap/dist/css/bootstrap.min.css";
import StockChart from "../../../assets/images/stock-chart.svg";
import "./index.css";
import CountUp from "react-countup";

const Card = ({ title, description, counter }) => {
  return (
    <div id="card-wrapper">
      <div className="card-header">
        <span className="card-title">{title}</span>
        <p className="card-description">{description}</p>
      </div>
      <CountUp end={counter} className="card-counter" />
    </div>
  );
};

export default Card;
