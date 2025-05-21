import { useState } from 'react';
import { Project, getProjects, addProject, deleteProject, updateProject } from '../services/projectService';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(getProjects());

  const handleAddProject = (project: Project) => {
    addProject(project);
    setProjects(getProjects());
  };

  const handleDeleteProject = (id: string) => {
    deleteProject(id);
    setProjects(getProjects());
  };

  const handleUpdateProject = (project: Project) => {
    updateProject(project);
    setProjects(getProjects());
  };

  return {
    projects,
    addProject: handleAddProject,
    deleteProject: handleDeleteProject,
    updateProject: handleUpdateProject,
  };
}