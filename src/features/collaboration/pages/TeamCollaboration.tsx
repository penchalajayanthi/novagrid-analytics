import { useEffect, useState } from "react";

import CollaborationHeader from "../components/CollaborationHeader";
import TeamStats from "../components/TeamStats";
import OnlineMembers from "../components/OnlineMembers";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";
import SharedFiles from "../components/SharedFiles";
import NewChatModal from "../components/NewChatModal";

import { useCollaboration } from "../hooks/useCollaboration.";

import type {
  Chat,
  Message,
} from "../types/collaboration.types";

const TeamCollaboration = () => {
  const {
    members,
    chats: initialChats,
    files,
    stats,
    loading,
  } = useCollaboration();

  const [chatOpen, setChatOpen] =
    useState(false);

  const [chatList, setChatList] =
    useState<Chat[]>([]);

  const [activeChatId, setActiveChatId] =
    useState(1);

  const [chatMessages, setChatMessages] =
    useState<Record<number, Message[]>>({
      1: [
        {
          id: 1,
          senderId: 1,
          sender: "Matthew",
          avatar: "",
          message: "Good morning 👋",
          time: "09:30 AM",
          isMine: false,
        },
        {
          id: 2,
          senderId: 0,
          sender: "You",
          avatar: "",
          message: "Good morning!",
          time: "09:31 AM",
          isMine: true,
        },
        {
          id: 3,
          senderId: 1,
          sender: "Matthew",
          avatar: "",
          message:
            "Today's meeting starts at 11 AM.",
          time: "09:32 AM",
          isMine: false,
        },
      ],

      2: [
        {
          id: 4,
          senderId: 2,
          sender: "Amya",
          avatar: "",
          message:
            "Did you finish the dashboard?",
          time: "10:00 AM",
          isMine: false,
        },
        {
          id: 5,
          senderId: 0,
          sender: "You",
          avatar: "",
          message: "Almost finished 👍",
          time: "10:02 AM",
          isMine: true,
        },
      ],

      3: [
        {
          id: 6,
          senderId: 3,
          sender: "David",
          avatar: "",
          message:
            "Let's schedule a meeting.",
          time: "02:30 PM",
          isMine: false,
        },
      ],
    });

  useEffect(() => {
    setChatList(initialChats);

    if (initialChats.length > 0) {
      setActiveChatId(initialChats[0].id);
    }

    setChatMessages((prev) => {
      const updated = { ...prev };

      initialChats.forEach((chat) => {
        if (!updated[chat.id]) {
          updated[chat.id] = [
            {
              id: Date.now() + chat.id,
              senderId: chat.id,
              sender: chat.name,
              avatar: chat.avatar,
              message: `Hi! I'm ${chat.name}.`,
              time: "09:00 AM",
              isMine: false,
            },
            {
              id: Date.now() + chat.id + 100,
              senderId: 0,
              sender: "You",
              avatar: "",
              message: "Hello 👋",
              time: "09:01 AM",
              isMine: true,
            },
          ];
        }
      });

      return updated;
    });
  }, [initialChats]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      senderId: 0,
      sender: "You",
      avatar: "",
      message: text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isMine: true,
    };

    setChatMessages((prev) => ({
      ...prev,
      [activeChatId]: [
        ...(prev[activeChatId] || []),
        userMessage,
      ],
    }));

    setChatList((prev) =>
      prev.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              lastMessage: text,
            }
          : chat
      )
    );

    const typingMessage: Message = {
      id: Date.now() + 100,
      senderId: 999,
      sender: "Nova Assistant",
      avatar: "",
      message: "Typing...",
      time: "",
      isMine: false,
    };

    setChatMessages((prev) => ({
      ...prev,
      [activeChatId]: [
        ...(prev[activeChatId] || []),
        typingMessage,
      ],
    }));

    setTimeout(() => {
      let reply =
        "Thanks for your message!";
              const msg = text.toLowerCase();

      if (msg.includes("hi") || msg.includes("hello"))
        reply = "Hi 👋 How are you?";

      else if (msg.includes("how are you"))
        reply = "I'm doing great 😊";

      else if (msg.includes("meeting"))
        reply = "Meeting starts tomorrow at 10:00 AM.";

      else if (msg.includes("project"))
        reply = "The project is progressing well.";

      else if (msg.includes("deadline"))
        reply = "Deadline is Friday.";

      else if (msg.includes("thanks"))
        reply = "You're welcome 😊";

      else if (msg.includes("bye"))
        reply = "Bye 👋 Have a nice day!";

      const botMessage: Message = {
        id: Date.now() + 1,
        senderId: 999,
        sender: "Nova Assistant",
        avatar: "",
        message: reply,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isMine: false,
      };

      setChatMessages((prev) => ({
        ...prev,
        [activeChatId]: [
          ...(prev[activeChatId] || []).filter(
            (m) => m.message !== "Typing..."
          ),
          botMessage,
        ],
      }));

      setChatList((prev) =>
        prev.map((chat) =>
          chat.id === activeChatId
            ? {
                ...chat,
                lastMessage: reply,
              }
            : chat
        )
      );
    }, 1200);
  };

  return (
    <div className="space-y-8">

      <CollaborationHeader
        onNewChat={() => setChatOpen(true)}
      />

      <TeamStats
        stats={stats}
        loading={loading}
      />

      <OnlineMembers members={members} />

      <div className="grid gap-6 xl:grid-cols-4">

        <ChatList
          chats={chatList}
          activeChatId={activeChatId}
          onSelect={(chat) => {
            setActiveChatId(chat.id);

            setChatList((prev) =>
              prev.map((c) =>
                c.id === chat.id
                  ? {
                      ...c,
                      unread: 0,
                    }
                  : c
              )
            );
          }}
        />

        <div className="xl:col-span-2 flex flex-col">

          <ChatWindow
            messages={
              chatMessages[activeChatId] || []
            }
          />

          <MessageInput
            onSend={sendMessage}
          />

        </div>

        <SharedFiles files={files} />

      </div>

      <NewChatModal
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        onCreate={(name) => {

          const id = Date.now();

          const newChat: Chat = {
            id,
            name,
            avatar: `https://i.pravatar.cc/150?u=${name}`,
            lastMessage: "New Conversation",
            unread: 0,
            online: true,
          };

          setChatList((prev) => [
            newChat,
            ...prev,
          ]);

          setChatMessages((prev) => ({
            ...prev,
            [id]: [
              {
                id: Date.now(),
                senderId: id,
                sender: name,
                avatar: "",
                message: `Hi! I'm ${name}.`,
                time: "Now",
                isMine: false,
              },
            ],
          }));

          setActiveChatId(id);

          setChatOpen(false);
        }}
      />

    </div>
  );
};

export default TeamCollaboration;