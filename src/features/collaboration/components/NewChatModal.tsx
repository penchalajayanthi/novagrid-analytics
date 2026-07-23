import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: (name: string) => void;
}

const NewChatModal = ({
  open,
  onClose,
  onCreate,
}: Props) => {
  const [name, setName] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

        <h2 className="mb-5 text-2xl font-bold">
          New Chat
        </h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter member name"
          className="w-full rounded-xl border p-3"
        />

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-xl border px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              if (!name.trim()) return;

              onCreate(name);

              setName("");

              onClose();
            }}
            className="rounded-xl bg-blue-600 px-5 py-2 text-white"
          >
            Start Chat
          </button>

        </div>

      </div>

    </div>
  );
};

export default NewChatModal;