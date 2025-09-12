import { NextResponse } from "next/server";

const demoData = [
  { day: "Mon", usage: 12, renewable: 6 },
  { day: "Tue", usage: 18, renewable: 8 },
  { day: "Wed", usage: 15, renewable: 10 },
];

export async function GET() {
  return NextResponse.json(demoData);
}
