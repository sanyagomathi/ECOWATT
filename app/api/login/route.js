import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;

  // Demo user check
  if (email === "test@ecowatt.com" && password === "1234") {
    return NextResponse.json({ success: true, message: "Login successful" });
  }

  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  );
}
