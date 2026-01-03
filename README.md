# 🏛️ LawLens — AI-Powered Legal Use Case Explorer

LawLens is a single-iteration, AI-powered web application that helps users understand **which laws, regulations, and legal steps apply to a real-life situation**.  
Users describe their scenario, and the system returns a **clear, structured legal overview** using a Large Language Model (LLM).

⚠️ This tool is designed for **educational awareness only** and does **not provide legal advice**.

---

## ✨ Key Features

- 🧠 AI-powered interpretation of real-world use cases  
- 📜 Identifies relevant laws and regulations  
- ✅ Lists mandatory legal steps  
- 🎯 Simple, focused user experience  
- 🌙 Modern dark-themed UI  
- 🔒 Secure backend (no API keys exposed)

---

## 🧩 Example Use Cases

- Purchasing a new car in India  
- Starting an online business  
- Renting a residential property  
- Buying property in another country  

---

## 🏗️ System Architecture

```
Frontend (Vite + HTML/CSS/JS)
        |
        |  POST /analyze
        ↓
Backend (Node.js + Express)
        |
        |  LLM API request
        ↓
Groq LLM (llama-3.1-8b-instant)
```

---

## 🧠 AI Integration

- Uses a **free LLM API (Groq)** to avoid billing constraints.
- Backend sends the user’s use case to the model using a structured prompt.
- Model responds with:
  - Relevant laws
  - Mandatory steps
  - Additional notes

### Model Used
```
llama-3.1-8b-instant
```

The system is **model-agnostic** and can switch models without architectural changes.

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS (Dark Theme)
- Vanilla JavaScript
- Vite

### Backend
- Node.js
- Express
- Groq SDK
- dotenv
- CORS

---

## 🔐 Security Considerations

- API keys stored in `.env`
- `.env` and `node_modules` excluded via `.gitignore`
- No secrets exposed to frontend
- Backend acts as a secure proxy

---

## 🚀 How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/svnsaisathvik/legal-usecase-checker.git
cd legal-usecase-checker
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` inside `backend/`:

```env
GROQ_API_KEY=your_groq_api_key_here
PORT=3000
```

Start backend:

```bash
npm start
```

Backend runs at:
```
http://localhost:3000
```

---

### 3️⃣ Frontend Setup

```bash
npm install
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

---

### 4️⃣ Using the Application

1. Open frontend URL  
2. Enter a real-life situation  
3. Click **Check Applicable Laws**  
4. View AI-generated legal overview  

---

## ⚠️ Limitations

- AI responses may be outdated or incomplete
- Laws vary by jurisdiction
- Not a substitute for professional legal advice

---

## 📝 AI Code Assessment (Summary)

AI accelerated development by assisting with backend logic, prompt design, and structured response generation. During development, multiple models were deprecated by the provider, requiring configuration changes without modifying system architecture. This highlights the importance of treating AI as an assistive tool rather than a definitive authority, particularly in legal contexts.

---

## 📄 Disclaimer

This application is intended for **educational purposes only** and does not constitute legal advice.

---

## 👤 Author

**Sathvik**  
B.Tech Undergraduate  
AI & Web Development Enthusiast
