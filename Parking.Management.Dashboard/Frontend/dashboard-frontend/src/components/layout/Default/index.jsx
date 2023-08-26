import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SidebarUser from "../../section/SidebarUser";
import "./index.css";

export function Layout(props) {
  return (
    <>
      <Container fluid>
        <Row data-bs-theme="dark">
          <Col className="col-1 p-0" data-bs-theme="dark" md={2}>
            <SidebarUser />
          </Col>
          <Col>{props.children}</Col>
        </Row>
      </Container>
    </>
  );
}
