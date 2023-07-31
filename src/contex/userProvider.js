"use client";

import React, { useEffect, useState } from "react";
import UserContex from "./userContex";
import { toast } from "react-toastify";
import { httpAxios } from "@/helper/HttpHelper";
import { currentUser } from "@/services/UserService";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function load() {
      try {
        const logUser = await currentUser();
        console.log(logUser);
        setUser({ ...logUser });
      } catch (error) {
        console.log(error);
        // toast.error("error in loading current user");
        setUser(undefined);
      }
    }
    if (!user) {
      load();
    }
  }, []);

  return (
    <UserContex.Provider value={{ user, setUser }}>
      {children}
    </UserContex.Provider>
  );
};

export default UserProvider;
