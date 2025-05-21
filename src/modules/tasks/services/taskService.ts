export type Task = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
};

let tasks: Task[] = [
  {
    id: '1',
    title: 'مهمة تجريبية',
    description: 'هذه مهمة تجريبية',
    dueDate: '2024-06-30',
    priority: 'medium',
  },
];

export function getTasks(): Task[] {
  return tasks;
}

export function addTask(task: Task): void {
  tasks = [...tasks, task];
}

export function deleteTask(id: string): void {
  tasks = tasks.filter((task) => task.id !== id);
}

export function updateTask(updatedTask: Task): void {
  tasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
}