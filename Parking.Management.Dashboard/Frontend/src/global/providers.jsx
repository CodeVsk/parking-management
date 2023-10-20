import AuthProvider from "../providers/AuthProvider";

const GlobalProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default GlobalProvider;
