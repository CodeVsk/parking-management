import React, { useEffect, useState } from "react";
import "./index.css";
import { Layout } from "../../../../../components/layout/Default";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import vehicleType from "../../../../../data/vehicle-type.json";
import vehicleColor from "../../../../../data/vehicle-colors.json";
import vehicleBrand from "../../../../../data/vehicle-brand.json";
import { CollegeApi, VehicleApi } from "../../../../../api";
import { showNotification } from "../../../../../global/notifications";
import { useNavigate, useParams } from "react-router-dom";

const EditVehicleUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [collegeApi] = useState(new CollegeApi());
  const [vehicleApi] = useState(new VehicleApi());

  const [colleges, setColleges] = useState([]);

  const formInitalState = {
    model: "",
    type: "",
    plate: "",
    color: "",
    brand: "",
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
    navigate("/dashboard/user/vehicle");
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = token && (await vehicleApi.getById(id, token));

        setEditFormData(response.data);
      } catch (e) {
        console.error("Erro ao trazer dados do usuário");
      }
    };

    getData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await vehicleApi.updateByToken(editFormData, token);

    showNotification(response.type, response.message);
  }

  return (
    <Layout>
      <Form className="background-form" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGroupModel">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              name="model"
              className="form-item"
              type="text"
              placeholder="Digite o modelo do veiculo (ex: HB20)"
              required
              onChange={handleEditFormChange}
              value={editFormData.model}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupType">
            <Form.Label>Tipo</Form.Label>
            <Form.Select
              name="type"
              className="form-item"
              required
              onChange={handleEditFormChange}
              value={editFormData.type}
            >
              {vehicleType.map((v, i) => (
                <option key={i} value={v.value}>
                  {v.description}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGroupPlate">
            <Form.Label>Placa</Form.Label>
            <Form.Control
              name="plate"
              className="form-item"
              type="text"
              placeholder="Digite a placa do veiculo"
              required
              onChange={handleEditFormChange}
              value={editFormData.plate}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupColor">
            <Form.Label>Cor</Form.Label>
            <Form.Select
              name="color"
              className="form-item"
              required
              onChange={handleEditFormChange}
              value={editFormData.color}
            >
              {vehicleColor.map((v, i) => (
                <option key={i} value={v.value}>
                  {v.description}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGroupBrand">
            <Form.Label>Marca</Form.Label>
            <Form.Select
              name="brand"
              className="form-item"
              required
              onChange={handleEditFormChange}
              value={editFormData.brand}
            >
              <option key="null" value="null">
                Selecione a marca
              </option>
              {vehicleBrand.map((v, i) => (
                <option key={i} value={v.value}>
                  {v.description}
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

export default EditVehicleUser;
