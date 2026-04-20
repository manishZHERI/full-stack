import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [dark, setDark] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);

    if (newDark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Blogify</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <button onClick={toggleTheme} className="dark-btn">
        {dark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;
