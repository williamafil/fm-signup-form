import React from "react";

const BaseInput = ({ type = "text", propName, placeholder }) => {
  return (
    <input
      type={type}
      id={propName}
      name={propName}
      className="w-full text-sm text-blue-dark font-semibold rounded-md py-4 pl-5 border border-blue-grayish focus:outline-none focus:ring-1 focus:ring-blue-dark focus:border-transparent"
      placeholder={placeholder}
    />
  );
};

export default BaseInput;
