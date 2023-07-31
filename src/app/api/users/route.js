import { connectDb } from "@/helper/db";
import { user } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

connectDb();

export async function GET(request) {
  let users = [];

  try {
    users = await user.find().select("-password");
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to get users",
      success: false,
    });
  }

  return NextResponse.json(users);
}

export async function POST(request) {
  const { name, email, password, about, ProfileURL } = await request.json();

  const User = new user({
    name,
    email,
    password,
    about,
    ProfileURL,
  });

  try {
    User.password = bcrypt.hashSync(
      User.password,
      parseInt(process.env.BCRYPT_SALT)
    );
    console.log(User);
    const createdUser = await User.save();

    const response = NextResponse.json(User, {
      status: 201,
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create user",
        status: false,
      },
      {
        status: 500,
      }
    );
  }
}
