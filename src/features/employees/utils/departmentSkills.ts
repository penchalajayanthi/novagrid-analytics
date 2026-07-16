export const departmentSkills: Record<
  string,
  { name: string; level: number }[]
> = {
  Engineering: [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 92 },
    { name: "Node.js", level: 88 },
    { name: "MongoDB", level: 82 },
    { name: "Docker", level: 80 },
    { name: "Git", level: 90 },
    { name: "REST API", level: 87 },
  ],

  HR: [
    { name: "Recruitment", level: 94 },
    { name: "Payroll", level: 85 },
    { name: "Onboarding", level: 91 },
    { name: "Communication", level: 96 },
    { name: "Employee Relations", level: 90 },
    { name: "Performance Management", level: 84 },
  ],

  Marketing: [
    { name: "SEO", level: 90 },
    { name: "Content Marketing", level: 92 },
    { name: "Google Analytics", level: 85 },
    { name: "Email Marketing", level: 80 },
    { name: "Brand Strategy", level: 88 },
    { name: "Social Media", level: 94 },
  ],

  Sales: [
    { name: "CRM", level: 92 },
    { name: "Negotiation", level: 95 },
    { name: "Lead Generation", level: 90 },
    { name: "Salesforce", level: 84 },
    { name: "Presentation", level: 89 },
    { name: "Customer Relationship", level: 93 },
  ],

  Finance: [
    { name: "Accounting", level: 95 },
    { name: "Financial Analysis", level: 92 },
    { name: "Excel", level: 96 },
    { name: "Budget Planning", level: 88 },
    { name: "Taxation", level: 90 },
    { name: "SAP", level: 82 },
  ],
};