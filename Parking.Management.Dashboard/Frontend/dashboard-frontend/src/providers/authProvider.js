import { login, logout } from "../services/authService";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setAuthValue = (value) => {
    setUser(value);
  };

  const loginUser = async (username, password) => {
    const result = await login(username, password);

    if (result) {
      setAuthValue({ userId: result.userId, role: result.permission });
    }
  };

  const logoutUser = () => {
    setUser(null);
    logout();
  };

  const value = {
    user,
    loginUser,
    logoutUser,
  };

  return (
    <userRoleContext.Provider value={{ value }}>
      {children}
    </userRoleContext.Provider>
  );
};
