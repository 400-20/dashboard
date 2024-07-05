"use client"
import React, { useState } from "react";

const SignupWithPassword = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    if (buttonDisabled) return;
    setLoading(true);

    // Your signup logic here
    // ...

    setLoading(false);
  };

  return (<div className="w-full h-[100vh ]">
    <form className="flex flex-col items-center justify-center w-1/2">
      <label className="block mb-2" htmlFor="name">
        Name
      </label>
      <input
        className="w-full p-2 pl-10 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-600 text-gray-700"
        id="name"
        type="text"
        value={fields.name}
        onChange={(e) => setFields({ ...fields, name: e.target.value })}
        placeholder="Name"
      />
      <label className="block mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="w-full p-2 pl-10 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-600 text-gray-700"
        id="email"
        type="email"
        value={fields.email}
        onChange={(e) => setFields({ ...fields, email: e.target.value })}
        placeholder="Email"
      />
      <label className="block mb-2" htmlFor="username">
        Username
      </label>
      <input
        className="w-full p-2 pl-10 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-600 text-gray-700"
        id="username"
        type="text"
        value={fields.username}
        onChange={(e) => setFields({ ...fields, username: e.target.value })}
        placeholder="Username"
      />
      <label className="block mb-2" htmlFor="password">
        Password
      </label>
      <input
        className="w-full p-2 pl-10 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-600 text-gray-700"
        id="password"
        type="password"
        value={fields.password}
        onChange={(e) => setFields({ ...fields, password: e.target.value })}
        placeholder="Password"
      />
      <label className="block mb-2" htmlFor="confirmPassword">
        Confirm Password
      </label>
      <input
        className="w-full p-2 pl-10 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-600 text-gray-700"
        id="confirmPassword"
        type="password"
        value={fields.confirmPassword}
        onChange={(e) => setFields({ ...fields, confirmPassword: e.target.value })}
        placeholder="Confirm Password"
      />
      <button
        onClick={handleSignup}
        className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ${buttonDisabled ? 'opacity-50' : ''} mt-4`}
        disabled={buttonDisabled}
      >
        Sign up
      </button>
    </form>
  </div>

  );
};

export default SignupWithPassword;