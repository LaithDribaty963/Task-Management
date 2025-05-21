import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useProjects } from './hooks/useProjects';
import ProjectList from './components/ProjectList';
import AddProject from './components/AddProject';
import { Project } from './services/projectService';

const ProjectsModule: React.FC = () => {
  const { t } = useTranslation('common');
  const { projects, addProject, deleteProject, updateProject } = useProjects();
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    // يمكنك لاحقًا إضافة نافذة تعديل متقدمة
  };

  return (
    <div>
      <h1>{t('projectsModuleTitle')}</h1>
      <AddProject onAdd={addProject} />
      <ProjectList projects={projects} onDelete={deleteProject} onEdit={handleEdit} />
    </div>
  );
};

export default ProjectsModule;