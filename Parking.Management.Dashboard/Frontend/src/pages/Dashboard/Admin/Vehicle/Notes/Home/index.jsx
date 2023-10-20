import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Layout } from "../../../../../../components/layout/Default";
import Toolbar from "../../../../../../components/section/Toolbar";
import { useNavigate, useParams } from "react-router-dom";
import ModalCustom from "../../../../../../components/common/Modal";
import { showNotification } from "../../../../../../global/notifications";
import { VehicleResponsibleApi } from "../../../../../../api/vehicleResponsibleApi";
import { VehicleNoteApi } from "../../../../../../api/vehicleNoteApi";

const HomeVehicleNoteAdmin = () => {
  const { id } = useParams();
  const modalRef = useRef(null);
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [vehicleNoteApi] = useState(new VehicleNoteApi());
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();

  const getNotes = async () => {
    const response = token && (await vehicleNoteApi.getById(id, token));

    if (response.data) {
      setNotes(response.data);
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        await getNotes();
      } catch (e) {
        console.error("Erro ao trazer anotações cadastrados");
      }
    };

    getData();
  }, []);

  const showModalDelete = async (id) => {
    modalRef.current.handleShow(id);
  };

  const handleDelete = async (id) => {
    const response = await vehicleNoteApi.delete(id, token);
    if (response.statusCode == 200 && response.data != null) {
      showNotification(
        "success",
        "Anotação do veiculo foi removida com sucesso."
      );
      await getNotes();

      return;
    }

    showNotification("error", "Ocorreu um erro ao remover anotação.");
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const getNote = () => {
    if (search && search != "") {
      return notes.filter(
        (x) =>
          x.user.name.toLowerCase().includes(search?.toLowerCase()) ||
          x.user.enrollment.toLowerCase().includes(search?.toLowerCase())
      );
    }

    return notes;
  };

  return (
    <Layout>
      <div className="vehicle-wrapper">
        <div className="vehicle-container">
          <Toolbar
            onSearchCallback={handleSearch}
            placeholder="Digite uma possivel descrição"
            title="Adicionar"
            to={`/dashboard/admin/vehicle/notes/create/${id}`}
          />
          <table className="table mb-0">
            <thead>
              <tr>
                <th scope="col">Anotações</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {getNote().map((note) => (
                <tr key={note.id}>
                  <td>{note.description}</td>
                  <td className="table-action">
                    <i
                      className="bi bi-trash"
                      onClick={() => showModalDelete(note.id)}
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
        title="Excluir anotação"
        description="Você realmente deseja excluir esta anotação?"
      />
    </Layout>
  );
};

export default HomeVehicleNoteAdmin;
