import "./RoleToggle.css";

function RoleToggle({ role, setRole }) {
  return (
    <div className="role-toggle">
      <span>Viewer</span>

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

      <span>Admin</span>
    </div>
  );
}

export default RoleToggle;