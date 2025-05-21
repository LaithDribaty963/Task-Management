import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Project } from '../services/projectService';

type AddProjectProps = {
  onAdd: (project: Project) => void;
};

const AddProject: React.FC<AddProjectProps> = ({ onAdd }) => {
  const { t } = useTranslation('common');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState<'active' | 'completed' | 'onHold'>('active');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !startDate) return;
    onAdd({
      id: Date.now().toString(),
      name,
      description,
      startDate,
      endDate,
      status,
    });
    setName('');
    setDescription('');
    setStartDate('');
    setEndDate('');
    setStatus('active');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{t('projects.addProjectTitle')}</h2>
      <input
        type="text"
        placeholder={t('projects.projectName')}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder={t('projects.projectDescription')}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value as any)}>
        <option value="active">{t('projects.statusActive')}</option>
        <option value="completed">{t('projects.statusCompleted')}</option>
        <option value="onHold">{t('projects.statusOnHold')}</option>
      </select>
      <button type="submit">{t('common.add')}</button>
    </form>
  );
};

export default AddProject;