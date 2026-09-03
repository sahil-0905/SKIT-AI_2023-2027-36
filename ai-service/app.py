from fastapi import FastAPI
from pydantic import BaseModel

from code_analysis.metrics import count_lines, count_functions
from code_analysis.complexity import get_complexity

app = FastAPI()


class CodeRequest(BaseModel):
    code: str


@app.get("/")
def home():
    return {"message": "AI Service Running"}


@app.post("/analyze")
def analyze_code(request: CodeRequest):
    code = request.code

    return {
        "lines": count_lines(code),
        "functions": count_functions(code),
        "complexity": get_complexity(code)
    }