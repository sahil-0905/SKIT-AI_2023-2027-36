import React from 'react'

const StudentDashboard = () => {
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
          Dashboard
        </div>
        <div className="text-muted px-3 py-2 text-sm">Practice</div>
        <div className="text-muted px-3 py-2 text-sm">Interviews</div>
        <div className="text-muted px-3 py-2 text-sm">Progress</div>

        <div className="mt-auto pt-4 border-t border-border flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">
            SK
          </div>
          <div>
            <p className="text-sm text-text">Sahil Kumar</p>
            <p className="text-xs text-muted">Student</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        
        <div className="mb-6">
          <h1 className="text-xl font-bold text-text">Welcome back, Sahil</h1>
          <p className="text-sm text-muted">Keep your streak going</p>
        </div>

        {/* Banner */}
        <div className="bg-panel border border-border rounded-2xl p-5 flex justify-between items-center mb-6">
          <div>
            <span className="bg-accent-soft text-accent text-xs font-bold px-3 py-1 rounded-full">
              LIVE IN 12 MIN
            </span>
            <h3 className="text-text font-semibold mt-2">
              Mock Interview — Trees & Graphs
            </h3>
            <p className="text-muted text-sm">5 problems · 60 minutes</p>
          </div>
          <button className="bg-accent text-white font-bold px-5 py-2 rounded-lg">
            Join session
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-panel border border-border rounded-xl p-4">
            <p className="text-muted text-xs mb-1">Problems solved</p>
            <p className="text-text text-2xl font-bold">142</p>
          </div>
          <div className="bg-panel border border-border rounded-xl p-4">
            <p className="text-muted text-xs mb-1">Accuracy</p>
            <p className="text-green text-2xl font-bold">78%</p>
          </div>
          <div className="bg-panel border border-border rounded-xl p-4">
            <p className="text-muted text-xs mb-1">Day streak</p>
            <p className="text-amber text-2xl font-bold">9</p>
          </div>
          <div className="bg-panel border border-border rounded-xl p-4">
            <p className="text-muted text-xs mb-1">Interviews taken</p>
            <p className="text-text text-2xl font-bold">6</p>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-[1.4fr_1fr] gap-4">
          
          {/* Practice list */}
          <div className="bg-panel border border-border rounded-2xl p-5">
            <h4 className="font-bold text-text mb-3">Continue practicing</h4>
            <div className="flex justify-between items-center py-2 border-b border-border text-sm">
              <span className="text-text">Binary Search on Answer</span>
              <span className="bg-amber/15 text-amber text-xs font-bold px-3 py-1 rounded-full">
                Medium
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border text-sm">
              <span className="text-text">Number of Islands</span>
              <span className="bg-amber/15 text-amber text-xs font-bold px-3 py-1 rounded-full">
                Medium
              </span>
            </div>
            <div className="flex justify-between items-center py-2 text-sm">
              <span className="text-text">Valid Parentheses</span>
              <span className="bg-green/15 text-green text-xs font-bold px-3 py-1 rounded-full">
                Easy
              </span>
            </div>
          </div>

          {/* Progress */}
          <div className="bg-panel border border-border rounded-2xl p-5">
            <h4 className="font-bold text-text mb-3">Topic-wise progress</h4>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-text">Trees</span>
                <span className="text-muted">18/25</span>
              </div>
              <div className="h-1.5 bg-input rounded-full">
                <div className="h-1.5 bg-accent rounded-full" style={{ width: "72%" }}></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-text">Graphs</span>
                <span className="text-muted">9/20</span>
              </div>
              <div className="h-1.5 bg-input rounded-full">
                <div className="h-1.5 bg-accent rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-text">Arrays</span>
                <span className="text-muted">30/30</span>
              </div>
              <div className="h-1.5 bg-input rounded-full">
                <div className="h-1.5 bg-accent rounded-full" style={{ width: "100%" }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
