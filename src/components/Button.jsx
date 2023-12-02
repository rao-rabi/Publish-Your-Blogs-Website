export default function Button({
  children,
  type = "button",
  bgcolor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
    type={type}
      className={`px-4 py-2 rounded-lg ${bgcolor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}