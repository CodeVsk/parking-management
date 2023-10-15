import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Layout } from "../../../../../../components/layout/Default";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { UserApi } from "../../../../../../api";
import { showNotification } from "../../../../../../global/notifications";
import { useNavigate, useParams } from "react-router-dom";
import Select from "../../../../../../components/common/Select";
import { VehicleResponsibleApi } from "../../../../../../api/vehicleResponsibleApi";
import Search from "../../../../../../components/common/Search";

const CreateResponsibleVehicleUser = () => {
  const { id } = useParams();
  const formRef = useRef();
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [vehicleResponsibleApi] = useState(new VehicleResponsibleApi());
  const [userApi] = useState(new UserApi());

  const [users, setUsers] = useState([]);

  const formInitalState = {
    enrollment: "",
    vehicleId: id,
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
    navigate(`/dashboard/user/vehicle/responsibles/${id}`);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await vehicleResponsibleApi.createByToken(
      addFormData,
      token
    );

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
          <Search
            name="enrollment"
            placeholder="Digite a matricula do usuário"
            title="Responsável pelo veículo"
            onCallback={handleAddFormChange}
          />
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

export default CreateResponsibleVehicleUser;
