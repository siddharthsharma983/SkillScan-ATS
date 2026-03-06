.

🚀 SkillScan ATS – FitSense Engine

AI-Powered Resume Analysis System that simulates real-world Applicant Tracking System (ATS) evaluation logic.

🌐 Live Demo
https://skill-scan-ats-coral.vercel.app

📌 Project Overview

SkillScan ATS is a full-stack web application designed to replicate how modern Applicant Tracking Systems evaluate resumes against job descriptions.

The system:

Analyzes uploaded resumes (PDF / TXT)

Extracts job description keywords

Calculates ATS compatibility score

Provides structured recruiter-style feedback

This project demonstrates real-world deployment, API integration, and resume-to-role intelligent matching logic.

🎯 Problem It Solves

Many candidates apply for jobs without knowing if their resume matches the job description.

SkillScan ATS helps by:

Evaluating resume relevance

Detecting keyword alignment

Providing ATS compatibility score

Generating structured feedback

It simulates the first screening layer used by recruiters.

🧠 Core Workflow

Resume file is uploaded

Resume text is parsed

Job description keywords are extracted

Matching ratio is calculated

ATS score is generated

Recommendation message is returned

Scoring dynamically adjusts based on:

Fresher / Experienced mode

Years of experience

Keyword density comparison

🛠 Tech Stack
💻 Frontend

React.js

Axios

Responsive CSS

FormData-based file upload

⚙️ Backend

Node.js

Express.js

Multer (file handling middleware)

Custom ATS scoring engine

🚀 Deployment

Frontend → Vercel

Backend → Render

Production API integration

✨ Key Features

📄 Resume Upload (PDF / TXT)

📋 Job Description Matching

📊 ATS Compatibility Score

👨‍💼 Fresher & Experienced Evaluation

⚡ Real-time API Response

🌍 Fully Deployed Production Version

🏗 Architecture
User → React Frontend → Axios API Call → Express Backend
→ Resume Parsing → Keyword Matching Engine → Score Generation
→ Response → UI Rendering
📂 Project Structure
SkillScan-ATS/
│
├── client/        # React Frontend
├── server/        # Express Backend
└── README.md
🔗 API Endpoint

POST /api/analyze

Form Data

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
Backend
cd server
npm install
npm start

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
