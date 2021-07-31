import React, { useState } from "react";
import ErrorIcon from "../assets/images/errorIcon";
import BaseButton from "./BaseButton";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const updateFormData = (e) => {
    console.log("e: ", e.target.name);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    for (const property in formData) {
      const inputField = e.target.querySelector(`#${property}`);
      if (formData[property] === "") {
        inputField.classList.add("border-alert");
        inputField.previousElementSibling.classList.remove("hidden");
        inputField.placeholder = "";
        inputField.nextElementSibling.classList.remove("hidden");
      } else {
        inputField.classList.remove("border-alert");
        inputField.previousElementSibling.classList.add("hidden");
        inputField.nextElementSibling.classList.add("hidden");
      }
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="w-full mb-6">
          <label className="relative">
            <ErrorIcon className="absolute top-1/2 -translate-y-1/2 right-3 hidden" />
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full text-sm text-gray-600 font-semibold rounded-md py-4 pl-5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
              placeholder="First Name"
              onChange={(e) => updateFormData(e)}
            />
            <p className="absolute -bottom-9 right-1 text-cpink italic text-xs hidden">
              First Name cannot be empty
            </p>
          </label>
        </div>

        <div className="w-full mb-6">
          <label className="relative">
            <ErrorIcon className="error-icon absolute top-1/2 -translate-y-1/2 right-3 hidden" />
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full text-sm text-gray-600 font-semibold rounded-md py-4 pl-5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
              placeholder="Last Name"
              onChange={(e) => updateFormData(e)}
            />
            <p className="absolute -bottom-9 right-1 text-cpink italic text-xs hidden">
              Last Name cannot be empty
            </p>
          </label>
        </div>

        <div className="w-full mb-6">
          <label className="relative">
            <ErrorIcon className="error-icon absolute top-1/2 -translate-y-1/2 right-3 hidden" />
            <input
              type="email"
              id="email"
              name="email"
              className="w-full text-sm text-gray-600 font-semibold rounded-md py-4 pl-5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
              placeholder="Email Address"
              onChange={(e) => updateFormData(e)}
            />
            <p className="absolute -bottom-9 right-1 text-red-400 italic text-xs hidden">
              Looks like this is not an email
            </p>
          </label>
        </div>

        <div className="w-full mb-6">
          <label className="relative">
            <ErrorIcon className="error-icon absolute top-1/2 -translate-y-1/2 right-3 hidden" />
            <input
              type="password"
              id="password"
              name="password"
              className="w-full text-sm text-gray-600 font-semibold rounded-md py-4 pl-5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
              placeholder="Password"
              onChange={(e) => updateFormData(e)}
            />
            <p className="absolute -bottom-9 right-1 text-red-400 italic text-xs hidden">
              Password cannot be empty
            </p>
          </label>
        </div>

        <div>
          <BaseButton type="submit" text="claim your free trial" />
        </div>
      </form>
      <p className="text-gray-400 text-xs text-center mt-3 px-4">
        By clicking the button, you are agreeing to our{" "}
        <span className="font-bold text-red-400">Terms and Services</span>
      </p>
    </>
  );
};

export default SignupForm;
