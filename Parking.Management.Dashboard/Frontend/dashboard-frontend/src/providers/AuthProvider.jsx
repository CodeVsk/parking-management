import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store/store";

const AuthProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
