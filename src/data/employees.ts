import type { Employee } from "../features/employees/types/employee.types";

export const employees: Employee[] = [
  {
  id: 1,
  avatar: "PS",
  name: "Priya Sharma",
  email: "priya@novagrid.com",
  phone: "9876543210",
  address: "Hyderabad",
  manager: "Amit Kumar",
  role: "Manager",
  department: "Marketing",
  location: "Hyderabad",
  status: "Active",
  employmentType: "Full Time",
  joinDate: "12 Jan 2024",

  salary: {
    band: "A",
    basic: 50000,
    hra: 10000,
    allowance: 5000,
    bonus: 5000,
    net: 70000,
    history: [],
  },

  leave: {
    annual: 20,
    sick: 10,
    casual: 5,
    history: [],
  },

  attendance: {
    present: 220,
    absent: 5,
    leave: 10,
  },

  performance: {
    q1: 90,
    q2: 88,
    q3: 92,
    q4: 94,
  },

  skills: [
    {
      name: "Marketing",
      level: 90,
    },
  ],
},
  {
  id: 2,
  avatar: "RV",
  name: "Rahul Verma",
  email: "rahul@novagrid.com",
  phone: "9876543211",
  address: "Bengaluru",
  manager: "Neha Kapoor",
  role: "Frontend Developer",
  department: "Development",
  location: "Bengaluru",
  status: "Active",
  employmentType: "Full Time",
  joinDate: "08 Mar 2023",

  salary: {
    band: "B",
    basic: 45000,
    hra: 9000,
    allowance: 4000,
    bonus: 6000,
    net: 64000,
    history: [],
  },

  leave: {
    annual: 18,
    sick: 10,
    casual: 5,
    history: [],
  },

  attendance: {
    present: 235,
    absent: 4,
    leave: 8,
  },

  performance: {
    q1: 88,
    q2: 90,
    q3: 91,
    q4: 93,
  },

  skills: [
    {
      name: "React",
      level: 95,
    },
    {
      name: "TypeScript",
      level: 90,
    },
  ],
},
{
  id: 3,
  avatar: "SR",
  name: "Sneha Reddy",
  email: "sneha@novagrid.com",
  phone: "9876543212",
  address: "Hyderabad",
  manager: "Rajesh Gupta",
  role: "HR Executive",
  department: "HR",
  location: "Hyderabad",
  status: "Inactive",
  employmentType: "Full Time",
  joinDate: "21 Jul 2022",

  salary: {
    band: "C",
    basic: 40000,
    hra: 8000,
    allowance: 3500,
    bonus: 4500,
    net: 56000,
    history: [],
  },

  leave: {
    annual: 20,
    sick: 12,
    casual: 6,
    history: [],
  },

  attendance: {
    present: 210,
    absent: 12,
    leave: 18,
  },

  performance: {
    q1: 82,
    q2: 84,
    q3: 86,
    q4: 85,
  },

  skills: [
    {
      name: "Recruitment",
      level: 92,
    },
    {
      name: "Employee Relations",
      level: 88,
    },
  ],
},
{
  id: 4,
  avatar: "AP",
  name: "Arjun Patel",
  email: "arjun@novagrid.com",
  phone: "9876543213",
  address: "Pune",
  manager: "Anita Rao",
  role: "Accountant",
  department: "Finance",
  location: "Pune",
  status: "Active",
  employmentType: "Full Time",
  joinDate: "17 Sep 2023",

  salary: {
    band: "B",
    basic: 47000,
    hra: 9500,
    allowance: 4200,
    bonus: 5000,
    net: 65700,
    history: [],
  },

  leave: {
    annual: 18,
    sick: 10,
    casual: 5,
    history: [],
  },

  attendance: {
    present: 228,
    absent: 6,
    leave: 9,
  },

  performance: {
    q1: 87,
    q2: 89,
    q3: 90,
    q4: 91,
  },

  skills: [
    {
      name: "Accounting",
      level: 94,
    },
    {
      name: "Excel",
      level: 90,
    },
  ],
},
{
  id: 5,
  avatar: "MN",
  name: "Meera Nair",
  email: "meera@novagrid.com",
  phone: "9876543214",
  address: "Chennai",
  manager: "Suresh Menon",
  role: "Sales Executive",
  department: "Sales",
  location: "Chennai",
  status: "Active",
  employmentType: "Full Time",
  joinDate: "03 Nov 2024",

  salary: {
    band: "C",
    basic: 42000,
    hra: 8500,
    allowance: 3800,
    bonus: 7000,
    net: 61300,
    history: [],
  },

  leave: {
    annual: 16,
    sick: 8,
    casual: 4,
    history: [],
  },

  attendance: {
    present: 198,
    absent: 5,
    leave: 7,
  },

  performance: {
    q1: 91,
    q2: 93,
    q3: 94,
    q4: 95,
  },

  skills: [
    {
      name: "Sales",
      level: 95,
    },
    {
      name: "Negotiation",
      level: 92,
    },
  ],
},
];