"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/userContext";
import { useRouter } from "next/navigation";

const Practice = () => {
  const router = useRouter(); 
  const [categoriesWithCount, setCategoriesWithCount] = useState<{ category: string; count: number }[]>([]);
  const [failedQuestionsCount, setFailedQuestionsCount] = useState<number | null>(null);
  const [correctQuestionsCount, setCorrectQuestionsCount] = useState<number | null>(null);
  const [allQuestionsCount, setAllQuestionsCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const { user, fetchUser } = useUserContext();

  // Retrieve user ID and token
  const userId = user?.user.id 
  const token = user?.token 

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (user && user.token) {
      fetchUser(user); 
    }
  }, []);

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/practice/category/count', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, 
          },
        });

        const questions = await response.json();
        setCategoriesWithCount(questions);
      } catch (error) {
        console.error('Error fetching topics:', error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchCategories();
    }
  }, [token]);

  // Fetch Failed Questions Count
  useEffect(() => {
    const fetchFailedQuestionsCount = async () => {
      try {
        if (!userId) {
          throw new Error('User ID is required.');
        }

        const response = await fetch('/api/practice/failed/count', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'userId': userId as string,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch failed questions');
        }

        const data = await response.json();
        setFailedQuestionsCount(data.failedQuestionsCount);
      } catch (error) {
        console.error('Error fetching failed questions:', error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchFailedQuestionsCount();
    }
  }, [token, userId]);

  // Fetch Correct Questions Count
  useEffect(() => {
    const fetchCorrectQuestionsCount = async () => {
      try {
        if (!userId) {
          throw new Error('User ID is required.');
        }

        const response = await fetch('/api/practice/correct/count', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, 
            'userId': userId as string,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch correct questions');
        }

        const data = await response.json();
        setCorrectQuestionsCount(data.correctQuestionsCount);
      } catch (error) {
        console.error('Error fetching correct questions:', error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchCorrectQuestionsCount();
    }
  }, [token, userId]);

  useEffect(() => {
    const fetchAllQuestionsCount = async () => {
      try {
        if (!userId) {
          throw new Error('User ID is required.');
        }

        const response = await fetch('/api/practice/all/count', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Add Authorization header with token
            'userId': userId as string,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch all questions');
        }

        const data = await response.json();
        setAllQuestionsCount(data.allQuestionsCount);
      } catch (error) {
        console.error('Error fetching all questions:', error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchAllQuestionsCount();
    }
  }, [token, userId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-4">
      <h3>PRACTICAR</h3>
      <div className="flex flex-col gap-1">
        <Link href="/practice/all" className="p-2 flex items-center justify-center gap-1 bg-cyan-800 rounded-md text-white font-semibold text-center ">
          Todas
          <p className="text-sm">({allQuestionsCount})</p>
        </Link>
        <div className="grid grid-cols-2 gap-1">
          <Link href="/practice/failed" className="p-2 bg-red-800 rounded-md text-white font-semibold flex flex-col items-center justify-center">
            Falladas ({failedQuestionsCount})        
          </Link>
          <Link href="/practice/correct" className="p-2 bg-green-700 rounded-md text-white font-semibold flex items-center justify-center">
            Acertadas
            <p className="text-sm">({correctQuestionsCount})</p>
          </Link>
        </div>
      </div>
      <span>Por temas:</span>
      <div className="flex flex-col gap-2 justify-center">
        {categoriesWithCount.map(({ category, count }) => (
          <Link
            key={category}
            href={`practice/category/${encodeURIComponent(category)}`}
            className="p-2 bg-yellow-600 rounded-md text-white font-semibold flex gap-1 items-center justify-center"
          >
            <p>{category.toUpperCase()}</p>
            <p className="text-sm">({count})</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Practice;
