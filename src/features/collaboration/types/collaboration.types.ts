export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  avatar: string;
  status: "Online" | "Away" | "Offline";
}

export interface Message {
  id: number;
  senderId: number;
  sender: string;
  avatar: string;
  message: string;
  time: string;
  isMine: boolean;
}

export interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  unread: number;
  online: boolean;
}

export interface SharedFile {
  id: number;
  name: string;
  size: string;
  uploadedBy: string;
  uploadedAt: string;
}

export interface CollaborationStats {
  totalMembers: number;
  onlineMembers: number;
  totalMessages: number;
  sharedFiles: number;
}