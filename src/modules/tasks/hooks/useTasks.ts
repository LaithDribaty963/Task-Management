import { useState } from 'react';
import { Task, getTasks, addTask, deleteTask, updateTask } from '../services/taskService';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(getTasks());

  const handleAddTask = (task: Task) => {
    addTask(task);
    setTasks(getTasks());
  };

  const handleDeleteTask = (id: string) => {
    deleteTask(id);
    setTasks(getTasks());
  };

  const handleUpdateTask = (task: Task) => {
    updateTask(task);
    setTasks(getTasks());
  };

  return {
    tasks,
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
    updateTask: handleUpdateTask,
  };
}