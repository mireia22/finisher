import jwt from 'jsonwebtoken';

export const generateToken = (id:string, email:string) => {
    if (!id || !email) {
        throw new Error("Email or id is missing");
      }
      console.log("JWT_SECRET:", process.env.JWT_SECRET);
  return jwt.sign({ id, email }, process.env.JWT_SECRET ||'', { expiresIn: '1d' });
  
};

export const verifyToken = (token: string) => {
    if (!token) {
      throw new Error("Token is missing");
    }
    
    try {
      return jwt.verify(token, process.env.JWT_SECRET || '');
    } catch (error) {
      console.error("Token verification failed:", error);
      throw new Error("Token verification failed");
    }
  };
  
