import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/actions/actions";
import { ToastContainer } from "react-toastify";
import { validateApi } from "./api";
import { useState } from "react";

function App() {
  const [token] = useState(localStorage.getItem("PM:TOKEN"));
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (!user.role) {
    const { userId, role } = validateApi(token);

    dispatch(setUser(userId, role));
    //dispatch(setUser("e1fa99da-8928-4957-a55f-b169240b2886", "ADMIN"));
  }

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
