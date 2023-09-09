import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "../../section/Sidebar";
import "./index.css";

export function Layout({ children }) {
  return (
    <>
      <Container fluid>
        <Row data-bs-theme="dark">
          <Col className="l-col-1 p-0" data-bs-theme="dark" md={2}>
            <Sidebar />
          </Col>
          <Col className="l-col-2">{children}</Col>
        </Row>
      </Container>
    </>
  );
}
