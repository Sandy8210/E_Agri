import React, { useContext, useState } from "react";
const AuthContext = React.createContext();

const Auth = (props) => {
  const [user, setUser] = useState(null);
  const [id, setId] = useState(null);

  const login = (userName, userId) => {
    setUser(userName);
    setId(userId);
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <>
      <AuthContext.Provider value={{ user, id, login, logout }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default Auth;
