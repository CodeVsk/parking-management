import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Layout } from "../../../../../components/layout/Default";
import Toolbar from "../../../../../components/section/Toolbar";
import { VehicleApi } from "../../../../../api/vehicleApi";
import { useNavigate } from "react-router-dom";
import ModalCustom from "../../../../../components/common/Modal";
import { showNotification } from "../../../../../global/notifications";

const HomeVehicleAdmin = () => {
  const modalRef = useRef(null);
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [vehicleApi] = useState(new VehicleApi());
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();

  const getAllVehicles = async () => {
    const response = await vehicleApi.getAll(token);
    setVehicles(response.data);
  };

  useEffect(() => {
    async function fetchGetAll() {
      await getAllVehicles();
    }

    fetchGetAll();
  }, []);

  const handleEditVehicle = (id) => {
    navigate(`/dashboard/admin/vehicle/edit/${id}`);
  };

  const showModalDelete = async (id) => {
    modalRef.current.handleShow(id);
  };

  const handleDelete = async (id) => {
    const response = await vehicleApi.delete(id, token);
    if (response.statusCode == 200 && response.data != null) {
      showNotification("success", "Veiculo foi removido com sucesso.");
      await getAllVehicles();

      return;
    }

    showNotification("error", "Ocorreu um erro ao remover o usuário.");
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const getVehicles = () => {
    if (search && search != "") {
      return vehicles.filter(
        (x) =>
          x.name.toLowerCase().includes(search?.toLowerCase()) ||
          x.enrollment.toLowerCase().includes(search?.toLowerCase())
      );
    }

    return vehicles;
  };

  return (
    <Layout>
      <div className="vehicle-wrapper">
        <div className="vehicle-container">
          <Toolbar
            onSearchCallback={handleSearch}
            placeholder="Digite o nome ou a matricula do aluno"
            to="/dashboard/admin/vehicle/register"
          />
          <table className="table mb-0">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Matricula</th>
                <th scope="col">Status</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {getVehicles().map((vehicle) => (
                <tr key={vehicle.id}>
                  <td>{vehicle.name}</td>
                  <td>{vehicle.enrollment}</td>
                  <td>{vehicle.status ? "Ativo" : "Desativado"}</td>
                  <td className="table-action">
                    <i
                      className="bi bi-pencil-square"
                      onClick={() => handleEditVehicle(vehicle.id)}
                    ></i>
                    <i
                      className="bi bi-trash"
                      onClick={() => showModalDelete(vehicle.id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ModalCustom
        ref={modalRef}
        onCallback={handleDelete}
        title="Excluir usuário"
        description="Você realmente deseja excluir este usuário?"
      />
    </Layout>
  );
};

export default HomeVehicleAdmin;
