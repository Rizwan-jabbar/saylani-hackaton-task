function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-block px-4 py-2 border bg-blue-300 overflow-hidden group rounded w-fit ${className}`}
    >
      {/* Hover background */}
      <div className="absolute top-0 left-0 w-full h-0 bg-green-300 group-hover:h-full transition-all duration-300 z-0"></div>

      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export default Button;
