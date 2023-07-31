import { NextResponse } from "next/server";

export const getResponseMessage = (messages, statusCode, successStatus) => {
  return NextResponse.json(
    {
      message: messages,
      success: successStatus,
    },
    {
      status: statusCode,
    }
  );
};
