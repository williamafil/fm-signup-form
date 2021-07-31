import React from "react";

const BaseButton = ({ type = "button", text = "send" }) => {
  return (
    <button
      type={type}
      className="w-full py-4 rounded-md font-semibold shadow-btn bg-green uppercase active:bg-clightGreen"
    >
      {text}
    </button>
  );
};

export default BaseButton;
