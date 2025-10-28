# MindWell - Mental Health Web Platform Prototype

This project is a high-fidelity front-end prototype for "MindWell," a mental health support platform for college students. It is built as a single-page application using HTML, Tailwind CSS, and vanilla JavaScript.

The application now includes a Node.js backend server to securely handle API calls to a Large Language Model (LLM) for the chatbot feature.

## Features

- **Login Page**: Separate login flows for "Student" and "Admin" roles.
- **Student Dashboard**: The main application with resources, booking, and community features.
- **Admin Dashboard**: A static mock-up of an admin interface with analytics and user management tables.
- **AI-Powered Chatbot**: A chat widget that connects to a backend to provide dynamic responses from an LLM.

## Setup and Installation

The project requires a simple Node.js server to run the chatbot functionality.

### 1. Install Dependencies

First, install the necessary Node.js packages:
```bash
npm install
```

### 2. Create Environment File

You need to create a `.env` file in the root of the project to store your secret API key and custom prompt for the LLM.

Create a file named `.env` and add the following content, replacing the placeholder values with your actual credentials and prompt:

```
# .env file

# Your Gemini API Key
GEMINI_API_KEY="YOUR_API_KEY_HERE"

# The custom prompt for the chatbot
CUSTOM_PROMPT="You are a friendly and supportive mental health assistant for college students. Your name is MindWell. Keep your responses concise, empathetic, and helpful. Do not provide medical advice."
```

**Important**: The `.gitignore` file is configured to prevent the `.env` file from being committed to version control, keeping your secrets safe.

### 3. Run the Server

Once you have installed the dependencies and created your `.env` file, you can start the server:

```bash
npm start
```

This will launch the server, and you can access the application by navigating to `http://localhost:3000` in your web browser.
