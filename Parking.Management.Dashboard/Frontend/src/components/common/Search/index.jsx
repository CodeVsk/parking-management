import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";
import { useState } from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    props.onCallback(e);
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
        required
      />
    </Form.Group>
  );
};

export default Search;
