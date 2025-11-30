# Task Manager API

A compact Node.js and Express backend application designed to manage tasks. This project demonstrates core backend fundamentals including routing, middleware, controllers, and RESTful API design patterns.

## Description

The Task Manager API is a starter project for helping me refresh fundamentals in Node.js and Express. I worked with essential concepts: request handling, modular structure, HTTP methods, and clean project organization. This foundation reinforces how Node servers work and how Express frameworks shape backend development.

## Project Structure

```
nodeEX/
├── app.js                    # Main application entry point
├── package.json              # Project dependencies & scripts
├── .env.example              # Environment variables template
├── README.md                 # Project documentation
├── controllers/
│   └── tasks.js              # Task business logic handlers
├── routes/
│   └── task.js               # Task route definitions
└── public/                   # Frontend assets
    ├── index.html            # Main HTML page
    ├── task.html             # Task page
    ├── browser-app.js        # Browser JavaScript
    ├── edit-task.js          # Task editing logic
    ├── main.css              # Custom styles
    └── normalize.css         # CSS normalization
```

## Tools & Technologies

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for routing & middleware
- **Mongoose** - MongoDB object modeling (configured, not yet used)
- **Dotenv** - Environment variable management
- **Nodemon** - Development auto-reload tool

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd 01-task-manager
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create `.env` file from template
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your configuration

### Running the Server

```bash
npm start
```

The server will start at `http://localhost:3000` and automatically reload on file changes (via nodemon).

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |
| GET | `/api/v1/tasks` | Get all tasks |
| POST | `/api/v1/tasks` | Create a new task |
| GET | `/api/v1/tasks/:id` | Get single task by ID |
| PUT | `/api/v1/tasks/:id` | Update task by ID |
| DELETE | `/api/v1/tasks/:id` | Delete task by ID |

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/taskmanager
```

## Development Notes

- Controllers handle business logic
- Routes define API endpoints
- Middleware processes requests (JSON parsing enabled)
- Follow REST principles for API design
