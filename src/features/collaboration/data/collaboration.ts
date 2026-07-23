import { faker } from "@faker-js/faker";

import type {
  TeamMember,
  Chat,
  Message,
  SharedFile,
  CollaborationStats,
} from "../types/collaboration.types";

export const teamMembers: TeamMember[] =
Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  name: faker.person.fullName(),
  role: faker.person.jobTitle(),
  department: faker.helpers.arrayElement([
    "Engineering",
    "Sales",
    "Marketing",
    "HR",
  ]),
  avatar: faker.image.avatar(),
  status: faker.helpers.arrayElement([
    "Online",
    "Away",
    "Offline",
  ]),
}));

export const chats: Chat[] =
teamMembers.map((member) => ({
  id: member.id,
  name: member.name,
  avatar: member.avatar,
  lastMessage: faker.lorem.sentence(),
  unread: faker.number.int({
    min: 0,
    max: 5,
  }),
  online: member.status === "Online",
}));

export const messages: Message[] =
Array.from({ length: 18 }, (_, index) => ({
  id: index + 1,
  senderId: faker.number.int({
    min: 1,
    max: 8,
  }),
  sender: faker.person.fullName(),
  avatar: faker.image.avatar(),
  message: faker.lorem.sentences(2),
  time: faker.date.recent().toLocaleTimeString(),
  isMine: faker.datatype.boolean(),
}));

export const sharedFiles: SharedFile[] =
Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  name: faker.system.fileName(),
  size: `${faker.number.int({
    min: 1,
    max: 20,
  })} MB`,
  uploadedBy: faker.person.fullName(),
  uploadedAt: faker.date.recent().toLocaleDateString(),
}));

export const collaborationStats: CollaborationStats = {
  totalMembers: teamMembers.length,
  onlineMembers: teamMembers.filter(
    (m) => m.status === "Online"
  ).length,
  totalMessages: messages.length,
  sharedFiles: sharedFiles.length,
};

