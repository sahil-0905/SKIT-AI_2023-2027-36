# FinalYear Project

A full-stack web application built using **React, Node.js, Express.js, and MongoDB**.

## 📁 Project Structure

```text
FinalYear/
│
├── Client/          # React + Vite frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
│
├── Server/          # Node.js + Express backend
│   ├── package.json
│   ├── server.js
│   └── .env
│
├── .gitignore
└── README.md
```

## 🛠️ Technologies Used

### Frontend

* React
* Vite
* JavaScript
* ESLint

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* MongoDB Atlas
* MongoDB Compass

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Move into the project directory:

```bash
cd SKIT-AI_2023-2027-36
```

---

## 2. Setup Frontend

Go to the Client folder:

```bash
cd Client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `Client` folder:

```env
VITE_API_URL=http://localhost:8080
```

Start the frontend:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

---

## 3. Setup Backend

Open another terminal and go to the Server folder:

```bash
cd Server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `Server` folder:

```env
PORT=8080
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

### MongoDB

The backend requires a MongoDB database.

You can use:

* MongoDB Atlas
* Local MongoDB

For MongoDB Atlas, add your MongoDB connection string to the `MONGO_URI` variable.

**Do not commit the `.env` file to GitHub.**

---

## 4. Start the Backend

From the `Server` folder:

```bash
npm run dev
```

If the project does not have a development script yet, use:

```bash
node server.js
```

The backend will run on:

```text
http://localhost:8080
```

---

## 🔐 Environment Variables

### Client `.env`

```env
VITE_API_URL=http://localhost:8080
```

### Server `.env`

```env
PORT=8080
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

Never upload passwords, API keys, database credentials, or other secrets to GitHub.

---

## 📦 Installing Dependencies

After cloning the project, each collaborator must install dependencies separately.

### Client

```bash
cd Client
npm install
```

### Server

```bash
cd Server
npm install
```

You do **not** need to commit `node_modules` because it is included in `.gitignore`.

---

## 🔄 Running the Project

You need two terminals.

### Terminal 1 — Backend

```bash
cd Server
npm install
npm run dev
```

### Terminal 2 — Frontend

```bash
cd Client
npm install
npm run dev
```

Then open the frontend URL shown by Vite, usually:

```text
http://localhost:5173
```

---

## 🤝 Contributing

Before starting work, pull the latest changes:

```bash
git pull origin main
```

Create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
```

After making changes:

```bash
git add .
git commit -m "Add your feature description"
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

### Example

```bash
git checkout -b feature/login
```

After completing the login feature:

```bash
git add .
git commit -m "Add login functionality"
git push origin feature/login
```

---

## ⚠️ Important Rules

1. Do not push `.env` files.
2. Do not push `node_modules`.
3. Do not commit passwords or API keys.
4. Pull the latest changes before starting new work.
5. Use a separate branch for new features.
6. Write meaningful commit messages.
7. Do not directly modify or force-push the `main` branch without team agreement.

---

## 👥 Collaborators

Add project collaborators here:

| Name           | Role      | GitHub    |
| -------------- | --------- | --------- |
| Sahil Kumar    | Developer | @username |
| Collaborator 2 | Developer | @username |
| Collaborator 3 | Developer | @username |

---
### AI Module Architecture

```text
Frontend (React)
      │
      ▼
Backend (Node.js + Express)
      │
    Axios
      │
      ▼
AI Service (FastAPI)
      │
      ├── Line Count Analysis
      ├── Function Count Analysis
      └── Complexity Analysis
      │
      ▼
JSON Response
```

### AI Service Structure

```text
ai-service/
│
├── app.py
│
└── code_analysis/
    ├── metrics.py
    └── complexity.py
```

### Current Features

- Code Line Count Analysis
- Function Count Analysis
- Basic Complexity Analysis
- FastAPI REST API
- Swagger API Documentation

### Sample Input

```python
def hello():
    print("Hello World")
```

### Sample Output

```json
{
  "lines": 2,
  "functions": 1,
  "complexity": 3
}
```

### Technologies Used

- Python
- FastAPI
- Uvicorn
- Pydantic
- Axios

### Future Enhancements

- Advanced Complexity Analysis
- AI-Based Code Review
- Coding Assistant
- Interview Feedback System
- Gemini API Integration
- Groq API Integration
- Automated Programming Suggestions

## 📌 Project Status

🚧 **Under Development**

More information about the project, features, API documentation, screenshots, and deployment instructions will be added as development progresses.

## 📄 License

This project is developed as a final-year academic project.
