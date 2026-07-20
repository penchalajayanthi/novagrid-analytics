export interface Purchase {
  id: number;
  order: string;
  value: number;
  date: string;
  status: "Completed" | "Pending" | "Cancelled";
}

export interface Support {
  openTickets: number;
  sla: "On Track" | "Delayed";
}

export interface Note {
  id: number;
  user: string;
  message: string;
  createdAt: string;
}

export interface Customer {
  id: number;

  company: string;
  logo: string;

  contactName: string;
  email: string;
  phone: string;

  website: string;
  address: string;

  segment:
    | "Enterprise"
    | "SMB"
    | "Startup";

  health:
    | "Healthy"
    | "Watch"
    | "At Risk";

  lifetimeValue: number;

  lastActivity: string;

  tags: string[];

  purchaseHistory: Purchase[];

  support: Support;

  notes: Note[];
}