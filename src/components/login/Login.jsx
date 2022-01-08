import React from "react";
import { signInUser } from "../../services/Users";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const { setUser } = useUser("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const returningMember = await signInUser(email, password);
    setUser(returningMember);
    history.replace("/profile");
  };
  return (
    <div>
      <h1>Welcome Back Employee!</h1>
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
        <button>Log in</button>
      </form>
      <p>
        <Link to="/">Don't have an Account? Sign Up here!</Link>
      </p>
    </div>
  );
}
