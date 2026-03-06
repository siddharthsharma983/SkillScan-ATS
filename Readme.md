🚀 SkillScan ATS – FitSense Engine

AI-Powered Resume Analysis System that simulates real-world Applicant Tracking System (ATS) evaluation logic.

🌐 Live Demo:
https://skill-scan-ats-coral.vercel.app

📌 Project Overview

SkillScan ATS is a full-stack web application designed to replicate how modern Applicant Tracking Systems evaluate resumes against job descriptions.

The system analyzes uploaded resumes and calculates an ATS compatibility score using keyword matching logic and structured evaluation rules.

This project demonstrates:

Real-world full stack architecture

File handling & parsing

API-based frontend-backend integration

Production deployment setup

Resume-to-role intelligent matching simulation

🎯 Problem It Solves

Most candidates don’t know whether their resume matches a job description before applying.

SkillScan ATS helps by:

Evaluating resume relevance

Detecting keyword alignment

Providing ATS compatibility score

Giving structured feedback

This simulates the first screening layer used by recruiters.

🧠 Core Logic

Resume file is uploaded (.pdf / .txt)

Resume text is extracted

Job description keywords are parsed

Matching ratio is calculated

Score is generated

Recommendation message is returned

The scoring engine dynamically adjusts evaluation based on:

Fresher / Experienced mode

Years of experience input

Keyword density comparison

🛠 Tech Stack
Frontend

React.js

Axios

Responsive UI with CSS

FormData-based file upload handling

Backend

Node.js

Express.js

Multer (file handling middleware)

Custom ATS scoring engine logic

Deployment

Frontend: Vercel

Backend: Render

Production API Integration

✨ Key Features

📄 Resume Upload (PDF / TXT)

📋 Job Description Matching

📊 ATS Compatibility Score

👨‍💼 Fresher & Experienced Evaluation

⚡ Real-time API Response

🌍 Fully Deployed Production Version

🔗 Live Frontend connected to Live Backend

🏗 Architecture

User → React Frontend → Axios API Call → Express Backend
→ Resume Parsing → Keyword Matching Engine → Score Generation
→ Response → UI Rendering
This clearly separates frontend presentation from backend processing logic.

📂 Project Structure

SkillScan-ATS/
│
├── client/        # React Frontend
├── server/        # Express Backend
└── README.md

🔗 API Endpoint

POST /api/analyze

Form Data Parameters

resume (file)

jobDescription (text)

experienceLevel (fresher / experienced)

years (optional)

📊 Example Response

{
  "atsScore": 82,
  "message": "Strong match for the provided role.",
  "engine": "FitSense Engine v1.0"
}

🖥 Local Setup
Clone Repository

git clone https://github.com/your-username/SkillScan-ATS.git
cd SkillScan-ATS

Runs on:
http://localhost:5000

Frontend

cd client
npm install
npm start

Runs on:
http://localhost:3000

💡 Why This Project Is Important

✔ Demonstrates real production deployment
✔ Shows API integration skills
✔ Implements practical resume evaluation logic
✔ Handles file upload & processing
✔ Uses clean separation of concerns
✔ Full-stack deployment pipeline

This is not just a UI project —
It includes backend logic, scoring system, and real hosting setup.

👨‍💻 Author

Siddharth Sharma
Full Stack Developer

⭐ If You Found This Useful

Give the repository a star and share feedback.
