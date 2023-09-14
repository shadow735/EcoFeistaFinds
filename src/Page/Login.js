import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import  './Login.css';
function Login() {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/", {
        username,
        password,
      });

      if (response.data === "exist") {
        history("/", { state: { id: username } });
      } else if (response.data === "notexist") {
        alert("User has not signed up");
      }
    } catch (e) {
      alert("Wrong details");
      console.error("Authentication error:", e);
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form action="POST">
        <input
          type="username"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/signup">Signup Page</Link>
    </div>
  );
}

export default Login;
