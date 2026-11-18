# 🎓 DegreeGapAI — Curriculum vs Software Industry Gap Intelligence

[![Author](https://img.shields.io/badge/Author-Gurmeet499-sky.svg)](https://github.com/Gurmeet499)
[![GitHub Repository](https://img.shields.io/badge/GitHub-DegreeGapAI-181717.svg?logo=github)](https://github.com/Gurmeet499/degreegapai)
[![License](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-blue.svg?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)

> **“Discover what your degree teaches, what industry demands, and where the gap exists.”**

DegreeGapAI is an evidence-based academic and career intelligence platform designed specifically for Pakistani computer science students, university curriculum boards, and educators. It compares official undergraduate BSCS curricula against real-world software engineering job postings from Pakistan's leading tech organizations to identify, quantify, and bridge curriculum deficits.

Created by **[@Gurmeet499](https://github.com/Gurmeet499)**.

---

## ⚡ Quick Start: How to Run the Project

### 1. Clone & Run the Development Server
```bash
git clone https://github.com/Gurmeet499/degreegapai.git
cd degreegapai
npm install
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your web browser.

---

### 2. Optional: Configure Google Gemini API Key
The platform features dual-mode intelligence:
- **Default Mode (Deterministic Intelligence Engine):** Works **100% offline and sandbox-safe** out-of-the-box with zero setup, pre-loaded with verified Pakistani BSCS curricula (*HEC 2023, FAST-NUCES, NUST SEECS*) and real software vacancies (*Systems Ltd, 10Pearls, Arbisoft, Devsinc, Remotebase, Motive*).
- **Live AI Mode (Gemini 1.5 Flash):** If you'd like live agentic text generation, open the [`.env`](file:///.env) file and paste your key:
  ```env
  VITE_GEMINI_API_KEY=AIzaSy...
  ```
*(Never commit `.env` with live secrets to public repositories).*

---

### 3. Build for Production
To create an optimized production bundle:
```bash
npm run build
```
The compiled assets will be output to the `dist/` folder.

To preview the production build locally:
```bash
npm run preview
```

---

## 🧭 Platform Features & Hackathon Demo Flow

1. **🏛️ University Analysis Dashboard:**
   - Select between **HEC National Standard (2023)**, **FAST-NUCES**, or **NUST SEECS**.
   - View quantified **Overall Alignment Score (%)**.
   - Inspect the **4-Tier Classification**:
     - 🟢 **Strongly Aligned** (e.g. OOP, Data Structures, Relational SQL)
     - 🟡 **Partially Aligned** (e.g. OS concepts taught vs Docker; basic networking vs Cloud)
     - 🔴 **Missing** (e.g. TypeScript, CI/CD, Containerization, Modern Frameworks)
     - 🟣 **Emerging** (e.g. LLM API integration, Vector DBs, Redis caching)
   - Click any skill badge to open the **Evidence Drilldown Drawer** linking real job quotes to specific syllabus course excerpts.

2. **⚖️ Multi-Program University Comparison:**
   - Benchmark 2 or more Pakistani BSCS curricula side-by-side.
   - Neutral academic language (*"Observed alignment within the analyzed dataset"* without toxic "best/worst" ranking).
   - Identifies common core foundations shared across Pakistani universities.

3. **💼 Pakistani Software Job Market Explorer:**
   - Search real job listings from Systems Limited, 10Pearls, Arbisoft, Devsinc, Remotebase, and Motive.
   - Filter by technology, company, or experience level.
   - Preserves source provenance and posting dates.

4. **🚀 Student Recommendation & Bridge Engine:**
   - Converts detected gaps into prioritized learning roadmaps (`HIGH`, `MEDIUM`, `LOW` priority).
   - Generates hands-on **Portfolio Project Blueprints** with deliverables, prerequisites, and estimated hours.
   - Single-click **Export Action Report** for printing or saving.

5. **📥 Data Ingestion Dashboard:**
   - Upload or paste new Pakistani university course roadmaps or job datasets (CSV / JSON / Text).
   - Preserves source provenance and error handling without fabricating missing data.

6. **📜 Methodology & Sources:**
   - Complete 5-stage agentic workflow documentation.
   - Academic transparency disclosures with zero hallucinated statistics.

---

## 👨‍💻 Author & Repository

- **Author:** [Gurmeet (@Gurmeet499)](https://github.com/Gurmeet499)
- **Repository:** [https://github.com/Gurmeet499/degreegapai](https://github.com/Gurmeet499/degreegapai)
- **Built for:** Hackathon 2024 / DegreeGapAI Initiative
