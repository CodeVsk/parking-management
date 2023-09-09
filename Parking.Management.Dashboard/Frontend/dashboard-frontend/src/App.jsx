import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions/actions";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();
  dispatch(setUser("e1fa99da-8928-4957-a55f-b169240b2886", "ADMIN"));

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
