import React from 'react';

const BaseInput = ({type = 'text', propName, placeholder}) => {
  return (
    <input
      type={type}
      id={propName} 
      name={propName} 
      className="w-full text-sm text-gray-600 font-semibold rounded-md py-4 pl-5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent" 
      placeholder={placeholder}
    />
  );
};

export default BaseInput;