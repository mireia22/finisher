import { connectToDB } from "@/lib/db";
import User from "@/lib/models/User";
import { verifyToken } from "@/utils/token";
import { NextRequest, NextResponse } from "next/server";

export const isAuth = async (req: NextRequest) => {

  await connectToDB()
    const token = req.headers.get('authorization')?.split(' ')[1];
    console.log("Received token:", token);

  
    if (!token) {
      console.log("No token provided");
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
  
    try {
      const decoded = verifyToken(token) as { id: string };
      console.log("Decoded Token:", decoded);
      const user = await User.findById(decoded.id).select('-password');
  
      if (!user) {
        console.log("User not found"); 
        return NextResponse.json({ message: 'User not found' }, { status: 404 });
      }
      console.log("token in isauth", token)
      console.log("user in isauth", user)
      return user;
      
    } catch (error) {
      console.error("Error in authentication middleware:", error); 
      return NextResponse.json({ message: 'Invalid token' }, { status: 403 });
    }
  };
  