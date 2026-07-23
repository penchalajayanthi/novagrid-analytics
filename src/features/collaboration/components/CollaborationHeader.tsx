import {
  FiUsers,
  FiPlus,
} from "react-icons/fi";

import Tooltip from "@mui/material/Tooltip";
interface CollaborationHeaderProps {
  onNewChat: () => void;
}

const CollaborationHeader = ({
  onNewChat,
}: CollaborationHeaderProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

            <FiUsers
              size={30}
              className="text-blue-600"
            />

          </div>

          <div>

            <h1 className="text-3xl font-bold">
              Team Collaboration
            </h1>

            <p className="mt-1 text-slate-500">
              Chat, collaborate and share files with your team.
            </p>

          </div>

        </div>

        <Tooltip title="New Chat">

         <button
    onClick={onNewChat}
    className="rounded-xl bg-blue-600 p-3 text-white hover:bg-blue-700"
>
    <FiPlus size={20}/>
</button>

        </Tooltip>

      </div>

    </div>
  );
};

export default CollaborationHeader;