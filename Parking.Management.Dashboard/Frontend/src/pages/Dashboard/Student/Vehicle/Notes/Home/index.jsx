import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Layout } from "../../../../../../components/layout/Default";
import { useNavigate, useParams } from "react-router-dom";
import ModalCustom from "../../../../../../components/common/Modal";
import { VehicleNoteApi } from "../../../../../../api/vehicleNoteApi";

const HomeVehicleNoteUser = () => {
  const { id } = useParams();
  const modalRef = useRef(null);
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const [vehicleNoteApi] = useState(new VehicleNoteApi());
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response =
          token && (await vehicleNoteApi.getByIdToken(id, token));

        if (response.data) {
          setNotes(response.data);
        }
      } catch (e) {
        console.error("Erro ao trazer anotações cadastrados");
      }
    };

    getData();
  }, []);

  return (
    <Layout>
      <div className="vehicle-wrapper">
        <div className="vehicle-container">
          <table className="table mb-0">
            <thead>
              <tr>
                <th scope="col">Anotações</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note) => (
                <tr key={note.id}>
                  <td>{note.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default HomeVehicleNoteUser;
