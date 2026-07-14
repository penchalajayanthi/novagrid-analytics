import { monthlyBusinessData } from "../../../data/monthlyBusinessData";

export const getDashboardData = async () => {

  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    kpis: {
      revenue: {
        value: "$250,000",
        change: "+12.5%",
      },
      employees: {
        value: 48,
        change: "+4",
      },
      projects: {
        value: 24,
        change: "+3",
      },
      customers: {
        value: 430,
        change: "+18",
      },
    },

    revenueData: monthlyBusinessData,

    projectStatus: [
      {
        label: "Completed",
        count: 18,
        percentage: 75,
        color: "bg-green-500",
      },
      {
        label: "In Progress",
        count: 5,
        percentage: 21,
        color: "bg-blue-500",
      },
      {
        label: "Pending",
        count: 1,
        percentage: 4,
        color: "bg-yellow-500",
      },
    ],

    recentActivities: [
      {
        id: 1,
        title: "New employee joined",
        description: "Priya joined Marketing",
      },
      {
        id: 2,
        title: "Project created",
        description: "CRM Dashboard",
      },
      {
        id: 3,
        title: "New customer",
        description: "Acme Corporation",
      },
    ],
  };
};


