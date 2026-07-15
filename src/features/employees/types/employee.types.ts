export interface Employee {
  id: number;

  avatar: string;

  name: string;

  email: string;

  phone: string;

  address: string;

  manager: string;

  role: string;

  department: string;

  location: string;

  status: "Active" | "Inactive";

  employmentType:
    | "Full Time"
    | "Part Time"
    | "Contract";

  joinDate: string;

  salary: number;

  leaveBalance: number;

  skills: string[];

  attendance: {
    present: number;
    absent: number;
    leave: number;
  };

  performance: {
    q1: number;
    q2: number;
    q3: number;
    q4: number;
  };
}