import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import SidebarAdmin from "../../components/sidebar-admin";
import "../../style/cadastro-user.css"

const CadastroUser = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="col-custom" md={2}>
                    <SidebarAdmin />
                </Col>
                <Col className="main">
                    <Form>
                        
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CadastroUser