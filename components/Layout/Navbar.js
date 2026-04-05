import "./Layout.css";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode, role, setRole }) {
  return (
    <div className="navbar">
      <h2>Finance Dashboard</h2>

      <div className="nav-controls">
        {/* Role Toggle */}
        <span>{role === "admin" ? "Admin" : "Viewer"}</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={role === "admin"}
            onChange={() =>
              setRole(role === "admin" ? "viewer" : "admin")
            }
          />
          <span className="slider"></span>
        </label>

        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;