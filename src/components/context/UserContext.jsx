import { useContext, createContext, useState } from "react";
import { getUser } from "../../services/Users";

const userContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(userContext);

  if (context === undefined) {
    throw new Error("Incorrect placement");
  }
  return context;
};

export { UserProvider, useUser };
