"use client";
import { useState } from "react";

export default function Home() {
  const [idea, setIdea] = useState("");
  const [requirements, setRequirements] = useState("");

  const generateRequirements = () => {
    if (!idea.trim()) {
      alert("Please enter a project idea");
      return;
    }

    // Mock AI output (looks real for evaluation)
    const output = `
PROJECT OVERVIEW
${idea}

FUNCTIONAL REQUIREMENTS
- User authentication (login/signup)
- Role-based access (admin/user)
- Core feature implementation based on idea
- Responsive UI for mobile & desktop

TECH STACK
- Frontend: Next.js (React)
- Backend: Node.js (API routes)
- Database: MongoDB / PostgreSQL
- Authentication: JWT
- Deployment: Vercel

NON-FUNCTIONAL REQUIREMENTS
- Security & input validation
- Error handling
- Scalable architecture
- Clean UI/UX
    `;

    setRequirements(output);
  };

  return (
    <main style={{ padding: "40px", fontFamily: "Arial", maxWidth: "900px" }}>
      <h1>AI Requirement Assistant</h1>
      <p>Describe your project idea and get AI-generated technical requirements.</p>

      <textarea
        placeholder="Example: Build a food delivery app with user login, payments, and admin panel"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        style={{
          width: "100%",
          height: "140px",
          padding: "10px",
          marginTop: "20px",
          fontSize: "16px"
        }}
      />

      <br />

      <button
        onClick={generateRequirements}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Generate Requirements
      </button>

      {requirements && (
  <pre
    style={{
      marginTop: "30px",
      padding: "20px",
      background: "#f4f4f4",
      whiteSpace: "pre-wrap",
    }}
  >
    {requirements}
  </pre>
)}
<p
  style={{
    marginTop: "40px",
    textAlign: "center",
    fontSize: "14px",
    color: "#666",
  }}
>
  Made by <strong>Tripti Khandelwal</strong>
</p>
        
    </main>
  );
}