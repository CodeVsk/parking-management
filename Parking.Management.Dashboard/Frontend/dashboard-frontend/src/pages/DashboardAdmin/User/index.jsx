import React, { useEffect, useState } from "react";
import "./index.css";
import { Layout } from "../../../components/layout/Default";
import Toolbar from "../../../components/section/Toolbar";
import { UserApi } from "../../../api/userApi";
import { useNavigate } from "react-router-dom";

const UserAdmin = () => {
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const api = new UserApi();

  useEffect(() => {
    async function fetchGetAll() {
      const response = await api.getAll(token);

      setUsers(response.data);
    }

    fetchGetAll();
  }, []);

  const editUserRedirect = (id) => {
    navigate(`/dashboard/admin/user/edit/${id}`);
  };

  const deleteUser = async (id) => {
    const response = await api.deleteUser(id, token);
    console.log(response);
    if (response.statusCode == 200 && response.data > 0) {
      console.log(response);
      fetchGetAll();
    }
  };

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
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.enrollment}</td>
                  <td>{user.status ? "ATIVO" : "DESATIVADO"}</td>
                  <td className="table-action">
                    <i
                      className="bi bi-pencil-square"
                      onClick={() => editUserRedirect(user.id)}
                    ></i>
                    <i
                      className="bi bi-trash"
                      onClick={() => deleteUser(user.id)}
                    ></i>
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
