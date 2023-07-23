const Button = ({ children, onClick, styles }) => {
  return (
    <button onClick={onClick} className={`px-2 py-1 px- rounded-lg ${styles}`}>
      {children}
    </button>
  );
};

export default Button;
