import TaskItem from "./TaskItem";

interface Task {
  id: number;
  text: string;
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
}

function TaskList({ tasks, onDelete }: TaskListProps) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

export default TaskList;
