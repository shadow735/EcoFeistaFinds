import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State to store the message to be displayed

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", {
        username,
        password,
      });

      if (response.data === "success") {
        history("/", { state: { id: username } });
      } else if (response.data === "usernotfound") {
        setMessage("User does not exist. Please sign up.");
      } else if (response.data === "wrongpassword") {
        setMessage("Wrong password. Please try again.");
      }
    } catch (e) {
      setMessage("Authentication error. Please try again.");
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
      <p>{message}</p> {/* Display the message */}
      <br />
      <p>OR</p>
      <br />
      <Link to="/signup">Signup Page</Link>
    </div>
  );
}

export default Login;
