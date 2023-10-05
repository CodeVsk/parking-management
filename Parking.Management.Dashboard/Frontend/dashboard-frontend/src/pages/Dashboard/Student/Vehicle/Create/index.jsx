import React, { useRef, useState } from "react";
import "./index.css";
import { Layout } from "../../../../../components/layout/Default";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import vehicleType from "../../../../../data/vehicle-type.json";
import vehicleColor from "../../../../../data/vehicle-colors.json";
import vehicleBrand from "../../../../../data/vehicle-brand.json";
import { VehicleApi } from "../../../../../api";
import { showNotification } from "../../../../../global/notifications";
import { useNavigate } from "react-router-dom";

const CreateVehicleUser = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [vehicleApi] = useState(new VehicleApi());

  const formInitalState = {
    model: "",
    type: "",
    plate: "",
    color: "",
    brand: "",
    userId: "",
    collegeId: "",
  };

  const [addFormData, setAddFormData] = useState(formInitalState);

  async function handleAddFormChange(event) {
    event.preventDefault();

    const fieldNome = event.target.getAttribute("name");
    const fieldValue = event.target.value || event.target.getAttribute("value");

    const newFormData = { ...addFormData };
    newFormData[fieldNome] = fieldValue;

    await setAddFormData(newFormData);
  }

  async function handleReturn(event) {
    event.preventDefault();
    navigate("/dashboard/user/vehicle");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await vehicleApi.createByToken(addFormData, token);

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
          <Form.Group as={Col} controlId="formGroupModel">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              name="model"
              className="form-item"
              type="text"
              placeholder="Digite o modelo do veiculo (ex: HB20)"
              required
              onChange={handleAddFormChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupType">
            <Form.Label>Tipo</Form.Label>
            <Form.Select
              name="type"
              className="form-item"
              required
              onChange={handleAddFormChange}
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
              onChange={handleAddFormChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupColor">
            <Form.Label>Cor</Form.Label>
            <Form.Select
              name="color"
              className="form-item"
              required
              onChange={handleAddFormChange}
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
              onChange={handleAddFormChange}
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

export default CreateVehicleUser;
