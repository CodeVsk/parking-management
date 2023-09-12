import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Authentication/Login";
import PrivateRoute from "../components/common/PrivateRouter";

import HomeAdmin from "../pages/Dashboard/Admin/Home";
import HomeUserAdmin from "../pages/Dashboard/Admin/User/Home";
import EditUserAdmin from "../pages/Dashboard/Admin/User/Edit";
import CreateUserAdmin from "../pages/Dashboard/Admin/User/Create";
import CreateCollegeAdmin from "../pages/Dashboard/Admin/College/Create";
import CollegeHomeAdmin from "../pages/Dashboard/Admin/College/Home";
import EditCollegeAdmin from "../pages/Dashboard/Admin/College/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute roles={["ADMIN"]} />,
    children: [
      {
        path: "dashboard/admin/",
        element: <HomeAdmin />,
      },
      {
        path: "dashboard/admin/user",
        element: <HomeUserAdmin />,
      },
      {
        path: "dashboard/admin/user/register",
        element: <CreateUserAdmin />,
      },
      {
        path: "dashboard/admin/user/edit/:id",
        element: <EditUserAdmin />,
      },
      {
        path: "dashboard/admin/college",
        element: <CollegeHomeAdmin />,
      },
      {
        path: "dashboard/admin/college/create",
        element: <CreateCollegeAdmin />,
      },
      {
        path: "dashboard/admin/college/edit/:id",
        element: <EditCollegeAdmin />,
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
