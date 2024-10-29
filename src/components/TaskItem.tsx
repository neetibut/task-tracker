// TaskItem.tsx
import { useState } from "react";
import { Task } from "../App";

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
}

function TaskItem({ task, onDelete, onEdit }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  // Toggle between edit mode and view mode
  const handleEditClick = () => setIsEditing(true);

  const handleSaveClick = () => {
    onEdit(task.id, editText); // Save the edited text
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditText(task.text); // Reset text to original
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center p-2 bg-white border rounded-md shadow-sm mb-2">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 p-1 mr-2 border rounded"
        />
      ) : (
        <p>{task.text}</p>
      )}

      <div className="flex space-x-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSaveClick}
              className="text-green-500 hover:text-green-700"
            >
              Save
            </button>
            <button
              onClick={handleCancelClick}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEditClick}
              className="text-blue-500 hover:text-blue-700"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskItem;
