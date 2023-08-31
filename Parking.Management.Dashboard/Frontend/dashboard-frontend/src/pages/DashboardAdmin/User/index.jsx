import React, { useEffect, useState } from "react";
import "./index.css";
import { Layout } from "../../../components/layout/Default";
import Toolbar from "../../../components/section/Toolbar";
import { UserApi } from "../../../api/userApi";

const UserAdmin = () => {
  const [users, setUsers] = useState([]);
  const api = new UserApi();

  useEffect(() => {
    async function fetchGetAll() {
      const response = await api.getAll(localStorage.getItem("PM:TOKEN"));

      setUsers(response.data);
    }

    fetchGetAll();
  }, []);

  return (
    <Layout>
      <div className="user-wrapper">
        <div className="user-container">
          <Toolbar />
          <table className="table mb-0">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Matricula</th>
                <th scope="col">Status</th>
                <th scope="col">Tipo</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.enrollment}</td>
                  <td>{user.status ? "ATIVO" : "DESATIVADO"}</td>
                  <td>{user.role}</td>
                  <td>
                    <i className="bi bi-pencil-square"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default UserAdmin;
