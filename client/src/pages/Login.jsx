import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", formData);
      
      // token ko save karo (localStorage me) - taaki refresh hone pe bhi login rahe
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.user.role);
      localStorage.setItem("name", response.data.user.name);

      // role ke hisaab se redirect
      if (response.data.user.role === "student") {
        navigate("/student-dashboard");
      } else {
        navigate("/interviewer-dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="bg-panel border border-border rounded-2xl p-10 w-full max-w-md">
        
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-white font-bold">
            {"</>"}
          </div>
          <span className="font-bold text-text">AI-Powered Coding Platform</span>
        </div>

        <h2 className="text-xl font-bold text-center text-text mb-1">
          Welcome back
        </h2>
        <p className="text-sm text-muted text-center mb-6">
          Log in to continue your session
        </p>

        {error && (
          <div className="bg-red/15 text-red text-sm rounded-lg px-4 py-2 mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-muted mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-input border border-border rounded-lg px-3 py-2 text-text outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-muted mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full bg-input border border-border rounded-lg px-3 py-2 text-text outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white font-bold py-3 rounded-lg"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-muted mt-5">
          Don't have an account?{" "}
          <Link to="/signup" className="text-accent font-semibold">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;