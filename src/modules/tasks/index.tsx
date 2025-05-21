import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useTasks } from './hooks/useTasks';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { Task } from './services/taskService';

const TasksModule: React.FC = () => {
  const { t } = useTranslation('common');
  const { tasks, addTask, deleteTask, updateTask } = useTasks();
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    // يمكنك لاحقًا إضافة نافذة تعديل متقدمة
  };

  return (
    <div>
      <h1>{t('tasksModuleTitle')}</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={handleEdit} />
    </div>
  );
};

export default TasksModule;