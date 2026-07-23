import {
  FiFile,
  FiDownload,
} from "react-icons/fi";

import type {
  SharedFile,
} from "../types/collaboration.types";
import { notification } from "antd";
interface Props {
  files: SharedFile[];
}

const SharedFiles = ({
  files,
}: Props) => {

    const handleDownload = (file: SharedFile) => {
  notification.success({
    message: "Download Started",
    description: `${file.name} is downloading...`,
    placement: "topRight",
    duration: 2,
  });

  // Fake download
  const link = document.createElement("a");
  link.href = "#";
  link.download = file.name;
  link.click();
};

  return (
   <div className="h-[650px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

  <div className="border-b p-5">
    <h2 className="text-lg font-bold">
      Shared Files
    </h2>
  </div>

  <div className="h-[calc(650px-72px)] divide-y overflow-y-auto">


        {files.map((file) => (

        <div
  key={file.id}
  className="flex items-center justify-between gap-3 p-5"
>
  {/* Left */}
  <div className="flex min-w-0 flex-1 items-center gap-3">

    <div className="flex-shrink-0 rounded-xl bg-blue-100 p-3">
      <FiFile className="text-blue-600" />
    </div>

    <div className="min-w-0 flex-1">

      <p className="truncate font-semibold text-slate-800">
        {file.name}
      </p>

      <p className="truncate text-sm text-slate-500">
        {file.size} • {file.uploadedBy}
      </p>

    </div>

  </div>

  {/* Right */}
  <button
  onClick={() => handleDownload(file)}
  className="rounded-lg p-2 transition hover:bg-slate-100"
>
  <FiDownload />
</button>
</div>

        ))}

      </div>

    </div>
  );
};

export default SharedFiles;