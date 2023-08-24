import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import SidebarAdmin from "../../components/sidebar-admin";
import "../../style/cadastro-user.css"
import Button from "react-bootstrap/Button";

const CadastroUser = () => {
    return (
        <Container className="main-container" fluid>
            <Row>
                <Col className="col-custom">
                    <SidebarAdmin />
                </Col>
                <Col className="main">
                    <Form className="form">
                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className="form-input" type="email" placeholder="Digite seu email" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control className="form-input" type="password" placeholder="Digite sua senha" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formGroupName">
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control className="form-input" placeholder="Digite seu nome completo" />
                        </Form.Group>
                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="formGroupRG">
                                <Form.Label>RG</Form.Label>
                                <Form.Control className="form-input" placeholder="Digite seu RG" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" controlId="formGroupCPF">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control className="form-input" placeholder="Digite seu CPF" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formGroupPhone">
                            <Form.Label>Número de Telefone</Form.Label>
                            <Form.Control className="form-input" placeholder="(xx) xxxxx-xxxx" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupBirthdate">
                            <Form.Label>Data de Nascimento</Form.Label>
                            <Form.Control className="form-input" type="date" />
                        </Form.Group>
                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="formGroupRA">
                                <Form.Label>RA</Form.Label>
                                <Form.Control className="form-input" type="number" placeholder="Digite seu RA" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" controlId="formGroupCourse">
                                <Form.Label>Curso</Form.Label>
                                <Form.Control className="form-input" placeholder="Digite seu Curso" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formGroupAddress">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control className="form-input" placeholder="Digite seu endereço" />
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" id="formGroupCheckbox">
                            <Form.Label>Gênero</Form.Label>
                            <Col>
                                <Form.Check type="radio" name="Gender" id="Male" label="Masculino" />
                            </Col>
                            <Col>
                                <Form.Check type="radio" name="Gender" id="Female" label="Feminino" />
                            </Col>
                            <Col>
                                <Form.Check type="radio" name="Gender" id="Other" label="Outro" />
                            </Col>
                            <Col>
                                <Form.Check type="radio" name="Gender" id="None" label="Prefiro não dizer" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" id="formGroupRole">
                            <Form.Label>Tipo de Usuário</Form.Label>
                            <Col md={3}>
                                <Form.Check type="radio" name="Role" id="Student" label="Estudante" />
                            </Col>
                            <Col>
                                <Form.Check type="radio" name="Role" id="Employee" label="Funcionário" />
                            </Col>
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="outline-light" type="submit">Confirmar Cadastro</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CadastroUser