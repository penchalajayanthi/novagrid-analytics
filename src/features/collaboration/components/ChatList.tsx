import type {
  Chat,
} from "../types/collaboration.types";

interface Props {
  chats: Chat[];
  activeChatId: number;
  onSelect: (chat: Chat) => void;
}

const ChatList = ({
  chats,
  activeChatId,
  onSelect,
}: Props) => {
  return (
    <div className="flex h-[650px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="border-b p-5">
        <h2 className="text-lg font-bold text-slate-800">
          Chats
        </h2>
      </div>

      {/* Chat List */}

      <div className="flex-1 overflow-y-auto">

        {chats.map((chat) => (

          <div
            key={chat.id}
            onClick={() => onSelect(chat)}
            className={`flex cursor-pointer items-center gap-4 border-b p-4 transition
            ${
              activeChatId === chat.id
                ? "bg-blue-50"
                : "hover:bg-slate-50"
            }`}
          >

            {/* Avatar */}

          <div className="relative">
  <img
    src={chat.avatar}
    className="h-12 w-12 rounded-full object-cover"
  />

  {chat.online && (
    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"/>
  )}
</div>

            {/* Chat Info */}

            <div className="min-w-0 flex-1">

              <div className="flex items-center justify-between gap-2">

                <h3 className="truncate font-semibold text-slate-800">
                  {chat.name}
                </h3>

                {chat.unread > 0 && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                    {chat.unread}
                  </span>
                )}

              </div>

              <p className="mt-1 truncate text-sm text-slate-500">
                {chat.lastMessage}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default ChatList;