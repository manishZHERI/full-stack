import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5001/login", {
        username,
        password,
      });

      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("role", res.data.role);

      window.location.href =
        res.data.role === "ADMIN" ? "/admin" : "/user";

    } catch {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input className="form-control" placeholder="Username"
        onChange={(e) => setUsername(e.target.value)} /><br/>

      <input type="password" className="form-control" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} /><br/>

      <button className="btn btn-primary" onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;