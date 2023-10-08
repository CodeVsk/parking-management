import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Layout } from "../../../../../components/layout/Default";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CollegeApi } from "../../../../../api";
import { showNotification } from "../../../../../global/notifications";
import { useNavigate } from "react-router-dom";
import { CourseApi } from "../../../../../api";

const CreateCourseAdmin = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [colleges, setColleges] = useState([]);
  const [collegeApi] = useState(new CollegeApi());
  const [courseApi] = useState(new CourseApi());

  const formInitalState = {
    name: "",
    collegeId: "",
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
    navigate("/dashboard/admin/course");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await courseApi.create(addFormData, token);

    if (response.type == "success") {
      formRef.current.reset();
      setAddFormData(formInitalState);
    }

    showNotification(response.type, response.message);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = token && (await collegeApi.getAll(token));

        setColleges(response.data);
      } catch (e) {
        console.error("Erro ao trazer universidades cadastrados");
      }
    };
    getData();
  }, []);

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
              placeholder="Digite o nome do curso"
              required
              onChange={handleAddFormChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupCollege">
            <Form.Label>Universidade</Form.Label>
            <Form.Select
              name="collegeId"
              className="form-item"
              required
              onChange={handleAddFormChange}
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

export default CreateCourseAdmin;
