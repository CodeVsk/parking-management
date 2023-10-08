import AuthProvider from "../providers/authProvider";

const GlobalProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default GlobalProvider;
