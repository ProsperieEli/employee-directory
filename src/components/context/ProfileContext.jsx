import { useContext, createContext, useState } from "react";
import { getProfile } from "../../services/Profiles";

const profileContext = createContext();

const ProfileProvider = ({ children }) => {
  const currentProfile = getProfile();
  const [profile, setProfile] = useState(
    currentProfile ? { id: currentProfile.id, email: currentProfile.email } : {}
  );

  return (
    <profileContext.Provider value={{ profile, setProfile }}>
      {children}
    </profileContext.Provider>
  );
};

const useProfile = () => {
  const context = useContext(profileContext);

  if (context === undefined) {
    throw new Error("Incorrect placement");
  }
  return context;
};

export { ProfileProvider, profileContext, useProfile };
