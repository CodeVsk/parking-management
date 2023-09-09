import React, { useEffect, useState } from "react";
import "./index.css";
import { Layout } from "../../../components/layout/Default";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import genders from "../../../data/genders.json";
import permissions from "../../../data/permissions.json";
import roles from "../../../data/roles.json";
import { CollegeApi, CourseApi, UserApi } from "../../../api";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../../global/notifications";
import { useNavigate, useParams } from "react-router-dom";
import { dateFormat } from "../../../global/date-format";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [collegeApi] = useState(new CollegeApi());
  const [courseApi] = useState(new CourseApi());
  const [userApi] = useState(new UserApi());

  const [courses, setCourses] = useState([]);
  const [colleges, setColleges] = useState([]);

  const formInitalState = {
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    rg: "",
    cpf: "",
    gender: "",
    city: "",
    state: "",
    enrollment: "",
    status: true,
    collegeId: "",
    birthdate: "",
    role: "",
    permissions: "",
    courseId: "",
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
    navigate("/dashboard/admin/user");
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = token && (await courseApi.getAll(token));

        setCourses(response.data);
      } catch (e) {
        console.error("Erro ao trazer cursos cadastrados");
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
        console.error("Erro ao trazer universidades cadastradas");
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = token && (await userApi.getById(id, token));

        setEditFormData(response.data);
      } catch (e) {
        console.error("Erro ao trazer dados do usuário");
      }
    };

    getData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await userApi.updateUser(editFormData, token);

    if (response.type == "success") {
      showSuccessNotification(response.message);
    } else {
      showErrorNotification(response.message);
    }
  }

  return (
    <Layout>
      <Form className="background-form" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              className="form-item"
              type="email"
              placeholder="Digite seu email"
              value={editFormData.email}
              required
              onChange={handleEditFormChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              name="password"
              className="form-item"
              type="password"
              placeholder="Digite sua Senha"
              value="###########"
              disabled
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Nome completo</Form.Label>
          <Form.Control
            name="name"
            className="form-item"
            type="text"
            placeholder="Digite seu Nome completo"
            value={editFormData.name}
            required
            onChange={handleEditFormChange}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGroupRG">
            <Form.Label>RG</Form.Label>
            <Form.Control
              name="rg"
              className="form-item"
              type="text"
              placeholder="Digite seu RG"
              value={editFormData.rg}
              required
              onChange={handleEditFormChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupCPF">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              name="cpf"
              className="form-item"
              type="text"
              placeholder="Digite seu CPF"
              value={editFormData.cpf}
              required
              onChange={handleEditFormChange}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGroupPhone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            name="phone"
            className="form-item"
            type="text"
            placeholder="Digite seu Número de Telefone"
            value={editFormData.phone}
            required
            onChange={handleEditFormChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupAddress">
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            name="address"
            className="form-item"
            type="text"
            placeholder="Digite seu Endereço"
            value={editFormData.address}
            required
            onChange={handleEditFormChange}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGroupState">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              name="state"
              className="form-item"
              type="text"
              placeholder="Digite o estado"
              value={editFormData.state}
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
              placeholder="Digite a cidade"
              value={editFormData.city}
              required
              onChange={handleEditFormChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGroupRole">
            <Form.Label>Tipo</Form.Label>
            <Form.Select
              name="role"
              className="form-item"
              value={editFormData.role}
              required
              onChange={handleEditFormChange}
            >
              {roles.map((v, i) => (
                <option key={i} value={v.value}>
                  {v.description}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGrouPermission">
            <Form.Label>Permissão</Form.Label>
            <Form.Select
              name="permissions"
              className="form-item"
              value={editFormData.permissions}
              required
              onChange={handleEditFormChange}
            >
              {permissions.map((v, i) => (
                <option key={i} value={v.value}>
                  {v.description}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGroupGender">
          <Form.Label>Gênero</Form.Label>
          <Form.Select
            name="gender"
            className="form-item"
            value={editFormData.gender}
            required
            onChange={handleEditFormChange}
          >
            {genders.map((v, i) => (
              <option key={i} value={v.value}>
                {v.description}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGroupCourse">
            <Form.Label>Curso</Form.Label>
            <Form.Select
              name="courseId"
              className="form-item"
              value={editFormData.courseId}
              required
              onChange={handleEditFormChange}
            >
              {courses.map((v, i) => (
                <option key={i} value={v.id}>
                  {v.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupCollege">
            <Form.Label>Universidade</Form.Label>
            <Form.Select
              name="collegeId"
              className="form-item"
              value={editFormData.collegeId}
              required
              onChange={handleEditFormChange}
            >
              <option value="null">Selecione uma universidade</option>
              {colleges.map((v, i) => (
                <option key={i} value={v.id}>
                  {v.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-4" controlId="formGroupBirthdate">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            name="birthdate"
            className="form-item"
            type="date"
            value={dateFormat(editFormData.birthdate)}
            required
            onChange={handleEditFormChange}
          />
        </Form.Group>

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

export default EditUser;
