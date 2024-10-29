// TaskItem.tsx

import { Task } from "../App";

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
}

function TaskItem({ task, onDelete }: TaskItemProps) {
  return (
    <div className="flex justify-between items-center p-2 bg-white border rounded-md shadow-sm mb-2">
      <p>{task.text}</p>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
