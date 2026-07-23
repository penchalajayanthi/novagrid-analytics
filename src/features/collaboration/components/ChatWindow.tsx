import { useEffect, useRef } from "react";

import type {
  Message,
  Chat,
} from "../types/collaboration.types";

interface Props {
  messages: Message[];
  activeChat?: Chat;
}

const ChatWindow = ({
  messages,
  activeChat,
}: Props) => {
  const bottomRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="flex h-[650px] flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="border-b p-5">

        <h2 className="text-lg font-bold">
          {activeChat?.name ?? "Conversation"}
        </h2>

        <p className="text-sm text-slate-500">
          {activeChat?.online
            ? "Online"
            : "Offline"}
        </p>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-6">

        {messages.length === 0 ? (

          <div className="flex h-full items-center justify-center text-slate-400">
            Start a new conversation 👋
          </div>

        ) : (

          <div className="space-y-4">

            {messages.map((message) => (

              <div
                key={message.id}
                className={`flex ${
                  message.isMine
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-md rounded-2xl px-4 py-3 ${
                    message.isMine
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-800"
                  }`}
                >

                  {!message.isMine && (
                    <p className="mb-1 text-xs font-semibold">
                      {message.sender}
                    </p>
                  )}

                  <p>{message.message}</p>

                  <p className="mt-2 text-right text-xs opacity-70">
                    {message.time}
                  </p>

                </div>

              </div>

            ))}

            <div ref={bottomRef} />

          </div>

        )}

      </div>

    </div>
  );
};

export default ChatWindow;