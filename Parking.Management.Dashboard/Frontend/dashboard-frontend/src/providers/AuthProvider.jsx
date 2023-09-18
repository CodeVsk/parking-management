import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store/store";

const AuthProvider = ({ children }) => {
  console.log("b");
  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
