"use client";

import React, { useState } from "react";
import Image from "next/image";
import SignUpBanner from "../../assets/signup.svg";
import { toast } from "react-toastify";
import { signUp } from "@/services/UserService";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    ProfileURL:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F105032%2Favatar&psig=AOvVaw06JRCnQ7hCf2wPuOjReFo1&ust=1690695104051000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDTn5-Ys4ADFQAAAAAdAAAAABAS",
  });

  const doSignup = async (event) => {
    event.preventDefault();
    console.log(data);

    if (data.name.trim() === "" || data.name === null) {
      toast.warning("Name is Required", {
        position: "top-center",
      });
      return;
    }

    try {
      let result = await signUp(data);
      console.log(result);
      toast.success("User is Registered", {
        position: "top-center",
      });

      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        ProfileURL:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F105032%2Favatar&psig=AOvVaw06JRCnQ7hCf2wPuOjReFo1&ust=1690695104051000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDTn5-Ys4ADFQAAAAAdAAAAABAS",
      });
    } catch (error) {
      console.log(error);
      toast.error("Signup Error " + error.response.data.message, {
        position: "top-center",
      });
    }
  };

  const resetFom = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      ProfileURL:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F105032%2Favatar&psig=AOvVaw06JRCnQ7hCf2wPuOjReFo1&ust=1690695104051000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDTn5-Ys4ADFQAAAAAdAAAAABAS",
    });
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className="py-5">
          <div className="flex justify-center m-5">
            <Image
              src={SignUpBanner}
              alt="signup banner"
              style={{
                width: "40%",
              }}
            />
          </div>
          <h1 className="text-3xl text-center">Signup Here</h1>
          <form action="" className="mt-5" onSubmit={doSignup}>
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-1 rounded-3xl bg-white focus:ring-gray-400 border border-white text-black"
                id="user_name"
                placeholder="Enter Here"
                name="user_name"
                onChange={(event) => {
                  setData({
                    ...data,
                    name: event.target.value,
                  });
                }}
                value={data.name}
              />
            </div>

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
                  setData({
                    ...data,
                    email: event.target.value,
                  });
                }}
                value={data.email}
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
                  setData({
                    ...data,
                    password: event.target.value,
                  });
                }}
                value={data.password}
              />
            </div>

            <div className="mt-3">
              <label
                htmlFor="user_about"
                className="block text-sm font-medium mb-2 ps-2"
              >
                About
              </label>
              <textarea
                className="w-full p-1 rounded-3xl bg-white focus:ring-gray-400 border border-white text-black"
                id="user_about"
                placeholder="Enter Here"
                rows={5}
                name="user_about"
                onChange={(event) => {
                  setData({
                    ...data,
                    about: event.target.value,
                  });
                }}
                value={data.about}
              ></textarea>
            </div>
            <div className="mt-3 text-center">
              <button
                type="submit"
                className="px-3 py-2 bg-green-500 rounded hover:bg-green-400"
              >
                Signup
              </button>
              <button type="button" className="px-3 py-2 bg-red-500 rounded hover:bg-red-400 ms-3" onClick={()=>resetFom()}>
                Reset
              </button>
            </div>
            {/* { JSON.stringify(data) } */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
