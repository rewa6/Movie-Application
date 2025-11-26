# Cinemate – Movie Ticket Booking System

<img width="1919" height="828" alt="Screenshot 2025-11-26 095658" src="https://github.com/user-attachments/assets/b171e606-991f-4199-b2e8-ab593c725aa0" />



# 📌 Overview

Cinemate is a full-stack movie ticket booking application that allows users to browse movies, select showtimes, and book tickets seamlessly. The project is built with React for the frontend and Python (Django/Flask) for the backend, ensuring a responsive UI and a robust API.

# ✅ Features

🎬 Browse movies with details like title, genre, and rating.

🕒 View available showtimes and theaters.

🎟 Book tickets and manage reservations.

🔐 User authentication and secure login.

📱 Responsive design for mobile and desktop.


**🛠 Tech Stack**

Frontend: React, HTML, CSS, JavaScript
Backend: Python (Django or Flask), REST API
Database: PostgreSQL / MySQL
Version Control: Git & GitHub


**📂 Project Structure**

Movie/

│

├── frontend/        # React app

│   ├── src/

│   └── public/

│

├── backend/         # Python backend

│   ├── migrations/

│   ├── models/

│   └── views/

│

└── README.md



**🚀 Getting Started**


**Prerequisites:**

Node.js & npm
Python 3.x
Git

**Setup**


Clone the repository:
Shellgit clone https://github.com/rewa6/Movie-Application.git
cd Movie


Frontend Setup
Shell
cd frontend
npm install
npm start


Backend Setup
Shell
cd backend
pip install -r requirements.txt
python manage.py runserver



**⚙️ Configuration**

Create a .env file for environment variables (DB credentials, API keys).
Update database settings in settings.py (for Django) or config file (Flask).


✅ .gitignore
Make sure to ignore:
**Python**
__pycache__/
*.pyc
*/migrations/

**Node**
frontend/node_modules/
frontend/build/

**Environment**
.env


**📌 Future Enhancements**

Payment gateway integration.
Seat selection feature.
Movie recommendations.


🤝 Contributing
Feel free to fork this repo and submit pull requests. For major changes, please open an issue first.
