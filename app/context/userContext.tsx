"use client"
import { useRouter } from 'next/navigation';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

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
  questionsAnswered?: QuestionAnswered[];

};

interface UserContextProps {
  user: UserWithToken | null;
  setUser: React.Dispatch<React.SetStateAction<UserWithToken | null>>;
  fetchUser: () => Promise<void>;
  login: (email:string, password:string) => Promise<void>;
  logout: () => Promise<void>;
  addCorrectQuestion: (question: Question) => Promise<void>;
  addIncorrectQuestion: (question: Question) => Promise<void>;
}

const initialState: UserContextProps = {
  user: null,
  setUser: () => {},
  fetchUser: async () => {},
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

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserWithToken | null>(null);
const router = useRouter()

  useEffect(() => {
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }
  }, []); 

  const fetchUser = async () => {
    try {
      const response = await fetch('/api/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${user?.token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const fetchedUser = await response.json();
      setUser(fetchedUser);
      console.log(fetchedUser);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
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
    localStorage.setItem('user', JSON.stringify(data));
  };

  const logout = async (): Promise<void> => {
    setUser(null);
    localStorage.removeItem('user');
  };


  const addCorrectQuestion = (question: Question): Promise<void> => {
    return new Promise((resolve) => {
      if (user) {
        const updatedQuestions = [
          ...(user.questionsAnswered || []),
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
          ...(user.questionsAnswered || []),
          { _id: question._id, isCorrect: false },
        ];
        setUser({ ...user, questionsAnswered: updatedQuestions });
      }
      resolve(); 
    });
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, fetchUser, setUser, addCorrectQuestion,
      addIncorrectQuestion}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
