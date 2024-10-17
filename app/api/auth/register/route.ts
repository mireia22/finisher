import { connectToDB } from "@/lib/db";
import User from "@/lib/models/User";
import { generateToken } from "@/utils/token";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
await connectToDB()
  try {
    const { name, email, password, role } = await req.json();
    console.log('Request data:', { name, email, password, role });
    if (!name || !email || !password) {
      return new Response(JSON.stringify({ message: 'All fields are required' }), { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: 'Email already registered' }), { status: 400 });
    }

    const newUser = new User({ name, email, password,  role: role || 'user'});
    await newUser.save();

    const token = generateToken(newUser._id, newUser.email);
    return new Response(JSON.stringify({ token, user: { name, email } }), { status: 201 });
  } catch (error) {
    console.error('Error registering user:', error); 
    return new Response(JSON.stringify({ message: 'Error registering user' }), { status: 500 });
  }
}
