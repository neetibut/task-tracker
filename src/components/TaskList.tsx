import TaskItem from "./TaskItem";
import { Task } from "../App";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void; // Include onEdit in props
}

function TaskList({ tasks, onDelete, onEdit }: TaskListProps) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit} // Pass onEdit to TaskItem
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
