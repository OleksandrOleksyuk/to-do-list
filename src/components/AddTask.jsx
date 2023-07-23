import { useState } from "react";
import Button from "./Button";
import Popup from "./Popup";

const AddTask = ({ onPopup, onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleCreateTask = () => {
    const newTask = { id: crypto.randomUUID(), title, status: "incompleted" };
    onAddTask(newTask);
    onPopup(false);
  };

  return (
    <Popup>
      <h3 className="font-semibold text-slate-700">Add new task</h3>
      <div>
        <label className="text-slate-700 text-sm">Title</label>
        <input
          className="w-full bg-white py-1 px-2 rounded-md h-8"
          type="text"
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
      </div>
      <Button styles={"bg-sky-500 text-white mr-2"} onClick={handleCreateTask}>
        Add Task
      </Button>
      <Button styles={"bg-slate-300 text-slate-700"} onClick={() => onPopup(false)}>
        Cancel
      </Button>
      <Button
        styles={"bg-slate-200 -top-14 h-8 w-8 absolute right-0"}
        onClick={() => onPopup(false)}
      >
        X
      </Button>
    </Popup>
  );
};

export default AddTask;
