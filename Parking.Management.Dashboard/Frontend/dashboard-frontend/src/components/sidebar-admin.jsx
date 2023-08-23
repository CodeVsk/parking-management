import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/sidebar-user.css"
import Nav from "react-bootstrap/Nav";
import { ImHome } from "react-icons/im";

const SidebarAdmin = () => {
    return (
            <Nav defaultActiveKey="/cadastro-user" className="flex-column">
                <Nav.Item>
                    <h1 className="title">Admin</h1>
                </Nav.Item>
                <Nav.Link href="/cadastro-user">
                    <ImHome className="icon-custom"/>
                    Cadastrar Usuário
                </Nav.Link>
                <Nav.Link href="/cadastro-carro">
                    <ImHome className="icon-custom"/>
                    Cadastrar Carro
                </Nav.Link>
                <Nav.Link href="/login">
                    Fazer Logout
                </Nav.Link>
            </Nav>
    )
}

export default SidebarAdmin