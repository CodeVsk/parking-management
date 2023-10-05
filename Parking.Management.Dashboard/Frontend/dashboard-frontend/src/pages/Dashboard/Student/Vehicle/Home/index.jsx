import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Layout } from "../../../../../components/layout/Default";
import Toolbar from "../../../../../components/section/Toolbar";
import { VehicleApi } from "../../../../../api/vehicleApi";
import { useNavigate } from "react-router-dom";
import ModalCustom from "../../../../../components/common/Modal";
import { showNotification } from "../../../../../global/notifications";

const HomeVehicleUser = () => {
  const modalRef = useRef(null);
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [vehicleApi] = useState(new VehicleApi());
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();

  const getAllVehicles = async () => {
    const response = await vehicleApi.getByToken(token);
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

  const handleAddResponsible = (id) => {
    navigate(`/dashboard/admin/vehicle/responsibles/${id}`);
  };

  const handleViewNotes = (id) => {
    navigate(`/dashboard/admin/vehicle/notes/${id}`);
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
          x.plate.toLowerCase().includes(search?.toLowerCase()) ||
          x.user.enrollment.toLowerCase().includes(search?.toLowerCase())
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
            placeholder="Digite a placa do veiculo ou a matricula do responsável"
            to="/dashboard/user/vehicle/create"
            title="Cadastrar"
          />
          <table className="table mb-0">
            <thead>
              <tr>
                <th scope="col">Modelo</th>
                <th scope="col">Placa</th>
                <th scope="col">Responsável</th>
                <th scope="col">Campus</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {getVehicles().map((vehicle) => (
                <tr key={vehicle.id}>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.plate}</td>
                  <td>
                    ({vehicle?.user?.enrollment}) {vehicle?.user?.name}
                  </td>
                  <td>{vehicle?.college?.campus}</td>
                  <td className="table-action">
                    <i
                      className="bi bi-pencil-square"
                      onClick={() => handleEditVehicle(vehicle.id)}
                    ></i>
                    <i
                      className="bi bi-people-fill"
                      onClick={() => handleAddResponsible(vehicle.id)}
                    ></i>
                    <i
                      className="bi bi-stickies-fill"
                      onClick={() => handleViewNotes(vehicle.id)}
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
        title="Excluir veiculo"
        description="Você realmente deseja excluir este veiculo?"
      />
    </Layout>
  );
};

export default HomeVehicleUser;
