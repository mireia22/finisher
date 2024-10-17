"use client"
import { usePathname, useRouter } from 'next/navigation';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import LoginPage from '../login/page';

export type Answer = {
  text: string;
  explanation:string
}

export type Question = {
  _id: string | null;
  statement: string | null;
  category: string | null;
  image: string | null;
  correctAnswer: Answer;
  incorrectAnswers: Answer[];
}

export type QuestionAnswered = {
  _id: string | null;
  isCorrect: boolean | null;
}

export type User = {
  id: string | null;
  name: string | null;
  email: string | null;
  password: string | null;
  questionsAnswered?: QuestionAnswered[];
  setUser?: React.Dispatch<React.SetStateAction<User>> | null;
};

export type UserWithToken = {
  token: string;
  user: User;
  

};

interface UserContextProps {
  user: UserWithToken | null;
  setUser: React.Dispatch<React.SetStateAction<UserWithToken | null>>;
  fetchUser: (user: UserWithToken) => Promise<void>;
  register: (name:string, email:string, password:string) => Promise<void>;
  login: (email:string, password:string) => Promise<void>;
  logout: () => Promise<void>;
  addCorrectQuestion: (question: Question) => Promise<void>;
  addIncorrectQuestion: (question: Question) => Promise<void>;
}

const initialState: UserContextProps = {
  user: null,
  setUser: () => {},
  fetchUser: async () => {},
  register: async () => {},
  login: async () => {},
  logout: async () => {},
  addCorrectQuestion: async () => {},
  addIncorrectQuestion: async () => {},
};


const AuthContext = createContext(initialState);

export const useUserContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode}) => {
  const [user, setUser] = useState<UserWithToken | null>(null);
const router = useRouter()
const pathname = usePathname()

  useEffect(() => {
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }
  }, []); 

  const fetchUser = async (user: UserWithToken) => {
    if (!user || !user.token) {
      console.error("No token found");
      return; 
    }
    
    try {
      const response = await fetch('/api/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${user.token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const { user: fetchedUser, token } = await response.json();

      setUser({ user: fetchedUser, token }); 
      localStorage.setItem('user', JSON.stringify({ user: fetchedUser, token }));

      console.log("fetched user in context", user);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  
  

  const register = async (name: string, email: string, password: string) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
  
    if (!response.ok) {
      console.error("Registration failed");
      return;
    }
  
    const newUser: UserWithToken = await response.json();
    console.log("NEW USER REGISTER", newUser);
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));

    
    router.push("/dashboard");
  };
  

  const login = async (email: string, password: string) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    const data = await response.json();

    setUser(data);
    router.push("/dashboard")

    localStorage.setItem('user', JSON.stringify(data));
  };

  
  
  const logout = async (): Promise<void> => {
    setUser(null);
    localStorage.removeItem('user');
    router.push("/")
  };




  const addCorrectQuestion = (question: Question): Promise<void> => {
    return new Promise((resolve) => {
      if (user) {
        const updatedQuestions = [
          ...(user.user.questionsAnswered || []),
          { _id: question._id, isCorrect: true },
        ];
        setUser({ ...user, questionsAnswered: updatedQuestions });
      }
      resolve(); 
    });
  };
  
  const addIncorrectQuestion = (question: Question): Promise<void> => {
    return new Promise((resolve) => {
      if (user) {
        const updatedQuestions = [
          ...(user.user.questionsAnswered || []),
          { _id: question._id, isCorrect: false },
        ];
        setUser({ ...user.user, questionsAnswered: updatedQuestions });
      }
      resolve(); 
    });
  };

  

  if (!user && pathname !== "/register" && pathname !== "/") {
    return  (
    <AuthContext.Provider value={{ user, register, login, logout, fetchUser, setUser, addCorrectQuestion,
      addIncorrectQuestion}}>
      <LoginPage/>

    </AuthContext.Provider>

  )
}
 

  return (
    <AuthContext.Provider value={{ user, register, login, logout, fetchUser, setUser, addCorrectQuestion,
      addIncorrectQuestion}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
