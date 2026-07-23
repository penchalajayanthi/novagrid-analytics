import {
  teamMembers,
  chats,
  messages,
  sharedFiles,
  collaborationStats,
} from "../data/collaboration";

export const collaborationService = {
  getMembers: async () => {
    return Promise.resolve(teamMembers);
  },

  getChats: async () => {
    return Promise.resolve(chats);
  },

  getMessages: async () => {
    return Promise.resolve(messages);
  },

  getFiles: async () => {
    return Promise.resolve(sharedFiles);
  },

  getStats: async () => {
    return Promise.resolve(collaborationStats);
  },
};