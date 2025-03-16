import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<"Admin" | "Editor" | "Viewer" | "">("");

  const handleLogin = () => {
    if (username && role) {
      login(username, role as "Admin" | "Editor" | "Viewer");
      navigate("/dashboard");
    }
  };

  return (
    <div className="container">
      <div className="login">
        <div className="loginContent">
          <h1 className="loginText">Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="nameInput"
          />
          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value as "Admin" | "Editor" | "Viewer")
            }
            className="roleInput"
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
          <button onClick={handleLogin} className="button">
            Login
          </button>
        </div>
      </div>
      <div className="loginSide">
        <div className="loginSideText">
          <h2>
            Hello!!! Welcome to <strong>Nothing's New</strong>
          </h2>
          <p>
            Please Login with your appropriate details and ensure to select the
            right role
          </p>
        </div>
        <div className="image">
          <img src="./images/login.png" alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
