import React, { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { login } from "../../../services/authService";
import { setUser } from "../../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import { Form } from "react-bootstrap";
import banner from "../../../assets/images/login-banner.png";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e, data) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    const { role, userId, message, statusCode, expireIn } = await login(
      email,
      password
    );

    if (role) {
      dispatch(setUser(userId, role, expireIn));

      navigate(role == "DEFAULT" ? "/dashboard/user" : "/dashboard/admin");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-left">
          <img src="/logo-unip.svg" alt="logo-unip" />
        </div>
        <div className="login-right">
          <div className="login-title">
            <h2>ÁREA DE LOGIN</h2>
            <p>Seja bem-vindo ao portal para chamar de seu</p>
          </div>
          <Form onSubmit={handleLogin} className="login-form">
            <Input type="email" name="email" placeholder="Email" required />
            <Input
              type="password"
              name="password"
              placeholder="Senha"
              required
            />
            <Button type="submit" name="Entrar" />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
