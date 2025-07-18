# Mock Web App

This is a **mock web application** I developed to test and apply my learning in web development, UI/UX, and modern interactive technologies.

The project includes:

- ✅ A **responsive** layout with clean **UI/UX**
- ✅ Integration of **3D `.glb` models**
- ✅ A **live AI chatbot** using the **Gemini API**
- ✅ Basic **Augmented Reality (AR)** to interact with 3D content in real space

---

## 🚀 Run and Deploy Your AI Studio App

This section explains how to run the application on your local machine.

---

### 👨‍💻 For Developers

If you're a developer or already familiar with web development, you probably know the drill. Just:

```bash
npm install
# Add your GEMINI_API_KEY in a .env file
npm run dev
Open your browser and navigate to http://localhost:5173.

##🧑‍🎓 For Learners & Beginners
If you're learning how to tinker with web applications, here's a more detailed step-by-step guide to help you run the app locally:

🔧 Prerequisites
Install Node.js
Visit https://nodejs.org and download the latest LTS version. It comes with npm (Node Package Manager), which you’ll use to install project dependencies.

Clone or Download the Project

Option 1: Use Git

bash
Copy
Edit
git clone https://github.com/your-username/ai-studio-app.git
cd ai-studio-app
Option 2: Download the ZIP and extract it manually.

📦 Step 1: Install Dependencies
Run this command in the project folder:

bash
Copy
Edit
npm install
This downloads all the necessary tools and libraries the app needs to run properly. These are listed in the package.json file and are not stored directly in the project for space and version control reasons.

🔐 Step 2: Add Your Gemini API Key
To use the integrated chatbot, you'll need a Gemini API key. Here's how to set it up:

In the root folder of the project, create a file named .env

Inside the .env file, add:

env
Copy
Edit
GEMINI_API_KEY=your_actual_api_key_here
You can get an API key from Google’s Gemini platform.

🚀 Step 3: Run the Development Server
Now you're ready to launch the app!

bash
Copy
Edit
npm run dev
This command starts the server locally—usually on http://localhost:5173.

Open your browser and go to that address. You should see your web app up and running.

🧰 Tools & Technologies Used
Technology	Purpose
Node.js	Server-side JS runtime
Vite	Fast dev server + bundler
HTML/CSS/JS	Layout & styling
Three.js	3D model rendering (.glb files)
Gemini API	AI chatbot integration
AR.js / WebXR	Augmented Reality experience

```
