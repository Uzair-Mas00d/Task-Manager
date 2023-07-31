import { user } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userid } = params;

  const User = await user.findById(userid).select("-password");
  return NextResponse.json(User);
}

export async function DELETE(request, { params }) {
  const { userid } = params;

  try {
    await user.deleteOne({
      _id: userid,
    });

    return NextResponse.json({
      message: "user deleted",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error in deleting user",
      success: false,
    });
  }
}

export async function PUT(request, { params }) {
  const { userid } = params;
  const { name, password, about, ProfileURL } = await request.json();

  try {
    const User = await user.findById(userid);
    User.name = name;
    User.about = about;
    User.password = password;
    User.ProfileURL = ProfileURL;

    const updateUser = await User.save();

    return NextResponse.json(updateUser);
  } catch (error) {
    return NextResponse.json({
      message: "Error in updating user",
      success: false,
    });
  }
}
