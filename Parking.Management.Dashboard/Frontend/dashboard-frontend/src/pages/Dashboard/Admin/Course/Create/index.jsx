import React, { useRef, useState } from "react";
import "./index.css";
import { Layout } from "../../../../components/layout/Default";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CollegeApi } from "../../../../api";
import { showNotification } from "../../../../global/notifications";
import { useNavigate } from "react-router-dom";

const CreateCollege = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [collegeApi] = useState(new CollegeApi());

  const formInitalState = {
    name: "",
    address: "",
    city: "",
    campus: "",
  };

  const [addFormData, setAddFormData] = useState(formInitalState);

  async function handleAddFormChange(event) {
    event.preventDefault();

    const fieldNome = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldNome] = fieldValue;

    await setAddFormData(newFormData);
  }

  async function handleReturn(event) {
    event.preventDefault();
    navigate("/dashboard/admin/college");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await collegeApi.create(addFormData, token);

    if (response.type == "success") {
      formRef.current.reset();
      setAddFormData(formInitalState);
    }

    showNotification(response.type, response.message);
  }

  return (
    <Layout>
      <Form className="background-form" ref={formRef} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGroupName">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              name="name"
              className="form-item"
              type="text"
              placeholder="Digite o nome da universidade"
              required
              onChange={handleAddFormChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupCampus">
            <Form.Label>Campus</Form.Label>
            <Form.Control
              name="campus"
              className="form-item"
              type="text"
              placeholder="Digite o campus"
              required
              onChange={handleAddFormChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGroupAddress">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              name="address"
              className="form-item"
              type="text"
              placeholder="Digite o endereço sa universidade"
              required
              onChange={handleAddFormChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              name="city"
              className="form-item"
              type="text"
              placeholder="Digite a cidade da universidade"
              required
              onChange={handleAddFormChange}
            />
          </Form.Group>
        </Row>

        <div className="d-grid gap-2">
          <Button variant="dark" type="submit">
            Finalizar Cadastro
          </Button>
          <Button variant="outline-dark" onClick={handleReturn}>
            Voltar
          </Button>
        </div>
      </Form>
    </Layout>
  );
};

export default CreateCollege;
