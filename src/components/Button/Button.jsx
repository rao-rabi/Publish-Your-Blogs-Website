import './Button.css'
export default function Button({
  children,
  type = "button",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <div className='wrap'>
    <button
    type={type}
      className={`px-4 py-2 rounded-lg ${textColor} ${className} bt`}
      {...props}
    >
      {children}
    </button>
    </div>
  );
}