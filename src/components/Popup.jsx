const Popup = ({ children }) => {
  return (
    <>
      <div className="absolute w-screen h-screen bg-slate-500 opacity-75 top-0 left-0 flex justify-center items-center" />
      <div className="absolute w-screen h-screen top-0 left-0 flex justify-center items-center">
        <div className="max-w-96 bg-slate-200 rounded-lg relative p-4 space-y-4">{children}</div>
      </div>
    </>
  );
};

export default Popup;
