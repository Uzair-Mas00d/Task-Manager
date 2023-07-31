"use client";

import UserContex from "@/contex/userContex";
import { login } from "@/services/UserService";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter()
  const contex = useContext(UserContex)

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginFormSubmitted = async (event) => {
    event.preventDefault();
    console.log(loginData);

    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.info("Invalid Data", {
        position: "top-center",
      });
      return;
    }

    try {
      const result = await login(loginData);
      console.log(result);
      toast.success('Logged In')

      contex.setUser(result.user)
      router.push('/profile/user')
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className="py-5"></div>

        <h1 className="text-3xl text-center">Login Here</h1>
        <form action="" onSubmit={loginFormSubmitted}>
          <div className="mt-3">
            <label
              htmlFor="user_email"
              className="block text-sm font-medium mb-2 ps-2"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full p-1 rounded-3xl bg-white focus:ring-gray-400 border border-white text-black"
              id="user_email"
              placeholder="Enter Here"
              name="user_email"
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  email: event.target.value,
                });
              }}
              value={loginData.email}
            />
          </div>

          <div className="mt-3">
            <label
              htmlFor="user_password"
              className="block text-sm font-medium mb-2 ps-2"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full p-1 rounded-3xl bg-white focus:ring-gray-400 border border-white text-black"
              id="user_password"
              placeholder="Enter Here"
              name="user_password"
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  password: event.target.value,
                });
              }}
              value={loginData.password}
            />
          </div>
          <div className="mt-3 text-center">
            <button
              type="submit"
              className="px-3 py-2 bg-green-500 rounded hover:bg-green-400"
            >
              Login
            </button>
            <button
              type="button"
              className="px-3 py-2 bg-red-500 rounded hover:bg-red-400 ms-3"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      {/* { JSON.stringify(loginData) } */}
    </div>
  );
};

export default Login;
