import { isAuth } from "@/middleware/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const user = await isAuth(req);
  
    if (!user || user instanceof NextResponse) {
      return user;
    }
  
    return NextResponse.json(user);
  }
  