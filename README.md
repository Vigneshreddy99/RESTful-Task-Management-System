# RESTful Task Management System

A full-stack web application for managing daily tasks efficiently with complete CRUD functionality.

## Features

- CRUD Operations On Tasks
- Error Handling And Validation
- Toast Messages On CRUD Operations using react-toastify
- Axios For API Handling
- Modular Backend Architecture
- Optimized MongoDB Queries
- Clean and Well-Commented Code

## Tech Stack

### Frontend
- React.js
- Axios
- React-Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API

## Project Structure

```
TaskManagementSystem/
│
├── backend/
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── TaskForm.js
│   │   │   ├── TaskList.js
│   │   │   └── TaskItem.js
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
│
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB installed (local or MongoDB Atlas account)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Update `.env` file with your MongoDB connection string
   - Default: `MONGO_URI=mongodb://localhost:27017/taskmanagement`

4. Start backend server:
```bash
npm start
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Open a new terminal and navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start frontend application:
```bash
npm start
```

Frontend will run on `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Fetch All Tasks |
| POST | /api/tasks | Create New Task |
| PUT | /api/tasks/:id | Update Task |
| DELETE | /api/tasks/:id | Delete Task |

## Working Flow

1. User enters task details in frontend
2. React frontend sends API request using Axios
3. Express.js backend receives request
4. MongoDB stores or updates task data
5. Backend sends response to frontend
6. Frontend updates UI dynamically
7. Toast messages display operation status

## Future Enhancements

- User Authentication using JWT
- Task Categories and Priorities
- Search and Filter Functionality
- Dark Mode UI
- Deployment using Render/Vercel
- Real-Time Updates using Socket.io

## License

ISC
