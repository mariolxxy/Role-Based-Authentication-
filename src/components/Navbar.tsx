import { Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
        {user.role === "Admin" && (
          <Link to="/settings" className="nav-link">
            Settings
          </Link>
        )}
      </div>
      <div className="navbar-user">
        <span className="user-info">
          {user.username} ({user.role})
        </span>
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
