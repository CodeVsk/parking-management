import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Layout } from "../../../../../components/layout/Default";
import Toolbar from "../../../../../components/section/Toolbar";
import { useNavigate } from "react-router-dom";
import ModalCustom from "../../../../../components/common/Modal";
import { showNotification } from "../../../../../global/notifications";
import { CourseApi } from "../../../../../api";

const CourseHomeAdmin = () => {
  const modalRef = useRef(null);
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [courseApi] = useState(new CourseApi());
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();

  const getAllCourses = async () => {
    const response = await courseApi.getAll(token);
    setCourses(response.data);
  };

  useEffect(() => {
    async function fetchGetAll() {
      await getAllCourses();
    }

    fetchGetAll();
  }, []);

  const handleEdit = (id) => {
    navigate(`/dashboard/admin/course/edit/${id}`);
  };

  const showModalDelete = async (id) => {
    modalRef.current.handleShow(id);
  };

  const handleDelete = async (id) => {
    const response = await courseApi.delete(id, token);
    if (response.statusCode == 200 && response.data != null) {
      showNotification("success", "Curso removido com sucesso.");
      await getAllCourses();

      return;
    }

    showNotification("error", "Ocorreu um erro ao remover o curso.");
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const getCourses = () => {
    if (search && search != "") {
      return courses.filter(
        (x) =>
          x.name.toLowerCase().includes(search?.toLowerCase()) ||
          x.college.campus.toLowerCase().includes(search?.toLowerCase())
      );
    }

    return courses;
  };

  return (
    <Layout>
      <div className="course-wrapper">
        <div className="course-container">
          <Toolbar
            onSearchCallback={handleSearch}
            placeholder="Digite o nome ou o campus do curso"
            to="/dashboard/admin/course/create"
            title="Cadastrar"
          />
          <table className="table mb-0">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Universidade</th>
                <th scope="col">Campus</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {getCourses().map((course) => (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>{course.college.name}</td>
                  <td>{course.college.campus}</td>
                  <td className="table-action">
                    <i
                      className="bi bi-pencil-square"
                      onClick={() => handleEdit(course.id)}
                    ></i>
                    <i
                      className="bi bi-trash"
                      onClick={() => showModalDelete(course.id)}
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
        title="Excluir curso"
        description="Você realmente deseja excluir este curso?"
      />
    </Layout>
  );
};

export default CourseHomeAdmin;
