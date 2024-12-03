import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks, addTask, updateTask, deleteTask } from "./api/api";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();
      setTasks(response.tasks || []);
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (task) => {
    const response = await addTask(task);
    if (response.success) {
      setTasks([...tasks, response.task]);
    }
  };

  const handleEditTask = async (taskId, updatedTask) => {
    const response = await updateTask(taskId, updatedTask);
    if (response.success) {
      setTasks(
        tasks.map((task) => (task.id === taskId ? response.task : task))
      );
    }
  };

  const handleDeleteTask = async (taskId) => {
    const response = await deleteTask(taskId);
    if (response.success) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  return (
    <div className="task-container">
      <Header />
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
