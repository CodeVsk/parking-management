import React, { useEffect, useState } from "react";
import "./index.css";
import { Layout } from "../../../../../components/layout/Default";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CollegeApi, CourseApi } from "../../../../../api";
import { showNotification } from "../../../../../global/notifications";
import { useNavigate, useParams } from "react-router-dom";

const EditCourseAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [courseApi] = useState(new CourseApi());
  const [collegeApi] = useState(new CollegeApi());
  const [colleges, setColleges] = useState([]);

  const formInitalState = {
    name: "",
    collegeId: "",
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
    navigate("/dashboard/admin/course");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await courseApi.update(editFormData, token);

    showNotification(response.type, response.message);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = token && (await courseApi.getById(id, token));

        setEditFormData(response.data);
      } catch (e) {
        showNotification("error", "Erro ao trazer dados do curso");
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = token && (await collegeApi.getAll(token));

        setColleges(response.data);
      } catch (e) {
        showNotification("error", "Erro ao trazer universidades cadastradas");
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
          <Form.Group as={Col} controlId="formGroupCollege">
            <Form.Label>Universidade</Form.Label>
            <Form.Select
              name="collegeId"
              className="form-item"
              required
              value={editFormData.collegeId}
              onChange={handleEditFormChange}
            >
              <option key="null" value="null">
                Selecione uma universidade
              </option>
              {colleges.map((v, i) => (
                <option key={i} value={v.id}>
                  {v.name} | {v.campus}
                </option>
              ))}
            </Form.Select>
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

export default EditCourseAdmin;
