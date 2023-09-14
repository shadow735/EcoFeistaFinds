import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    // Check if fields are not empty
    if (!username || !password) {
      alert("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        username,
        password,
      });

      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "notexist") {
        history("/", { state: { id: username } });
      }
    } catch (e) {
      alert("Wrong details");
      console.error("Authentication error:", e);
    }
  }

  return (
    <div className="Signup">
      <h1>Signup</h1>
      <form action="POST">
        <input
          type="text" // Change to text type
          required
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input type="submit" value="Submit" onClick={submit} />
      </form>
    </div>
  );
}

export default Signup;
