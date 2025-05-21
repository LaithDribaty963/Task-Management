import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Task } from '../services/taskService';

type AddTaskProps = {
  onAdd: (task: Task) => void;
};

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
  const { t } = useTranslation('common');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !dueDate) return;
    onAdd({
      id: Date.now().toString(),
      title,
      description,
      dueDate,
      priority,
    });
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{t('tasks.addTaskTitle')}</h2>
      <input
        type="text"
        placeholder={t('tasks.taskTitle')}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder={t('tasks.taskDescription')}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value as any)}>
        <option value="low">{t('tasks.priorityLow')}</option>
        <option value="medium">{t('tasks.priorityMedium')}</option>
        <option value="high">{t('tasks.priorityHigh')}</option>
      </select>
      <button type="submit">{t('common.add')}</button>
    </form>
  );
};

export default AddTask;