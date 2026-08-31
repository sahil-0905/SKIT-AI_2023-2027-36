import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between px-8 py-4 bg-panel border-b border-border">
      
      <Link to="/" className="flex items-center gap-2">
       <div className="w-8 h-8 rounded-lg overflow-hidden">
  <img
    src="/logo.png"
    alt="Logo"
    className="w-full h-full object-cover"
  />
</div>
        <span className="font-bold text-text">AI-Powered Coding Platform</span>
      </Link>

      <div className="flex items-center gap-5">
        
        {!token && (
          <>
            <Link to="/login" className="text-sm text-muted font-semibold">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-accent text-white text-sm font-bold px-4 py-2 rounded-lg"
            >
              Sign Up
            </Link>
          </>
        )}

        {token && role === "student" && (
          <>
            <Link to="/student-dashboard" className="text-sm text-muted font-semibold">
              Dashboard
            </Link>
            <Link to="/practice" className="text-sm text-muted font-semibold">
              Practice
            </Link>
            <button onClick={handleLogout} className="text-sm text-red font-semibold">
              Logout
            </button>
          </>
        )}

        {token && role === "interviewer" && (
          <>
            <Link to="/interviewer-dashboard" className="text-sm text-muted font-semibold">
              Dashboard
            </Link>
            <button onClick={handleLogout} className="text-sm text-red font-semibold">
              Logout
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default Navbar;