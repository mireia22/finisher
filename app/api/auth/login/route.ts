import User from '@/lib/models/User';
import { generateToken } from '@/utils/token';
import bcrypt from 'bcryptjs';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return new Response(JSON.stringify({ message: 'All fields are required' }), { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 400 });
    }

    const token = generateToken(user._id, user.email);
    return new Response(JSON.stringify({ token, user: { name: user.name, email, id: user._id } }), { status: 200 });
  } catch (error) {
    console.error('Error login user:', error); 

    return new Response(JSON.stringify({ message: 'Error logging in' }), { status: 500 });
  }
}
