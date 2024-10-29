import { useState } from "react";
import TaskForm from "./components/TaskForm";

export interface Task {
  id: number;
  text: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Function to add a new task to the task list
  const handleAddTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Task Tracker</h1>
      <TaskForm onAddTask={handleAddTask} />
      {/* Task list display will be added in Part 2 */}
    </div>
  );
}

export default App;
