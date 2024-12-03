import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const getTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const addTask = async (task) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, task);
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error.response?.data || error.message);
    throw error; // Rethrow error for further handling
  }
};


export const updateTask = async (taskId, updatedTask) => {
  const response = await axios.put(`${API_URL}/tasks/${taskId}`, updatedTask);
  return response.data;
};

export const deleteTask = async (taskId) => {
  const response = await axios.delete(`${API_URL}/tasks/${taskId}`);
  return response.data;
};
