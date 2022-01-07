import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { signOutUser } from "../../services/Users";
import { useUser } from "../context/UserContext";
import { useHistory } from "react-router-dom";

export default function Header() {
  const { user, setUser } = useUser();
  const history = useHistory();

  const handleSignOut = async () => {
    await signOutUser();
    setUser({});
    history.replace("/");
  };

  return (
    <div>
      <header>
        <p>{user.email ? `Signed in as ${user.email}` : "Not signed in"}</p>
        {user.email ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        )}
      </header>
    </div>
  );
}
