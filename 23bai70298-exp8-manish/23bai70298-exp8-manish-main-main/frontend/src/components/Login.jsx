import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5001/login", {
        username,
        password
      });

      if (res.data.token) {
        sessionStorage.setItem("token", res.data.token);

        // ✅ correct navigation
        navigate("/dashboard");
      }
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    
    <div className="container mt-5">
      <h2>Login</h2>
      <input
        className="form-control"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      /><br/>

      <input
        className="form-control"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      /><br/>

      <button className="btn btn-primary" onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;