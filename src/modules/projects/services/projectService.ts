export type Project = {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'onHold';
};

let projects: Project[] = [
  {
    id: '1',
    name: 'مشروع تجريبي',
    description: 'هذا مشروع تجريبي',
    startDate: '2024-06-01',
    endDate: '2024-07-01',
    status: 'active',
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function addProject(project: Project): void {
  projects = [...projects, project];
}

export function deleteProject(id: string): void {
  projects = projects.filter((project) => project.id !== id);
}

export function updateProject(updatedProject: Project): void {
  projects = projects.map((project) => (project.id === updatedProject.id ? updatedProject : project));
}