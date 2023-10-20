import React, { useRef, useState } from "react";
import "./index.css";
import { Layout } from "../../../../../../components/layout/Default";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { showNotification } from "../../../../../../global/notifications";
import { useNavigate, useParams } from "react-router-dom";
import { VehicleNoteApi } from "../../../../../../api/vehicleNoteApi";

const CreateVehicleNoteAdmin = () => {
  const { id } = useParams();
  const formRef = useRef();
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [vehicleNoteApi] = useState(new VehicleNoteApi());

  const formInitalState = {
    description: "",
    vehicleId: id,
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
    navigate(`/dashboard/admin/vehicle/notes/${id}`);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await vehicleNoteApi.create(addFormData, token);

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
          <Form.Label>Insira a anotação/observação desejada:</Form.Label>
          <Form.Control
            name="description"
            as="textarea"
            aria-label="With textarea"
            rows={8}
            onChange={handleAddFormChange}
          />
        </Row>

        <div className="d-grid gap-2">
          <Button variant="dark" type="submit">
            Concluir
          </Button>
          <Button variant="outline-dark" onClick={handleReturn}>
            Voltar
          </Button>
        </div>
      </Form>
    </Layout>
  );
};

export default CreateVehicleNoteAdmin;
