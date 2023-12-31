"use client";

import UserContex from "@/contex/userContex";
import { logout } from "@/services/UserService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const CustomNavbar = () => {
  const contex = useContext(UserContex);
  const router = useRouter()

  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      contex.setUser(undefined);
      router.push('/')
    } catch (error) {
      console.log(error);
      toast.error('Logout error')
    }
  }

  return (
    <nav className="bg-green-500 h-16 py-2 px-36 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <a href="#">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          {contex.user && (
            <>
              <li>
                <Link href={"/"} className="hover:text-green-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/add-task" className="hover:text-green-200">
                  Add Task
                </Link>
              </li>
              <li>
                <Link href="/show-task" className="hover:text-green-200">
                  Show Task
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
          {contex.user && (
            <>
              <li>
                <Link href="#">{contex.user.name}</Link>
              </li>
              <li>
                <Link href="#" onClick={doLogout}>
                  Logout
                </Link>
              </li>
            </>
          )}
          {!contex.user && (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
