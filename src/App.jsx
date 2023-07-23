import { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import Button from "./components/Button";

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [filter, setFilter] = useState("all");

  const handlePopup = () => {
    setOpenPopup((open) => !open);
  };

  const handleAddTask = (task) => {
    setToDoList((list) => [...list, task]);
  };

  const handleDeleteTask = (id) => {
    setToDoList((list) => list.filter((task) => task.id !== id));
  };

  const handleCompletedTask = (elId, check) => {
    setToDoList((list) =>
      list.map((task) =>
        task.id === elId && check
          ? { ...task, status: task.status === "completed" ? "incompleted" : "completed" }
          : task
      )
    );
  };

  const handleFilter = (selected) => {
    setFilter(selected);
  };

  const taskListProps = {
    toDoList,
    onDelete: handleDeleteTask,
    filter,
    onCompleted: handleCompletedTask,
  };

  return (
    <div className="w-full max-w-2xl">
      <h1 className="text-3xl font-bold text-slate-700 text-center">TODO LIST</h1>
      <div className="flex justify-between items-center w-full my-2">
        <Button styles={"bg-sky-500 text-white"} onClick={handlePopup}>
          Add Task
        </Button>
        <select
          className="p-1 px-2 bg-slate-500 text-white rounded-lg"
          value={filter}
          onChange={(evt) => handleFilter(evt.target.value)}
        >
          <option value="all">All</option>
          <option value="incompleted">Incomplete</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="bg-slate-100 px-2 py-5 rounded-lg">
        <TaskList {...taskListProps} />
      </div>
      {openPopup && <AddTask onPopup={handlePopup} onAddTask={handleAddTask} />}
    </div>
  );
};

export default App;
