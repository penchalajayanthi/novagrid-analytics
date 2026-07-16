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

  // -------------------------
  // Salary
  // -------------------------

  salary: {
    band: string;
    basic: number;
    hra: number;
    allowance: number;
    bonus: number;
    net: number;

    history: {
      date: string;
      band: string;
      amount: number;
    }[];
  };

  // -------------------------
  // Leave
  // -------------------------

  leave: {
    annual: number;
    sick: number;
    casual: number;

    history: {
      from: string;
      to: string;
      type: string;
      status: "Approved" | "Pending" | "Rejected";
    }[];
  };

  // -------------------------
  // Attendance
  // -------------------------

  attendance: {
    present: number;
    absent: number;
    leave: number;
  };

  // -------------------------
  // Performance
  // -------------------------

  performance: {
    q1: number;
    q2: number;
    q3: number;
    q4: number;
  };

  // -------------------------
  // Skills
  // -------------------------

  skills: {
    name: string;
    level: number;
  }[];
  
}