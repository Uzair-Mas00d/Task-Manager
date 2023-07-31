import { NextResponse } from "next/server";

export function GET(request, { params }) {
  const { userid, postid } = params
  console.log('userid',userid);
  console.log('postid',postid);
  return NextResponse.json(params);
}
