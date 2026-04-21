import axios from "axios";

function UserDashboard() {

  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/user/profile", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });

      alert(res.data.message);

    } catch {
      alert("Error fetching data");
    }
  };

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="container">
      <h2>User Dashboard</h2>

      <button className="btn btn-success" onClick={fetchProfile}>
        Get Profile
      </button>

      <button className="btn btn-secondary" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default UserDashboard;