import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Health check
app.get("/", (req, res) => {
  res.send("Groq backend is running");
});

// Core API
app.post("/analyze", async (req, res) => {
  try {
    const { usecase } = req.body;

    if (!usecase) {
      return res.status(400).json({ error: "Use case is required" });
    }

    const prompt = `
You are a legal information assistant for Indian laws.

Given the following real-life situation, identify the applicable Indian laws and explain the required legal steps.

Situation:
"${usecase}"

Respond strictly in this structure:
1. Relevant Laws
2. Mandatory Legal Steps
3. Additional Notes

Keep it simple, educational, and non-advisory.
`;

    const completion = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [
            {
            role: "system",
            content: "You explain Indian laws clearly in simple, structured language."
            },
            {
            role: "user",
            content: usecase
            }
        ],
        temperature: 0.3
    });




    res.json({
      result: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Groq API error" });
  }
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
