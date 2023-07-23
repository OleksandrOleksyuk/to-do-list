import { useState, useEffect } from "react";
import deleteSvg from "../assets/delete.svg";

const Task = ({ title, id, status, onDelete, onCompleted }) => {
  const [check, setCheck] = useState(status === "completed");

  const handleCheck = () => {
    setCheck((check) => !check);
    onCompleted(id, !check);
  };

  return (
    <div className="flex mb-2 bg-white p-2 rounded-lg gap-2 items-center">
      <input type="checkbox" checked={check} onChange={handleCheck} />
      <div className="flex-1">
        <p className={`${check ? "line-through text-slate-600" : ""}`}>{title}</p>
      </div>
      <div className="flex gap-2">
        <img
          className="w-7 h-7 bg-slate-200 p-1 rounded-md"
          src={deleteSvg}
          onClick={() => onDelete(id)}
        />
        {/* <img className="w-7 h-7 bg-slate-200 p-1 rounded-md" src={modifySvg} /> */}
      </div>
    </div>
  );
};

export default Task;
