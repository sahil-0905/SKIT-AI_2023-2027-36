import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignupPage from "./pages/Signup";
import Navbar from "./components/Navbar";
import StudentDashboard from "./pages/StudentDashboard";
import PracticePage from "./pages/PracticePage";
import ProblemSolvePage from "./pages/ProblemSolvePage";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/practice/:id" element={<ProblemSolvePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;