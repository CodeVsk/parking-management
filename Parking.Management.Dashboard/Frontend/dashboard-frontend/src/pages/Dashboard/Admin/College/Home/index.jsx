import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Layout } from "../../../../../components/layout/Default";
import Toolbar from "../../../../../components/section/Toolbar";
import { useNavigate } from "react-router-dom";
import ModalCustom from "../../../../../components/common/Modal";
import { showNotification } from "../../../../../global/notifications";
import { CollegeApi } from "../../../../../api";

const CollegeHome = () => {
  const modalRef = useRef(null);
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [collegeApi] = useState(new CollegeApi());
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();

  const getAllColleges = async () => {
    const response = await collegeApi.getAll(token);
    setColleges(response.data);
  };

  useEffect(() => {
    async function fetchGetAll() {
      await getAllColleges();
    }

    fetchGetAll();
  }, []);

  const handleEdit = (id) => {
    navigate(`/dashboard/admin/college/edit/${id}`);
  };

  const showModalDelete = async (id) => {
    modalRef.current.handleShow(id);
  };

  const handleDelete = async (id) => {
    const response = await collegeApi.delete(id, token);
    if (response.statusCode == 200 && response.data != null) {
      showNotification("success", "Universidade removida com sucesso.");
      await getAllColleges();

      return;
    }

    showNotification("error", "Ocorreu um erro ao remover a universidade.");
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const getColleges = () => {
    if (search && search != "") {
      return colleges.filter(
        (x) =>
          x.name.toLowerCase().includes(search?.toLowerCase()) ||
          x.campus.toLowerCase().includes(search?.toLowerCase())
      );
    }

    return colleges;
  };

  return (
    <Layout>
      <div className="college-wrapper">
        <div className="college-container">
          <Toolbar
            onSearchCallback={handleSearch}
            placeholder="Digite o nome ou o campus da universidade"
            to="/dashboard/admin/college/create"
          />
          <table className="table mb-0">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Campus</th>
                <th scope="col">Endereço</th>
                <th scope="col">Cidade</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {getColleges().map((college) => (
                <tr key={college.id}>
                  <td>{college.name}</td>
                  <td>{college.campus}</td>
                  <td>{college.address}</td>
                  <td>{college.city}</td>
                  <td className="table-action">
                    <i
                      className="bi bi-pencil-square"
                      onClick={() => handleEdit(college.id)}
                    ></i>
                    <i
                      className="bi bi-trash"
                      onClick={() => showModalDelete(college.id)}
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
        title="Excluir universidade"
        description="Você realmente deseja excluir esta universidade?"
      />
    </Layout>
  );
};

export default CollegeHome;
