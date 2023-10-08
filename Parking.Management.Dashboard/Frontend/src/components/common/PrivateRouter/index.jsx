import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, redirect, useNavigate } from "react-router-dom";
import { validateApi } from "../../../api";
import { setUser } from "../../../redux/actions/actions";
import { useEffect, useState } from "react";

const PrivateRoute = ({ roles }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [token] = useState(localStorage.getItem("PM:TOKEN"));

  useEffect(() => {
    const getData = async () => {
      try {
        if (!user.role) {
          const data = await validateApi(token);
          if (data.statusCode != 400) {
            const { userId, role } = data.data;

            await dispatch(setUser(userId, role));

            if (!userId || !role || !roles.includes(role)) {
              navigate("/login");
            }
          } else {
            navigate("/login");
          }
        }
      } catch (e) {
        console.error(e, "Erro ao realizar autenticação");
      }
    };

    getData();
  }, []);

  return user.role && roles.includes(user.role) ? (
    <>
      <Outlet />
    </>
  ) : (
    <></>
  );
};

export default PrivateRoute;
