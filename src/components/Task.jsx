import { HiOutlineDotsVertical } from "react-icons/hi";

export const Task = ({ task }) => {
  return (
    <div className="bg-white my-7 border rounded-md">
      <div className="flex item-center p-5 border-b border-gray-100">
        <img
          src={task.profileImg}
          alt={task.name}
          className="h-12 rounded-full object-cover border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{task.username}</p>
        <HiOutlineDotsVertical className="h-5 cursor-pointer" />
      </div>
      <img src={task.image} alt={task.title} className="object-cover w-full" />
      <p className="p-5 truncate">
        <span>{task.username}</span>
        {task.title}
      </p>
    </div>
  );
};
