import React from 'react';
import { useTranslation } from 'next-i18next';
import { Task } from '../services/taskService';

type TaskListProps = {
  tasks: Task[];
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onEdit }) => {
  const { t } = useTranslation('common');
  return (
    <div>
      <h2>{t('taskListTitle')}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> - {task.description} - {task.dueDate} - {t(`tasks.priority${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}`)}
            <button onClick={() => onEdit(task)}>{t('common.edit')}</button>
            <button onClick={() => onDelete(task.id)}>{t('common.delete')}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;