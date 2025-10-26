// src/pages/admin/Login.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("adminExpiry", Date.now() + 60 * 1000); // 1 minute from now
      navigate("/admin/dashboard");
    } else {
      alert("Wrong username or password");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.formBox}>
          <img src={logo} alt="Admin Logo" style={styles.logo} />
          <p style={styles.subline}>Hello! Welcome Admin 👋</p>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = "rgb(210, 140, 36)")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = "rgb(210, 140, 36)")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />

          <button
            onClick={handleLogin}
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#b36e0f")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "rgb(210, 140, 36)")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    backgroundImage: `url('https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=1600&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  formBox: {
    backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: "10px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  logo: {
    width: "140px",
    display: "block",
    margin: "0 auto 15px",
  },
  subline: {
    marginBottom: "25px",
    color: "#555",
    fontSize: "16px",
    fontWeight: 600,
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "20px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "rgb(210, 140, 36)",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "background 0.3s",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
};

export default Login;
