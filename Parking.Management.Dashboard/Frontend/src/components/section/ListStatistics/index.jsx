import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const ListStatistics = ({ title, description, content, icon }) => {
  return (
    <div id="list-wrapper">
      <div className="list-header">
        <i className={icon} />
        <div className="list-title">
          <span>{title}</span>
          <p>{description}</p>
        </div>
      </div>
      {content.map((e, i) => (
        <span className="list-content" key={i}>
          {e.text}
        </span>
      ))}
    </div>
  );
};

export default ListStatistics;
