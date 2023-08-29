import React from "react";
import "./index.css";
import { Layout } from "../../../components/layout/Default";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const RegisterUser = () => {
  return (
    <Layout>
      <Form className="background-form">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="form-item"
              type="email"
              placeholder="Digite seu email"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              className="form-item"
              type="password"
              placeholder="Digite sua Senha"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Nome completo</Form.Label>
          <Form.Control
            className="form-item"
            type="text"
            placeholder="Digite seu Nome completo"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGroupRG">
            <Form.Label>RG</Form.Label>
            <Form.Control
              className="form-item"
              type="text"
              placeholder="Digite seu RG"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupCPF">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              className="form-item"
              type="text"
              placeholder="Digite seu CPF"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGroupPhone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            className="form-item"
            type="text"
            placeholder="Digite seu Número de Telefone"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupAddress">
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            className="form-item"
            type="text"
            placeholder="Digite seu Endereço"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupGender">
          <Form.Label>Gênero</Form.Label>
          <Form.Select className="form-item">
            <option value="Male">Masculino</option>
            <option value="Female">Feminino</option>
            <option value="Other">Outro</option>
            <option value="None">Prefiro não dizer</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupCourse">
          <Form.Label>Curso</Form.Label>
          <Form.Control
            className="form-item"
            type="text"
            placeholder="Digite seu Curso"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formGroupBirthdate">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control className="form-item" type="date" />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="outline-light" type="submit">Finalizar Cadastro</Button>
        </div>
      </Form>
    </Layout>
  );
};

export default RegisterUser;
