import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Input from "../../common/Input";
import ButtonLink from "../../common/ButtonLink";

const Toolbar = () => {
  return (
    <div className="toolbar-wrapper">
      <div className="toolbar-container">
        <Input
          name="search"
          placeholder="Digite o nome ou a matricula do aluno"
          className="custom-input"
        />
        <ButtonLink
          name="Cadastrar"
          className="mw-400"
          to="/dashboard/admin/user/register"
        />
      </div>
    </div>
  );
};

export default Toolbar;
