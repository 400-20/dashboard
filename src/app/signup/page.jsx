"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Signup() {
  const router = useRouter()
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const handlesubmit = () => {
    router.push('/')
  }
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="h-1/2 w-1/2">
        <h2 className="text-center text-2xl font-bold mb-6">Sign Up</h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Username
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="focus:outline-none"
              >
                {passwordVisible ? <FaEyeSlash className="text-2xl mt-6" /> : <FaEye className="text-2xl mt-6" />}
              </button>
            </div>
          </div>

          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="focus:outline-none"
              >
                {confirmPasswordVisible ? <FaEyeSlash className="text-2xl mt-6" /> : <FaEye className="text-2xl mt-6"/>}
              </button>
            </div>
          </div>

          <button
          onClick={handlesubmit}
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >

              Sign up

          </button>
        </form>

        <div className="mt-6 text-center ">
          <p>
            Already have an account?{" "}
            <Link href="/" className="text-primary " >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
