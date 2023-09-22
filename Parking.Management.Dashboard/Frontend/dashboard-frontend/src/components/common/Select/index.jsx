import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";
import { useState } from "react";

const Select = (props) => {
  const [show, setShow] = useState(false);

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterUsers = () => {
    return props.data.filter(
      (x) =>
        x.name.toLowerCase().includes(search.toLowerCase()) ||
        x.enrollment.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleChange = (e) => {
    setSearch(e.target.getAttribute("text"));

    handleHidden();

    props.onCallback(e);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleHidden = () => {
    setShow(false);
  };

  return (
    <Form.Group as={Col} controlId="formGroup">
      <Form.Label>{props.title}</Form.Label>
      <Form.Control
        name={props.name}
        className="form-item"
        type="text"
        autoComplete="off"
        placeholder={props.placeholder}
        value={search}
        onChange={handleSearch}
        onFocus={handleShow}
        required
      />
      {show && search.length >= 3 ? (
        <div className="search-list">
          <ul>
            {filterUsers().map((v, i) => (
              <li
                key={i}
                name={props.name}
                text={v.name}
                value={v.id}
                onClick={handleChange}
              >
                {v.enrollment} - {v.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </Form.Group>
  );
};

export default Select;
