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
import CourseHome from "../pages/Dashboard/Admin/Course/Home";
import CourseHomeAdmin from "../pages/Dashboard/Admin/Course/Home";
import CreateCourseAdmin from "../pages/Dashboard/Admin/Course/Create";
import EditCourseAdmin from "../pages/Dashboard/Admin/Course/Edit";
import HomeVehicleAdmin from "../pages/Dashboard/Admin/Vehicle/Home";
import CreateVehicleAdmin from "../pages/Dashboard/Admin/Vehicle/Create";
import EditVehicleAdmin from "../pages/Dashboard/Admin/Vehicle/Edit";
import HomeResponsibleVehicleAdmin from "../pages/Dashboard/Admin/Vehicle/Responsibles/Home";
import CreateResponsibleVehicleAdmin from "../pages/Dashboard/Admin/Vehicle/Responsibles/Create";
import HomeVehicleNoteAdmin from "../pages/Dashboard/Admin/Vehicle/Notes/Home";
import CreateVehicleNoteAdmin from "../pages/Dashboard/Admin/Vehicle/Notes/Create";
import HomeUser from "../pages/Dashboard/Student/Home";
import HomeVehicleUser from "../pages/Dashboard/Student/Vehicle/Home";
import CreateVehicleUser from "../pages/Dashboard/Student/Vehicle/Create";
import HomeResponsibleVehicleUser from "../pages/Dashboard/Student/Vehicle/Responsibles/Home";
import Logout from "../pages/Authentication/Logout";
import CreateResponsibleVehicleUser from "../pages/Dashboard/Student/Vehicle/Responsibles/Create";

const router = createBrowserRouter([
  {
    path: "dashboard/admin/",
    element: <PrivateRoute roles={["ADMIN"]} />,
    children: [
      {
        path: "",
        element: <HomeAdmin />,
      },
      {
        path: "user",
        element: <HomeUserAdmin />,
      },
      {
        path: "user/register",
        element: <CreateUserAdmin />,
      },
      {
        path: "user/edit/:id",
        element: <EditUserAdmin />,
      },
      {
        path: "college",
        element: <CollegeHomeAdmin />,
      },
      {
        path: "college/create",
        element: <CreateCollegeAdmin />,
      },
      {
        path: "college/edit/:id",
        element: <EditCollegeAdmin />,
      },
      {
        path: "course",
        element: <CourseHomeAdmin />,
      },
      {
        path: "course/create",
        element: <CreateCourseAdmin />,
      },
      {
        path: "course/edit/:id",
        element: <EditCourseAdmin />,
      },
      {
        path: "vehicle",
        element: <HomeVehicleAdmin />,
      },
      {
        path: "vehicle/create",
        element: <CreateVehicleAdmin />,
      },
      {
        path: "vehicle/edit/:id",
        element: <EditVehicleAdmin />,
      },
      {
        path: "vehicle/responsibles/:id",
        element: <HomeResponsibleVehicleAdmin />,
      },
      {
        path: "vehicle/responsibles/create/:id",
        element: <CreateResponsibleVehicleAdmin />,
      },
      {
        path: "vehicle/notes/:id",
        element: <HomeVehicleNoteAdmin />,
      },
      {
        path: "vehicle/notes/create/:id",
        element: <CreateVehicleNoteAdmin />,
      },
    ],
  },
  {
    path: "dashboard/user/",
    element: <PrivateRoute roles={["DEFAULT"]} />,
    children: [
      {
        path: "",
        element: <HomeUser />,
      },
      {
        path: "vehicle",
        element: <HomeVehicleUser />,
      },
      {
        path: "vehicle/create",
        element: <CreateVehicleUser />,
      },
      //{
      //  path: "vehicle/edit/:id",
      //  element: <EditVehicleAdmin />,
      //},
      {
        path: "vehicle/responsibles/:id",
        element: <HomeResponsibleVehicleUser />,
      },
      {
        path: "vehicle/responsibles/create/:id",
        element: <CreateResponsibleVehicleUser />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

export default router;
