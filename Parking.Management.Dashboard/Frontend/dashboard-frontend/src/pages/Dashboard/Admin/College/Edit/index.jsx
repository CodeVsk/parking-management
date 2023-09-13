import React, { useEffect, useState } from "react";
import "./index.css";
import { Layout } from "../../../../../components/layout/Default";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CollegeApi } from "../../../../../api";
import { showNotification } from "../../../../../global/notifications";
import { useNavigate, useParams } from "react-router-dom";

const EditCollege = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [collegeApi] = useState(new CollegeApi());

  const formInitalState = {
    name: "",
    address: "",
    city: "",
    campus: "",
  };

  const [editFormData, setEditFormData] = useState(formInitalState);

  async function handleEditFormChange(event) {
    event.preventDefault();

    const fieldNome = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldNome] = fieldValue;

    await setEditFormData(newFormData);
  }

  async function handleReturn(event) {
    event.preventDefault();
    navigate("/dashboard/admin/college");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await collegeApi.update(editFormData, token);

    showNotification(response.type, response.message);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = token && (await collegeApi.getById(id, token));

        setEditFormData(response.data);
      } catch (e) {
        showNotification("error", "Erro ao trazer dados da universidade");
      }
    };

    getData();
  }, []);

  return (
    <Layout>
      <Form className="background-form" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGroupName">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              name="name"
              className="form-item"
              type="text"
              placeholder="Digite o nome da universidade"
              value={editFormData.name}
              required
              onChange={handleEditFormChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupCampus">
            <Form.Label>Campus</Form.Label>
            <Form.Control
              name="campus"
              className="form-item"
              type="text"
              placeholder="Digite o campus da universidade"
              value={editFormData.campus}
              disabled
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
              placeholder="Digite o endereço da universidade"
              value={editFormData.address}
              required
              onChange={handleEditFormChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              name="city"
              className="form-item"
              type="text"
              placeholder="Digite a cidade da universidade"
              value={editFormData.city}
              required
              onChange={handleEditFormChange}
            />
          </Form.Group>
        </Row>

        <div className="d-grid gap-2">
          <Button variant="dark" type="submit">
            Concluir Edição
          </Button>
          <Button variant="outline-dark" onClick={handleReturn}>
            Voltar
          </Button>
        </div>
      </Form>
    </Layout>
  );
};

export default EditCollege;
