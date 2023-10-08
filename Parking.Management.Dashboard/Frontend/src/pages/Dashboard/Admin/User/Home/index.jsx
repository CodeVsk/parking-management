import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Layout } from "../../../../../components/layout/Default";
import Toolbar from "../../../../../components/section/Toolbar";
import { UserApi } from "../../../../../api/userApi";
import { useNavigate } from "react-router-dom";
import ModalCustom from "../../../../../components/common/Modal";
import { showNotification } from "../../../../../global/notifications";

const HomeUserAdmin = () => {
  const modalRef = useRef(null);
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [userApi] = useState(new UserApi());
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();

  const getAllUsers = async () => {
    const response = await userApi.getAll(token);
    setUsers(response.data);
  };

  useEffect(() => {
    async function fetchGetAll() {
      await getAllUsers();
    }

    fetchGetAll();
  }, []);

  const handleEditUser = (id) => {
    navigate(`/dashboard/admin/user/edit/${id}`);
  };

  const showModalDelete = async (id) => {
    modalRef.current.handleShow(id);
  };

  const handleDelete = async (id) => {
    const response = await userApi.delete(id, token);
    if (response.statusCode == 200 && response.data != null) {
      showNotification("success", "Usuário foi removido com sucesso.");
      await getAllUsers();

      return;
    }

    showNotification("error", "Ocorreu um erro ao remover o usuário.");
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const getUsers = () => {
    if (search && search != "") {
      return users.filter(
        (x) =>
          x.name.toLowerCase().includes(search?.toLowerCase()) ||
          x.enrollment.toLowerCase().includes(search?.toLowerCase())
      );
    }

    return users;
  };

  return (
    <Layout>
      <div className="user-wrapper">
        <div className="user-container">
          <Toolbar
            onSearchCallback={handleSearch}
            placeholder="Digite o nome ou a matricula do aluno"
            to="/dashboard/admin/user/register"
            title="Cadastrar"
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
              {getUsers().map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.enrollment}</td>
                  <td>{user.status ? "Ativo" : "Desativado"}</td>
                  <td className="table-action">
                    <i
                      className="bi bi-pencil-square"
                      onClick={() => handleEditUser(user.id)}
                    ></i>
                    <i
                      className="bi bi-trash"
                      onClick={() => showModalDelete(user.id)}
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

export default HomeUserAdmin;
