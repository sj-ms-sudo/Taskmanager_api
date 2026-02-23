# Task Manager API 🚀

A robust RESTful API built with Node.js, Express, and MongoDB for managing tasks with priority levels and completion status.

## ✨ Features

- ✅ Create, Read, Update, and Delete tasks
- 🎯 Priority levels (High, Medium, Low)
- 🔍 Filter completed tasks
- ⚡ Input validation and error handling
- 📅 Automatic timestamps
- 🌐 Environment-based configuration

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **dotenv** - Environment variables

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/tasks` | Create a new task |
| GET | `/getTasks` | Get all tasks |
| GET | `/getCompleted` | Get completed tasks |
| PATCH | `/update/:id` | Update a task |
| DELETE | `/delete/:id` | Delete a task |

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB
- Postman/Thunder Client for testing

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/task-manager-api.git
   cd task-manager-apiInstall dependencies

bash
npm install
Set up environment variables
Create a .env file in the root directory:

env
PORT=3000
MONGO=your_mongodb_connection_string_here
Start the server

bash
# Development mode
npm run dev

# Production mode
npm start
📝 API Usage Examples
Create a Task
bash
POST /tasks
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the task manager API",
  "priority": "High"
}
Response
json
{
  "success": true,
  "data": {
    "title": "Complete project",
    "description": "Finish the task manager API",
    "completed": false,
    "priority": "High",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "_id": "65a3b7c8d9e5f1a2b3c4d5e6"
  },
  "message": "Task created successfully"
}
🧪 Testing
Import the provided Postman collection or use Thunder Client in VS Code to test all endpoints.

📁 Project Structure
text
task-manager-api/
├── models/
│   └── Task.js           # Task schema and model
├── .env                   # Environment variables
├── .gitignore            # Git ignore file
├── index.js              # Main application file
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
