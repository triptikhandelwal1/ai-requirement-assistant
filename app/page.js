"use client";
import { useState } from "react";

export default function Home() {
  const [idea, setIdea] = useState("");
  const [requirements, setRequirements] = useState("");
  const [loading, setLoading] = useState(false);

   const generateRequirements = () => {
  if (!idea.trim()) {
    alert("Please enter a project idea");
    return;
  }

  setLoading(true);

  setTimeout(() => {
    const output = `
PROJECT OVERVIEW
----------------
${idea}

FUNCTIONAL REQUIREMENTS
-----------------------
- User authentication (login/signup)
- Role-based access (admin/user)
- Core feature implementation based on idea
- Responsive UI for mobile & desktop

TECH STACK
----------
- Frontend: Next.js (React)
- Backend: Node.js (API routes)
- Database: MongoDB / PostgreSQL
    `;

    setRequirements(output);
    setLoading(false);
  }, 1500);
};

  return (
  <main
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f3f4f6",
      fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    }}
  >
    <div
  style={{
    width: "100%",
    maxWidth: "700px",
    backgroundColor: "#ffffff",
    padding: "32px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  }}
>
      <h1
  style={{
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "8px",
    background: "linear-gradient(90deg, #2563eb, #7c3aed)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  AI Requirement Assistant
</h1>
      <p
  style={{
    color: "#4b5563",
    fontSize: "15px",
    marginBottom: "20px",
  }}
>
  Describe your project idea and get structured, AI-generated technical
  requirements in seconds.
</p>

      <textarea
  placeholder="Example: Build a food delivery app with user login, payments, and admin panel"
  value={idea}
  onChange={(e) => setIdea(e.target.value)}
  style={{
    width: "100%",
    height: "140px",
    padding: "14px",
    fontSize: "14px",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    outline: "none",
    resize: "none",
  }}
></textarea>
<p style={{ fontSize: "12px", color: "#6b7280", marginTop: "6px" }}>
  Tip: Be specific about features, users, and platform.
</p>

      <br />

      <button
        onClick={generateRequirements}
        style={{
  marginTop: "16px",
  padding: "10px 18px",
  fontSize: "14px",
  backgroundColor: "#2563eb",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.2s ease",
boxShadow: "0 8px 16px rgba(37, 99, 235, 0.25)",
}}
      >
        Generate Technical Requirements
      </button>

      {requirements && (
  <pre
  style={{
    marginTop: "28px",
    padding: "20px",
    backgroundColor: "#f9fafb",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    whiteSpace: "pre-wrap",
    fontSize: "13px",
    lineHeight: "1.6",
    color: "#111827",
  }}
>
    {requirements}
  </pre>
)}
<p
  style={{
    marginTop: "36px",
    textAlign: "center",
    fontSize: "13px",
    color: "#6b7280",
    fontStyle: "italic"
  }}
>
  Built by <strong>Tripti Khandelwal</strong>
</p>
     </div>   
    </main>
  );
}