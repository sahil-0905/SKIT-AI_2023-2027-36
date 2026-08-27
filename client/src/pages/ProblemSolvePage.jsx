import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

function ProblemSolvePage() {
  const { id } = useParams();
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// write your code here");
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/problems/${id}`,
        );
        setProblem(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProblem();
  }, [id]);

  const languages = [
    { label: "JavaScript", value: "javascript" },
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
    { label: "C++", value: "cpp" },
  ];

  if (!problem) {
    return <div className="min-h-screen bg-bg text-text p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-bg p-6 flex gap-6">
      <div className="w-1/3 bg-panel border border-border rounded-2xl p-6">
        <h2 className="text-text font-bold text-lg mb-2">{problem.title}</h2>
        <span className="text-xs text-muted mb-4 inline-block">
          {problem.topic} · {problem.difficulty}
        </span>
        <p className="text-muted text-sm whitespace-pre-line">
          {problem.description}
        </p>
        {/* Test cases section - naya add karna hai */}
        <h3 className="text-text font-semibold text-sm mb-3">
          Sample Test Cases
        </h3>
        {problem.testCases
          .filter((tc) => !tc.isHidden)
          .map((tc, index) => (
            <div
              key={index}
              className="bg-input border border-border rounded-lg p-3 mb-2 text-xs"
            >
              <p className="text-muted mb-1">
                <span className="font-semibold text-text">Input:</span>{" "}
                {tc.input}
              </p>
              <p className="text-muted">
                <span className="font-semibold text-text">
                  Expected Output:
                </span>{" "}
                {tc.expectedOutput}
              </p>
            </div>
          ))}
      </div>

      <div className="flex-1 bg-panel border border-border rounded-2xl overflow-hidden flex flex-col">
        <div className="flex justify-between items-center px-4 py-2 border-b border-border">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-input border border-border text-text text-sm rounded-lg px-3 py-1.5 outline-none"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
          <button className="bg-accent text-white text-sm font-bold px-4 py-1.5 rounded-lg">
            Run
          </button>
        </div>
        <Editor
          height="80vh"
          language={language}
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value)}
        />
      </div>
    </div>
  );
}

export default ProblemSolvePage;
