import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import VehicleTable from "../pages/DashboardUser/VehicleTable";
import VehicleNoteTable from "../pages/DashboardUser/VehicleNotesTable";
import VehicleResponsibleTable from "../pages/DashboardUser/VehicleResponsibleTable";
import HomeUser from "../pages/DashboardUser/Home";
import HomeAdmin from "../pages/DashboardAdmin/Home";
import RegisterVehicle from "../pages/DashboardAdmin/RegisterVehicle";
import RegisterUser from "../pages/DashboardAdmin/RegisterUser";
import { AuthContext } from "../providers/authProvider";

const MapRoutes = () => {
  const PrivateRoute = ({ element: Component, roles, ...rest }) => {
    const { user } = AuthContext();

    if (!user) {
      return <Redirect to="/login" />;
    }

    if (roles && !roles.includes(user.role)) {
      return <Redirect to="/logout" />;
    }

    return <Route {...rest} render={(props) => <Component {...props} />} />;
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        /*User Routes*/
        <PrivateRoute
          path="/dashboard/user"
          element={<HomeUser />}
          roles={["DEFAULT", "ADMIN"]}
        />
        <PrivateRoute
          path="/dashboard/user/vehicle"
          element={<VehicleTable />}
          roles={["DEFAULT", "ADMIN"]}
        />
        <PrivateRoute
          path="/dashboard/user/vehicle/notes"
          element={<VehicleNoteTable />}
          roles={["DEFAULT", "ADMIN"]}
        />
        <PrivateRoute
          path="/dashboard/user/vehicle/responsible"
          element={<VehicleResponsibleTable />}
          roles={["DEFAULT", "ADMIN"]}
        />
        /*Admin Routes*/
        <PrivateRoute
          path="/dashboard/admin"
          element={<HomeAdmin />}
          roles={["DEFAULT", "ADMIN"]}
        />
        <PrivateRoute
          path="/dashboard/admin/register/user"
          element={<RegisterUser />}
          roles={["DEFAULT", "ADMIN"]}
        />
        <PrivateRoute
          path="/dashboard/admin/register/vehicle"
          element={<RegisterVehicle />}
          roles={["DEFAULT", "ADMIN"]}
        />
      </Routes>
    </Router>
  );
};

export default MapRoutes;
