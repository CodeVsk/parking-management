import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Nav from "react-bootstrap/Nav";

const SidebarAdmin = () => {
  return (
    <Nav className="flex-column">
      <Nav.Item className="align-self-center">
        <img
          width="150"
          height="150"
          src="/logo-unip.svg"
          alt="Universidade Paulista - Parking Management"
        />
      </Nav.Item>
      <Link to="/dashboard/admin" className="navbar-item">
        <ImHome className="icon-custom" />
        Inicio
      </Link>
      <Link to="/dashboard/admin/register/vehicle" className="navbar-item">
        <AiFillCar className="icon-custom" />
        Cadastrar Veiculo
      </Link>
      <Link to="/dashboard/admin/register/user" className="navbar-item">
        <ImUserPlus className="icon-custom" />
        Cadastrar Usuário
      </Link>
      <Link to="#" className="navbar-item">
        <BiLogOut className="icon-custom" />
        Logout
      </Link>
    </Nav>
  );
};

export default SidebarAdmin;
