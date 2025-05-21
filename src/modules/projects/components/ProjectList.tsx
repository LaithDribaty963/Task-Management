import React from 'react';
import { useTranslation } from 'next-i18next';
import { Project } from '../services/projectService';

type ProjectListProps = {
  projects: Project[];
  onDelete: (id: string) => void;
  onEdit: (project: Project) => void;
};

const ProjectList: React.FC<ProjectListProps> = ({ projects, onDelete, onEdit }) => {
  const { t } = useTranslation('common');
  return (
    <div>
      <h2>{t('projectListTitle')}</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.name}</strong> - {project.description} - {project.startDate} - {project.endDate} - {t(`status${project.status.charAt(0).toUpperCase() + project.status.slice(1)}`)}
            <button onClick={() => onEdit(project)}>{t('edit')}</button>
            <button onClick={() => onDelete(project.id)}>{t('delete')}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;