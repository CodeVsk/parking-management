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
      {
        path: "dashboard/admin/course",
        element: <CourseHomeAdmin />,
      },
      {
        path: "dashboard/admin/course/create",
        element: <CreateCourseAdmin />,
      },
      {
        path: "dashboard/admin/course/edit/:id",
        element: <EditCourseAdmin />,
      },
      {
        path: "dashboard/admin/vehicle",
        element: <HomeVehicleAdmin />,
      },
      {
        path: "dashboard/admin/vehicle/create",
        element: <CreateVehicleAdmin />,
      },
      {
        path: "dashboard/admin/vehicle/edit/:id",
        element: <EditVehicleAdmin />,
      },
      {
        path: "dashboard/admin/vehicle/responsibles/:id",
        element: <HomeResponsibleVehicleAdmin />,
      },
      {
        path: "dashboard/admin/vehicle/responsibles/create/:id",
        element: <CreateResponsibleVehicleAdmin />,
      },
      {
        path: "dashboard/admin/vehicle/notes/:id",
        element: <HomeVehicleNoteAdmin />,
      },
      {
        path: "dashboard/admin/vehicle/notes/create/:id",
        element: <CreateVehicleNoteAdmin />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
