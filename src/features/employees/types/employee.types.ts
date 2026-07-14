export interface Employee {
  id: number;
  avatar: string;
  name: string;
  email: string;
  role: string;
  department: string;
  location: string;
  status: "Active" | "Inactive";
  employmentType: "Full Time" | "Part Time" | "Contract";
  joinDate: string;
}