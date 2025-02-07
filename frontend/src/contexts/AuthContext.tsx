import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../service/userService";


const AuthContext = React.createContext<{
  user: UserAuth | null;
  token: string | null;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => void;
} | null>(null);

type UserAuth = {
  name: string;
  email: string;
};

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (context === null) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};

export const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
  // Compilado: uaauhahbcbkmxnasaf: iago123
  const [token, setToken] = React.useState<string | null>(null);
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    const response = await login({ email, password });
    const data = response.data;

    // Semelhante asyncStorage(React Native)
    // token: iago123
    localStorage.setItem('userData', JSON.stringify({email, password})); // Tem que ser encriptado
    sessionStorage.setItem("token", data.token); // TEM QUE SER ENCRIPTADO MUITO

    // Encyptado: anhbsahbsdioaqsjkfvbhbs: ashhbfoshab76617eyqhsjix(iago123)

    setToken(data.token);
    setUser(data.user);
    navigate("/dashboard");
  };
  const handleLogout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
