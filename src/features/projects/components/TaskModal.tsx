import {
    FiX,
    FiCalendar,
    FiFlag,
    FiCheckSquare,
    FiMessageSquare,
} from "react-icons/fi";
import { useState } from "react";
import type { Task } from "../types/project.types";

interface Props {
    task: Task;
    onClose: () => void;
}

const priorityColors = {
    Low: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    High: "bg-orange-100 text-orange-700",
    Critical: "bg-red-100 text-red-700",
};

const TaskModal = ({
    task,
    onClose,
}: Props) => { 

    const [comment, setComment] = useState("");

const [comments, setComments] = useState(
    task.comments
);
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">

            <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl">

                {/* Header */}

                <div className="flex items-center justify-between border-b px-6 py-5">

                    <div>

                        <h2 className="text-2xl font-bold">
                            {task.title}
                        </h2>

                        <p className="mt-2 text-slate-500">
                            {task.description}
                        </p>

                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 hover:bg-slate-100"
                    >
                        <FiX size={22} />
                    </button>

                </div>

                {/* Body */}

                <div className="space-y-6 p-6">

                    {/* Status */}

                    <div className="grid grid-cols-2 gap-5">

                        <div>

                            <label className="text-xs uppercase text-slate-500">
                                Status
                            </label>

                            <div className="mt-2">
                                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                                    {task.status}
                                </span>
                            </div>

                        </div>

                        <div>
                            <label className="text-xs uppercase text-slate-500">
                                Priority
                            </label>

                            <div className="mt-2 flex items-center gap-2">
                                <FiFlag className="text-slate-500" />

                                <span
                                    className={`rounded-full px-3 py-1 text-sm font-medium ${priorityColors[task.priority]
                                        }`}
                                >
                                    {task.priority}
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Due Date */}

                    <div>

                        <label className="text-xs uppercase text-slate-500">
                            Due Date
                        </label>

                        <div className="mt-2 flex items-center gap-2">

                            <FiCalendar />

                            {task.dueDate}

                        </div>

                    </div>

                    {/* Assignees */}

                    <div>

                        <label className="text-xs uppercase text-slate-500">
                            Assignees
                        </label>

                        <div className="mt-3 flex gap-3">

                            {task.assignees.map((member) => (

                                <div
                                    key={member.id}
                                    className="flex items-center gap-2 rounded-lg border px-3 py-2"
                                >

                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="h-9 w-9 rounded-full"
                                    />

                                    <span>{member.name}</span>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Checklist */}

                    <div>

                        <div className="mb-3 flex items-center gap-2">

                            <FiCheckSquare />

                            <h3 className="font-semibold">
                                Checklist
                            </h3>

                        </div>

                        <div className="space-y-3">

                            {task.checklist.map((item) => (

                                <label
                                    key={item.id}
                                    className="flex items-center gap-3"
                                >

                                    <input
                                        type="checkbox"
                                        checked={item.completed}
                                        readOnly
                                    />

                                    {item.title}

                                </label>

                            ))}

                        </div>

                    </div>

                    <div className="mt-8">

    <h3 className="mb-4 text-lg font-semibold">
        Activity
    </h3>

    <div className="space-y-3 max-h-56 overflow-y-auto">

        {comments.map((item)=>(
            <div
                key={item.id}
                className="rounded-xl bg-slate-100 p-3"
            >

                <div className="flex justify-between">

                    <h4 className="font-semibold">
                        {item.user}
                    </h4>

                    <span className="text-xs text-slate-500">
                        {item.createdAt}
                    </span>

                </div>

                <p className="mt-2 text-sm">
                    {item.message}
                </p>

            </div>
        ))}

    </div>

</div> 
<div className="mt-5">

    <textarea

        value={comment}

        onChange={(e)=>
            setComment(e.target.value)
        }

        rows={3}

        placeholder="Write a comment..."

        className="
            w-full
            rounded-xl
            border
            p-3
            outline-none
            focus:border-blue-500
        "
    />

    <button

        onClick={()=>{
            if(!comment.trim()) return;

            setComments([
                {
                    id:Date.now(),
                    user:"You",
                    message:comment,
                    createdAt:new Date().toLocaleString()
                },
                ...comments
            ]);

            setComment("");
        }}

        className="
            mt-4
            rounded-xl
            bg-blue-600
            px-5
            py-2
            text-white
        "
    >

        Add Comment

    </button>

</div>

                    {/* Comments */}

                    <div>

                        <div className="mb-3 flex items-center gap-2">

                            <FiMessageSquare />

                            <h3 className="font-semibold">
                                Activity
                            </h3>

                        </div>

                        <div className="space-y-4">

                            {task.comments.map((comment) => (

                                <div
                                    key={comment.id}
                                    className="rounded-xl border p-4"
                                >

                                    <div className="flex items-center justify-between">

                                        <span className="font-semibold">
                                            {comment.user}
                                        </span>

                                        <span className="text-xs text-slate-500">
                                            {comment.createdAt}
                                        </span>

                                    </div>

                                    <p className="mt-2 text-slate-600">
                                        {comment.message}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default TaskModal;