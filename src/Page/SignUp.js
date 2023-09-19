import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State to store the message to be displayed

  async function submit(e) {
    e.preventDefault();

    // Check if fields are not empty
    if (!username || !password) {
      setMessage("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        username,
        password,
      });

      if (response.data === "exist") {
        setMessage("User already exists.");
      } else if (response.data === "success") {
        history("/", { state: { id: username } });
      }
    } catch (e) {
      setMessage("Registration error. Please try again.");
      console.error("Registration error:", e);
    }
  }

  return (
    <div className="Signup">
      <h1>Signup</h1>
      <form action="POST">
        <input
          type="text"
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
      {message && <p className="error-message">{message}</p>} {/* Display the message */}
    </div>
  );
}

export default Signup;
