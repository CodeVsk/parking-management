import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import VehicleTable from "../pages/DashboardUser/VehicleTable";
import VehicleNoteTable from "../pages/DashboardUser/VehicleNotesTable";
import VehicleResponsibleTable from "../pages/DashboardUser/VehicleResponsibleTable";
import HomeUser from "../pages/DashboardUser/Home";
import HomeAdmin from "../pages/DashboardAdmin/Home";
import RegisterVehicle from "../pages/DashboardAdmin/RegisterVehicle";
import RegisterUser from "../pages/DashboardAdmin/RegisterUser";

const MapRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        /*User Routes*/
        <Route path="/dashboard/user" element={<HomeUser />} />
        <Route path="/dashboard/user/vehicle" element={<VehicleTable />} />
        <Route
          path="/dashboard/user/vehicle/notes"
          element={<VehicleNoteTable />}
        />
        <Route
          path="/dashboard/user/vehicle/responsible"
          element={<VehicleResponsibleTable />}
        />
        /*Admin Routes*/
        <Route path="/dashboard/admin" element={<HomeAdmin />} />
        <Route
          path="/dashboard/admin/register/user"
          element={<RegisterUser />}
        />
        <Route
          path="/dashboard/admin/register/vehicle"
          element={<RegisterVehicle />}
        />
      </Routes>
    </Router>
  );
};

export default MapRoutes;
