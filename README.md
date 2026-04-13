# Smart Task Dashboard

A modern task management application built with React, Vite, and React-Bootstrap. Features Context API for state management, local storage for data persistence, and analytics with charts.

## Features

- **Task Management**: Add, edit, delete, and update task statuses (To Do, In Progress, Done)
- **Data Persistence**: Tasks are saved automatically to local storage
- **Responsive UI**: Built with React-Bootstrap for mobile-friendly design
- **Analytics**: View completion rates and task distribution with interactive charts
- **Clean Architecture**: Modular components and reusable code structure

## Tech Stack

- React 19
- TypeScript
- Vite
- React-Bootstrap
- React Router DOM
- Recharts
- Context API

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
+-- components/
¦   +-- Analytics.tsx      # Analytics page with charts
¦   +-- Home.tsx           # Home page with task lists
¦   +-- TaskForm.tsx       # Form for adding new tasks
¦   +-- TaskItem.tsx       # Individual task component
¦   +-- TaskList.tsx       # List of tasks by status
+-- context/
¦   +-- TaskContext.tsx    # Context API for task management
+-- App.tsx                # Main app component with routing
+-- main.tsx               # App entry point
+-- index.css              # Global styles
```

## Usage

- **Home Page**: View tasks organized by status. Add new tasks using the form at the top.
- **Analytics Page**: See completion statistics and task distribution charts.
- Tasks are automatically saved to your browser's local storage.

## Build

To build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```
