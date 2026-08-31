import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignupPage from "./pages/Signup";
import Navbar from "./components/Navbar";
import StudentDashboard from "./pages/StudentDashboard";
import PracticePage from "./pages/PracticePage";
import ProblemSolvePage from "./pages/ProblemSolvePage";
import InterviewerDashboard from "./pages/InterviewerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateProblemPage from "./pages/CreateProblemPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/interviewer-dashboard"
          element={
            <ProtectedRoute allowedRole="interviewer">
              <InterviewerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-problem"
          element={
            <ProtectedRoute allowedRole="interviewer">
              <CreateProblemPage />
            </ProtectedRoute>
          }
        />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/practice/:id" element={<ProblemSolvePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
