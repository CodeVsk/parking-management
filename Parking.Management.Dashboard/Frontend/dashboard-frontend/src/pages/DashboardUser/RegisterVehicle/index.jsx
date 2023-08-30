import React from "react";
import "./index.css";
import { Layout } from "../../../components/layout/Default";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const RegisterVehicleUser = () => {
  return (
    <Layout>
      <Form className="background-form">
        <Form.Group className="mb-3" controlId="formGroupModel">
          <Form.Label>Modelo do Veículo</Form.Label>
          <Form.Control
            className="form-item"
            type="text"
            placeholder="Digite o modelo do seu veículo"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupType">
          <Form.Label>Tipo do Veículo</Form.Label>
          <Form.Select className="form-item">
            <option value="Car">Carro</option>
            <option value="Motorcycle">Moto</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formGroupPlate">
          <Form.Label>Placa do Veículo</Form.Label>
          <Form.Control
            className="form-item"
            type="text"
            placeholder="Digite a Placa do seu veículo"
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="outline-light" type="submit">
            Finalizar Cadastro
          </Button>
        </div>
      </Form>
    </Layout>
  );
};

export default RegisterVehicleUser;
