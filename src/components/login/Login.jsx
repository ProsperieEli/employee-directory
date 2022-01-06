import React from "react";
import { signInUser } from "../../services/Users";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (signInUser) {
      const returningMember = signInUser(email, password);
      setEmail(returningMember);
      history.replace("/list");
    }
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
    </div>
  );
}
