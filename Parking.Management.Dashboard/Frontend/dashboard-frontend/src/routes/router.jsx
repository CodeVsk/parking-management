import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
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
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/actions";
import EditUser from "../pages/DashboardAdmin/EditUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute roles={["ADMIN"]} />,
    children: [
      {
        path: "/dashboard/admin",
        element: <HomeAdmin />,
      },
      {
        path: "/dashboard/admin/user",
        element: <UserAdmin />,
      },
      {
        path: "/dashboard/admin/user/register",
        element: <RegisterUser />,
      },
      {
        path: "/dashboard/admin/user/edit/:id",
        element: <EditUser />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;

/*
createRoutesFromElements(
    <Route
      path="/login"
      element={<Login />}
      loader={async () => {
        console.log("T");

        return null;
      }}
    />
  )
  */
