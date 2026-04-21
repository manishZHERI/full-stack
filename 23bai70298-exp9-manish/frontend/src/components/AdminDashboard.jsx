import axios from "axios";

function AdminDashboard() {

  const fetchAdmin = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/admin/dashboard", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });

      alert(res.data.message);

    } catch {
      alert("Access Denied");
    }
  };

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      <button className="btn btn-danger" onClick={fetchAdmin}>
        Admin Data
      </button>

      <button className="btn btn-secondary" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;