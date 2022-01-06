import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signInUser, signUpUser, signOutUser } from "../../services/Users";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useUser } from "../context/UserContext";

export default function Home() {
  const { setUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMember = await signUpUser(email, password);
    if (newMember) {
      setUser(newMember);
      history.replace("/list");
    }
  };
  return (
    <div>
      <h1>Welcome Employee!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign up</button>
      </form>
      <Link to="/login">Already have an account? Login here!</Link>
    </div>
  );
}
