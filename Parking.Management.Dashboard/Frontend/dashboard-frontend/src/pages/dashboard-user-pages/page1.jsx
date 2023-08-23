import React from "react"
import styles from "../../style/page1.css"
import SidebarUser from "../../components/sidebar-user"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Page1 = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="col-custom" md={2}>
                    <SidebarUser />
                </Col>
                <Col>  
                    teste
                </Col>
            </Row>
        </Container>
    )
}

export default Page1