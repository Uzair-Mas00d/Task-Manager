import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { user } from "@/models/user";

export async function GET(request) {
  const authToken = request.cookies.get("authToken")?.value;
  console.log(authToken);
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  console.log(data);
  const User = await user.findById(data._id).select("-password");

  return NextResponse.json(User);
}
