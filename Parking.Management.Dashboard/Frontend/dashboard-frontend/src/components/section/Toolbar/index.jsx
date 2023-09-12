import React, { useRef } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Input from "../../common/Input";
import ButtonLink from "../../common/ButtonLink";

const Toolbar = (props) => {
  const handleSearch = (event) => {
    props.onSearchCallback(event.target.value);
  };

  return (
    <div className="toolbar-wrapper">
      <div className="toolbar-container">
        <Input
          onChange={handleSearch}
          name="search"
          placeholder={props.placeholder}
          className="custom-input"
        />
        <ButtonLink name="Cadastrar" className="mw-400" to={props.to} />
      </div>
    </div>
  );
};

export default Toolbar;
