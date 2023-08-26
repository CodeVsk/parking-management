import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";
import SidebarAdmin from "../../section/SidebarAdmin";

export function LayoutAdmin(props) {
  return (
    <>
      <Container fluid>
        <Row data-bs-theme="dark">
          <Col className="col-1 p-0" data-bs-theme="dark" md={2}>
            <SidebarAdmin />
          </Col>
          <Col>{props.children}</Col>
        </Row>
      </Container>
    </>
  );
}
