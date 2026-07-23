import { useState } from "react";
import {
  FiSend,
  FiPaperclip,
} from "react-icons/fi";

interface MessageInputProps {
  onSend: (message: string) => void;
}

const MessageInput = ({
  onSend,
}: MessageInputProps) => {
  const [message, setMessage] =
    useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="flex items-center gap-3 border border-slate-200 border-t-0 rounded-b-2xl bg-white p-5 shadow-sm">

    <button
  onClick={() =>
    alert("File upload coming soon")
  }
  className="rounded-xl border p-3 hover:bg-slate-100"
>
  <FiPaperclip />
</button>

      <input
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        placeholder="Type a message..."
        className="flex-1 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
      />

      <button
        onClick={handleSend}
        className="rounded-xl bg-blue-600 p-3 text-white transition hover:bg-blue-700"
      >

        <FiSend />

      </button>

    </div>
  );
};

export default MessageInput;