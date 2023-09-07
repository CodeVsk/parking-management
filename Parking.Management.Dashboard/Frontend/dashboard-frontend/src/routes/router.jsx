import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import VehicleTable from "../pages/DashboardUser/VehicleTable";
import VehicleNoteTable from "../pages/DashboardUser/VehicleNotesTable";
import VehicleResponsibleTable from "../pages/DashboardUser/VehicleResponsibleTable";
import HomeUser from "../pages/DashboardUser/Home";
import HomeAdmin from "../pages/DashboardAdmin/Home";
import RegisterVehicle from "../pages/DashboardAdmin/RegisterVehicle";
import RegisterUser from "../pages/DashboardAdmin/RegisterUser";
import Login from "../pages/Authentication/Login";
import PrivateRoute from "../components/common/PrivateRouter";
import Logout from "../pages/Authentication/Logout";
import UserAdmin from "../pages/DashboardAdmin/User";

export default function MapRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
        /*User Routes*/
        <Route
          path="/dashboard/user"
          element={
            <PrivateRoute roles={["DEFAULT", "ADMIN"]}>
              <HomeUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/vehicle"
          element={
            <PrivateRoute roles={["DEFAULT", "ADMIN"]}>
              <VehicleTable />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/vehicle/notes"
          element={
            <PrivateRoute roles={["DEFAULT", "ADMIN"]}>
              <VehicleNoteTable />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/vehicle/responsible"
          element={
            <PrivateRoute roles={["DEFAULT", "ADMIN"]}>
              <VehicleResponsibleTable />
            </PrivateRoute>
          }
        />
        /*Admin Routes*/
        <Route
          path="/dashboard/admin"
          element={
            <PrivateRoute roles={["ADMIN"]}>
              <HomeAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/admin/user"
          element={
            <PrivateRoute roles={["ADMIN"]}>
              <UserAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/admin/user/register"
          element={
            <PrivateRoute roles={["ADMIN"]}>
              <RegisterUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/admin/user/edit/:id"
          element={
            <PrivateRoute roles={["ADMIN"]}>
              <RegisterUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/admin/register/vehicle"
          element={
            <PrivateRoute roles={["ADMIN"]}>
              <RegisterVehicle />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
