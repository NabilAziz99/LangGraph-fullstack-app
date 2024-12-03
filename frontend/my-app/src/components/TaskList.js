import React, { useState } from "react";

function TaskList({ tasks, onEditTask, onDeleteTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const handleEditClick = (task) => {
    setEditingTaskId(task.id); // Set the task being edited
    setEditedTitle(task.title); // Populate the form with the current title
    setEditedDescription(task.description || ""); // Populate the form with the current description
  };

  const handleSaveClick = () => {
    onEditTask(editingTaskId, { title: editedTitle, description: editedDescription });
    setEditingTaskId(null); // Reset editing state
  };

  const handleCancelClick = () => {
    setEditingTaskId(null); // Cancel editing
  };

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li key={task.id} className="list-group-item">
          {editingTaskId === task.id ? (
            <div>
              <input
                type="text"
                className="form-control mb-2"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                placeholder="Edit Task Title"
              />
              <input
                type="text"
                className="form-control mb-2"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                placeholder="Edit Description"
              />
              <button className="btn btn-success btn-sm me-2" onClick={handleSaveClick}>
                Save
              </button>
              <button className="btn btn-secondary btn-sm" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          ) : (
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <strong>{task.title}</strong>
                <p className="mb-0">{task.description}</p>
              </div>
              <div>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEditClick(task)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDeleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
