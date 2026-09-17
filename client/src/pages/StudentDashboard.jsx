import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { LayoutDashboard, Code2, Calendar, TrendingUp, LogOut, Clock, Flame, Target, Trophy } from 'lucide-react'

const name = localStorage.getItem("name");

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState([]);
  const [problems, setProblems] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    navigate("/");
  };

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8080/api/interviews/my-sessions", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSessions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchProblems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/problems");
        setProblems(response.data.slice(0, 3));
      } catch (error) {
        console.error(error);
      }
    };

    fetchSessions();
    fetchProblems();
  }, []);

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

        <Link
          to="/student-dashboard"
          className="flex items-center gap-2.5 bg-accent-soft text-accent font-semibold px-3 py-2.5 rounded-lg text-sm mb-1"
        >
          <LayoutDashboard size={16} /> Dashboard
        </Link>
        <Link to="/practice" className="flex items-center gap-2.5 text-muted px-3 py-2.5 text-sm rounded-lg hover:bg-panel2 hover:text-text transition-colors">
          <Code2 size={16} /> Practice
        </Link>
        <Link to="/student-dashboard" className="flex items-center gap-2.5 text-muted px-3 py-2.5 text-sm rounded-lg hover:bg-panel2 hover:text-text transition-colors">
          <Calendar size={16} /> Interviews
        </Link>
        <div className="flex items-center gap-2.5 text-muted px-3 py-2.5 text-sm">
          <TrendingUp size={16} /> Progress
        </div>

        <div className="mt-auto pt-4 border-t border-border flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-purple-400 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-accent/20">
            {name ? name.charAt(0).toUpperCase() : "S"}
          </div>
          <div className="flex-1">
            <p className="text-sm text-text font-medium">{name}</p>
            <p className="text-xs text-muted">Student</p>
          </div>
          <button
            onClick={handleLogout}
            className="text-muted hover:text-red p-1.5 rounded-md hover:bg-red/10 transition-colors"
            title="Logout"
          >
            <LogOut size={15} />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-text">Welcome back, {name} 👋</h1>
          <p className="text-sm text-muted mt-1">Keep your streak going</p>
        </div>

        {/* Interview Sessions */}
        {sessions.length === 0 ? (
          <div className="bg-panel border border-border rounded-2xl p-5 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center text-accent">
              <Calendar size={18} />
            </div>
            <p className="text-muted text-sm">No interviews scheduled yet.</p>
          </div>
        ) : (
          sessions.map((session) => (
            <div
              key={session._id}
              className="bg-panel border border-border rounded-2xl p-5 flex justify-between items-center mb-4 hover:border-accent/40 transition-colors shadow-sm"
            >
              <div>
                <span className="bg-accent-soft text-accent text-xs font-bold px-3 py-1 rounded-full">
                  {session.status}
                </span>
                <h3 className="text-text font-semibold mt-2 text-base">{session.title}</h3>
                <p className="text-muted text-sm flex items-center gap-1.5 mt-1">
                  <Clock size={13} />
                  {session.problems.length} problems · {session.duration} minutes ·{" "}
                  {new Date(session.scheduledAt).toLocaleString()}
                </p>
              </div>
              <button className="bg-accent text-white font-bold px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20">
                Join session
              </button>
            </div>
          ))
        )}

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-panel border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <p className="text-muted text-xs">Problems solved</p>
              <Target size={14} className="text-accent" />
            </div>
            <p className="text-text text-2xl font-bold">142</p>
          </div>
          <div className="bg-panel border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <p className="text-muted text-xs">Accuracy</p>
              <Trophy size={14} className="text-green" />
            </div>
            <p className="text-green text-2xl font-bold">78%</p>
          </div>
          <div className="bg-panel border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <p className="text-muted text-xs">Day streak</p>
              <Flame size={14} className="text-amber" />
            </div>
            <p className="text-amber text-2xl font-bold">9</p>
          </div>
          <div className="bg-panel border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <p className="text-muted text-xs">Interviews taken</p>
              <Calendar size={14} className="text-accent" />
            </div>
            <p className="text-text text-2xl font-bold">{sessions.length}</p>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-[1.4fr_1fr] gap-4">
          
          {/* Practice list */}
          <div className="bg-panel border border-border rounded-2xl p-5">
            <h4 className="font-bold text-text mb-3 flex items-center gap-2">
              <Code2 size={16} className="text-accent" /> Continue practicing
            </h4>
            {problems.map((problem, index) => (
              <Link key={problem._id} to={`/practice/${problem._id}`}>
                <div
                  className={`flex justify-between items-center py-3 px-2 -mx-2 rounded-lg text-sm hover:bg-panel2 transition-colors ${
                    index !== problems.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-text font-medium">{problem.title}</span>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      problem.difficulty === "Easy"
                        ? "bg-green/15 text-green"
                        : problem.difficulty === "Medium"
                        ? "bg-amber/15 text-amber"
                        : "bg-red/15 text-red"
                    }`}
                  >
                    {problem.difficulty}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Progress */}
          <div className="bg-panel border border-border rounded-2xl p-5">
            <h4 className="font-bold text-text mb-3 flex items-center gap-2">
              <TrendingUp size={16} className="text-accent" /> Topic-wise progress
            </h4>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-text font-medium">Trees</span>
                <span className="text-muted">18/25</span>
              </div>
              <div className="h-1.5 bg-input rounded-full overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-accent to-purple-400 rounded-full" style={{ width: "72%" }}></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-text font-medium">Graphs</span>
                <span className="text-muted">9/20</span>
              </div>
              <div className="h-1.5 bg-input rounded-full overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-accent to-purple-400 rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-text font-medium">Arrays</span>
                <span className="text-muted">30/30</span>
              </div>
              <div className="h-1.5 bg-input rounded-full overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-accent to-purple-400 rounded-full" style={{ width: "100%" }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default StudentDashboard