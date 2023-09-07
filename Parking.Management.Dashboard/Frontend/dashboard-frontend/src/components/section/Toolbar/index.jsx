import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Input from "../../common/Input";

const Toolbar = () => {
  return (
    <div className="toolbar-wrapper">
      <div className="toolbar-container">
        <Input
          name="search"
          placeholder="Digite o nome ou a matricula do aluno"
          className="custom-input"
        />
        <Button name="Cadastrar" className="mw-400" />
      </div>
    </div>
  );
};

export default Toolbar;
