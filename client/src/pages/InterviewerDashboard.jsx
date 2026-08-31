
import { Link, useNavigate } from "react-router-dom";

function InterviewerDashboard() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-bg">
      
      {/* Sidebar */}
      <div className="w-56 bg-panel border-r border-border p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm">
            {"</>"}
          </div>
          <span className="font-bold text-text">Platform</span>
        </div>

        <div className="bg-accent-soft text-accent font-semibold px-3 py-2 rounded-lg text-sm mb-1">
          Live Monitoring
        </div>
        <div className="text-muted px-3 py-2 text-sm">Schedule Interview</div>
        <div className="text-muted px-3 py-2 text-sm">Question Bank</div>
        <div className="text-muted px-3 py-2 text-sm">Reports</div>

        <div className="mt-auto pt-4 border-t border-border flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">
            RS
          </div>
          <div className="flex-1">
            <p className="text-sm text-text">{name}</p>
            <p className="text-xs text-muted">Interviewer</p>
          </div>
          <button
            onClick={handleLogout}
            className="text-muted hover:text-red text-xs font-semibold"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-bold text-text">Live Interview Monitoring</h1>
            <p className="text-sm text-muted">Track candidates in real time</p>
          </div>
          <button className="bg-accent text-white font-bold px-5 py-2 rounded-lg">
            + Schedule Interview
          </button>
          <Link to="/create-problem" className="bg-panel border border-border text-text font-bold px-5 py-2 rounded-lg">
  + Create Problem
</Link>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-5 mb-6">
          <span className="bg-accent-soft text-accent text-xs font-bold px-3 py-1 rounded-full">
            No active interviews
          </span>
          <p className="text-muted text-sm mt-3">
            Schedule an interview to see live candidate activity here.
          </p>
        </div>

      </div>
    </div>
  );
}

export default InterviewerDashboard;