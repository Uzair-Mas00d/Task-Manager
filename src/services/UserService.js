import { httpAxios } from "@/helper/HttpHelper";
import axios from "axios";

export async function signUp(data) {
  const result = await httpAxios
    .post("/api/users", data)
    .then((response) => response.data);

  return result;
}

export async function login(data) {
  const result = await httpAxios
    .post("/api/login", data)
    .then((response) => response.data);

  return result;
}

export async function currentUser() {
  const result = await httpAxios
    .get("/api/current")
    .then((response) => response.data);

  return result;
}

export async function logout() {
  const result = await httpAxios
    .post("/api/logout")
    .then((response) => response.data);

  return result;
}

