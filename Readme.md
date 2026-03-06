🚀 SkillScan ATS – FitSense Engine

AI-powered resume analysis system that simulates real-world Applicant Tracking System (ATS) evaluation.

🔗 Live Demo
https://skill-scan-ats-coral.vercel.app

📌 Overview

SkillScan ATS analyzes resumes against job descriptions and generates an ATS compatibility score.

It helps candidates understand how well their resume matches a specific role before applying.

✨ Features

Resume Upload (PDF / TXT)

Job Description Matching

ATS Compatibility Score

Fresher & Experienced Mode

Real-time Analysis

Fully Deployed Production Version

🛠 Tech Stack
Frontend

React.js

Axios

CSS

Backend

Node.js

Express.js

Multer

Custom Scoring Logic

Deployment

Vercel (Frontend)

Render (Backend)

🏗 Architecture

Frontend → API Call → Backend Processing → Keyword Matching → Score Generation → Response

🔗 API

POST /api/analyze

Form Data

resume

jobDescription

experienceLevel

years (optional)

🖥 Local Setup
Backend
cd server
npm install
npm start

Runs on: http://localhost:5000

Frontend
cd client
npm install
npm start

Runs on: http://localhost:3000

💡 Why This Project Matters

Demonstrates full-stack architecture

Shows API integration

Implements practical resume evaluation logic

Includes production deployment

Siddharth Sharma
Full Stack Developer
