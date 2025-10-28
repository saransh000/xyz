require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve static files from the root directory

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint for the chatbot
app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;
    const geminiApiKey = process.env.GEMINI_API_KEY;
    const geminiApiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

    // Custom prompt will be retrieved from environment variables
    const customPrompt = process.env.CUSTOM_PROMPT || "You are a friendly and supportive mental health assistant for college students. Your name is MindWell. Keep your responses concise, empathetic, and helpful. Do not provide medical advice.";

    if (!userMessage) {
        return res.status(400).json({ error: 'Message is required' });
    }

    // --- Placeholder Logic ---
    // This block will be replaced by the actual API call once the key is provided.
    if (!geminiApiKey || geminiApiKey === 'YOUR_API_KEY_HERE') {
        console.log("No API key found. Returning a placeholder response.");
        // Simulate a delay
        setTimeout(() => {
            res.json({ reply: "Thank you for your message. The LLM integration is set up, but I'm waiting for a valid API key to connect to the model." });
        }, 1000);
        return;
    }

    // --- Actual Gemini API Call Logic ---
    try {
        const prompt = `${customPrompt}\n\nUser: ${userMessage}\nMindWell:`;

        const response = await axios.post(
            geminiApiUrl,
            {
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-goog-api-key': geminiApiKey
                }
            }
        );

        const botReply = response.data.candidates[0].content.parts[0].text;
        res.json({ reply: botReply.trim() });

    } catch (error) {
        console.error('Error calling Gemini API:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to get a response from the chatbot.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
