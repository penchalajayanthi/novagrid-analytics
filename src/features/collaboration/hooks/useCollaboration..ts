import {
  useEffect,
  useState,
} from "react";

import { collaborationService } from "../services/collaborationService";

import type {
  TeamMember,
  Chat,
  Message,
  SharedFile,
  CollaborationStats,
} from "../types/collaboration.types";

export const useCollaboration = () => {
  const [members, setMembers] =
    useState<TeamMember[]>([]);

  const [chats, setChats] =
    useState<Chat[]>([]);

  const [messages, setMessages] =
    useState<Message[]>([]);

  const [files, setFiles] =
    useState<SharedFile[]>([]);

  const [stats, setStats] =
    useState<CollaborationStats | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      const [
        membersData,
        chatsData,
        messagesData,
        filesData,
        statsData,
      ] = await Promise.all([
        collaborationService.getMembers(),
        collaborationService.getChats(),
        collaborationService.getMessages(),
        collaborationService.getFiles(),
        collaborationService.getStats(),
      ]);

      setMembers(membersData);
      setChats(chatsData);
      setMessages(messagesData);
      setFiles(filesData);
      setStats(statsData);

      setLoading(false);
    };

    load();
  }, []);

  return {
    members,
    chats,
    messages,
    files,
    stats,
    loading,
  };
};