import React, { useState } from "react";

interface TaskFormProps {
  onAddTask: (task: { id: number; text: string }) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask({ id: Date.now(), text });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 p-2 border rounded-l-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm;
