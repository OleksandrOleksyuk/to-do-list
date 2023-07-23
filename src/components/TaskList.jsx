import Task from "./Task";

const TaskList = ({ toDoList, onDelete, filter, onCompleted }) => {
  toDoList.map((l) => console.log(l.status, filter));
  const filteredList = filter === "all" ? toDoList : toDoList.filter((el) => el.status === filter);
  console.log(filteredList);
  const noTodosMessage = "No Todos";

  if (filteredList.length === 0) {
    return (
      <div className="flex justify-center">
        <button className="bg-slate-200 p-1 rounded-lg">{noTodosMessage}</button>
      </div>
    );
  }

  return (
    <>
      {filteredList.map((el) => {
        return <Task key={el.id} {...el} onDelete={onDelete} onCompleted={onCompleted} />;
      })}
    </>
  );
};

export default TaskList;
