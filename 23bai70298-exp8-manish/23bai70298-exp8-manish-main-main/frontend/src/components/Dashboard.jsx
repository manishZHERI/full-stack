import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState("");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    }
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5001/protected", {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      setData(res.data);
    } catch {
      alert("Unauthorized");
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <button className="btn btn-success me-2" onClick={getData}>Fetch Data</button>
      <button className="btn btn-danger" onClick={logout}>Logout</button>
      <p>{data}</p>
    </div>
  );
}

export default Dashboard;