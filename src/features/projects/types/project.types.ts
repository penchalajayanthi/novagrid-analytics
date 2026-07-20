export type TaskStatus =
  | "Backlog"
  | "To Do"
  | "In Progress"
  | "In Review"
  | "Done";

export type Priority =
  | "Low"
  | "Medium"
  | "High"
  | "Critical";

export interface TeamMember {
  id: number;
  name: string;
  avatar: string;
}

export interface ChecklistItem {
  id: number;
  title: string;
  completed: boolean;
}

export interface Comment {
  id: number;
  user: string;
  message: string;
  createdAt: string;
}

export interface Task {
  id: number;

  title: string;

  description: string;

  status: TaskStatus;

  priority: Priority;

  assignees: TeamMember[];

  dueDate: string;

  tag: string;

  checklist: ChecklistItem[];

  comments: Comment[];
}

export interface Milestone {
  id: number;

  title: string;

  dueDate: string;

  status:
    | "Upcoming"
    | "In Progress"
    | "Done";
}

export interface Project {
  id: number;

  name: string;

  client: string;

  description: string;

  startDate: string;

  endDate: string;

  team: TeamMember[];

  milestones: Milestone[];

  tasks: Task[];
}