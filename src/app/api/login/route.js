import { user } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const User = await user.findOne({
      email: email,
    });
    if (User == null) {
      throw new Error("User not Found");
    }

    const matched = bcrypt.compareSync(password, User.password);
    if (!matched) {
      throw new Error("Password not Matched");
    }

    const token = jwt.sign(
      {
        _id: User._id,
        name: User.name,
      },
      process.env.JWT_KEY
    );

    const response = NextResponse.json({
      message: "Login success",
      success: true,
      user: User,
    });
    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
