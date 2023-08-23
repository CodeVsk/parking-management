import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/sidebar-user.css"
import Nav from "react-bootstrap/Nav";
import { ImHome } from "react-icons/im";

const SidebarUser = () => {
    return (
            <Nav defaultActiveKey="/page1" className="flex-column">
                <Nav.Item>
                    <h1 className="title">Usuário</h1>
                </Nav.Item>
                <Nav.Link href="/page1">
                    <ImHome className="icon-custom"/>
                    Page 1
                </Nav.Link>
                <Nav.Link href="/page2">
                    <ImHome className="icon-custom"/>
                    Page 2
                </Nav.Link>
                <Nav.Link href="/page3">
                <ImHome className="icon-custom"/>
                    Page 3
                </Nav.Link>
                <Nav.Link href="/login">
                    Fazer Logout
                </Nav.Link>
            </Nav>
    )
}

export default SidebarUser