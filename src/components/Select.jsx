import { forwardRef, useId } from "react";

const Select = ({ label, options, ...props, className }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className=""></label>}
      <select
        name=""
        id={id}
        ref={ref}
        {...props}
        className={`px-3 py-2 rounded bg-white text-black outline-none focus:bg-gray-50 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => {
          <option key={option} value={option}>
            {option}
          </option>;
        })}
      </select>
    </div>
  );
};

export default forwardRef(Select);
