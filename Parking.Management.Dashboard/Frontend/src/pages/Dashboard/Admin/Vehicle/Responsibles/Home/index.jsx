import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Layout } from "../../../../../../components/layout/Default";
import Toolbar from "../../../../../../components/section/Toolbar";
import { useNavigate, useParams } from "react-router-dom";
import ModalCustom from "../../../../../../components/common/Modal";
import { showNotification } from "../../../../../../global/notifications";
import { VehicleResponsibleApi } from "../../../../../../api/vehicleResponsibleApi";

const HomeResponsibleVehicleAdmin = () => {
  const { id } = useParams();
  const modalRef = useRef(null);
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [vehicleResponsibleApi] = useState(new VehicleResponsibleApi());
  const [responsibles, setResponsible] = useState([]);
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();

  const getResponsibles = async () => {
    const response = token && (await vehicleResponsibleApi.getById(id, token));

    setResponsible(response.data);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        await getResponsibles();
      } catch (e) {
        console.error("Erro ao trazer responsáveis cadastrados");
      }
    };

    getData();
  }, []);

  const showModalDelete = async (id) => {
    modalRef.current.handleShow(id);
  };

  const handleDelete = async (id) => {
    const response = await vehicleResponsibleApi.delete(id, token);
    if (response.statusCode == 200 && response.data != null) {
      showNotification(
        "success",
        "Responsável pelo veiculo foi removido com sucesso."
      );
      await getResponsibles();

      return;
    }

    showNotification("error", "Ocorreu um erro ao remover o usuário.");
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const getResponsible = () => {
    if (search && search != "") {
      return responsibles.filter(
        (x) =>
          x.user.name.toLowerCase().includes(search?.toLowerCase()) ||
          x.user.enrollment.toLowerCase().includes(search?.toLowerCase())
      );
    }

    return responsibles;
  };

  return (
    <Layout>
      <div className="vehicle-wrapper">
        <div className="vehicle-container">
          <Toolbar
            onSearchCallback={handleSearch}
            placeholder="Digite o nome ou a matricula do responsável"
            to={`/dashboard/admin/vehicle/responsibles/create/${id}`}
            title="Cadastrar"
          />
          <table className="table mb-0">
            <thead>
              <tr>
                <th scope="col">Responsável</th>
                <th scope="col">Matricula</th>
                <th scope="col">Veiculo</th>
                <th scope="col">Placa</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {getResponsible().map((responsible) => (
                <tr key={responsible.id}>
                  <td>{responsible.user.name}</td>
                  <td>{responsible.user.enrollment}</td>
                  <td>{responsible.vehicle.model}</td>
                  <td>{responsible.vehicle.plate}</td>
                  <td className="table-action">
                    <i
                      className="bi bi-trash"
                      onClick={() => showModalDelete(responsible.id)}
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
        title="Excluir responsável"
        description="Você realmente deseja excluir este responsável?"
      />
    </Layout>
  );
};

export default HomeResponsibleVehicleAdmin;
