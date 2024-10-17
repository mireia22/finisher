import { useState } from 'react';
import { Answer, Question, useUserContext } from '../context/userContext';
import { useRouter } from 'next/navigation';
import ScoreModal from './ScoreModal';

const SimulationQuiz = ({ questions }: { questions: Question[] }) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, Answer>>({});
  console.log("USERANSERS", userAnswers)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [score, setScore] = useState<number | null>(null); // Nuevo estado para el puntaje
  const [showScore, setShowScore] = useState(false); 
  const { addCorrectQuestion, addIncorrectQuestion, user } = useUserContext();
 const router = useRouter()


  const handleAnswerChange = (selectedAnswer: Answer) => {
    if (!isSubmitted) {
      setUserAnswers(prevAnswers => ({
        ...prevAnswers,
        [currentQuestionIndex]: selectedAnswer,
      }));
      setErrorMessage('');
    }
  };

  const handleSubmit = async () => {
    const userAnswer = userAnswers[currentQuestionIndex];

    if (!userAnswer) {
      setErrorMessage('⚠️ Selecciona una respuesta.');
      return;
    }

    setIsSubmitted(true);
    const question = questions[currentQuestionIndex];
    const isCorrect = userAnswer.text === question?.correctAnswer?.text;

    const userId = user?.user.id || localStorage.getItem('userId');
    const questionId = question._id;

    if (!userId) {
      setErrorMessage('⚠️ No se pudo encontrar el ID del usuario.');
      return;
    }

    try {
      const response = await fetch(isCorrect ? '/api/quiz/addCorrect' : '/api/quiz/addIncorrect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, questionId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error submitting answer:', errorData);
        return;
      }

      if (isCorrect) {
        addCorrectQuestion(question);
      } else {
        addIncorrectQuestion(question);
      }
    } catch (error) {
      console.error('Error submitting answer:', error);
      setErrorMessage('Failed to submit answer.');
    }
  };

  const handleCloseModal = () => {
    setShowScore(false);
  };

  const handleFinalSubmit = async () => {
    const answeredQuestions = Object.keys(userAnswers).length;
    const confirmSubmission = window.confirm(
        `Has contestado ${answeredQuestions} de ${questions.length} preguntas. ¿Estás seguro de que quieres finalizar el examen?`
      );
    
      if (!confirmSubmission) {
        return;
      }
    const quizResults = questions.map((question, index) => {
      const userAnswer = userAnswers[index];
      const isCorrect = userAnswer?.text === question.correctAnswer?.text;

      return {
        question: question._id,
        userAnswer: userAnswer?.text || '',
        isCorrect: userAnswer ? isCorrect : false,
      };
    });

    const userId = user?.user.id || localStorage.getItem('userId');

    if (!userId) {
        console.error('No se pudo encontrar el ID del usuario.');      return;
    }

    try {
      const response = await fetch('/api/simulation/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, quizResults }),
      });

      if (!response.ok) {
        console.error('Error submitting quiz:', await response.json());
        return;
      }

      const totalCorrect = quizResults.filter(result => result.isCorrect).length;
      setScore(totalCorrect); 
      setShowScore(true); 

      setTimeout(() => {
        router.push("/simulation/summary");
      }, 5000); 

      console.log('Quiz submitted successfully.');


    } catch (error) {
      console.error('Error submitting quiz:', error);
      setErrorMessage('Failed to submit quiz.');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      resetAnswerState();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      resetAnswerState();
    }
  };

  const resetAnswerState = () => {
    setIsSubmitted(false);
    setErrorMessage('');
  };


  const toggleFlag = (index: number) => {
    setFlaggedQuestions(prevFlags => ({
      ...prevFlags,
      [index]: !prevFlags[index], 
    }));
  };
  

  return (
    <div>
      {/* Navigation Links */}
      <nav className="">
  <ul className="flex gap-2">
    {questions.map((question, index) => {
      const userAnswer = userAnswers[index];
      const isFlagged = flaggedQuestions[index];
      
      return (
        <li key={question._id}>
          <button
            onClick={() => setCurrentQuestionIndex(index)}
            className={`p-2 rounded ${currentQuestionIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-200'}
              ${userAnswer === undefined ? 'border-2 border-red-500' : 'border-2 border-green-500'}
              ${isFlagged ? 'border-yellow-500' : ''}`} 
          >
            {isFlagged ? '🚩' : ''}
            {index + 1}
          </button>
        </li>
      );
    })}
  </ul>
</nav>


      {questions[currentQuestionIndex] && (
        <div key={questions[currentQuestionIndex]._id} className={`flex flex-col gap-4`}>
          <p className="self-end">{currentQuestionIndex + 1}/{questions.length}</p>
          <button onClick={() => toggleFlag(currentQuestionIndex)}>
    {flaggedQuestions[currentQuestionIndex] ? '🚩' : '🏳️'}
  </button>
          <h4 className="font-semibold">{currentQuestionIndex + 1}. {questions[currentQuestionIndex].statement}</h4>

          <div className={`flex flex-col gap-4`}>
            {[questions[currentQuestionIndex].correctAnswer, ...questions[currentQuestionIndex].incorrectAnswers].map((answer, answerIndex) => {
              const userAnswer = userAnswers[currentQuestionIndex];
              const isSelected = userAnswer?.text === answer.text;
              const inputId = `question-${currentQuestionIndex}-answer-${answerIndex}`;

              return (
                <div
                  key={answerIndex}
                  className={`p-1 ${isSelected ? 'border-2 rounded-md border-cyan-800' : ''}`}
                >
                  <input
                    type="radio"
                    id={inputId}
                    name={`question-${currentQuestionIndex}`}
                    checked={isSelected}
                    onChange={() => handleAnswerChange(answer)}
                  />
                  <label htmlFor={inputId} className={`ml-2`}>
                    {answer.text}
                  </label>
                </div>
              );
            })}
          </div>

          {errorMessage && <p className="text-white bg-red-600 p-1 px-2 rounded-md text-center">{errorMessage}</p>}
        </div>
      )}

{showScore && score !== null && (
       <ScoreModal score={score} handleClose={handleCloseModal} />
      )}


      <div className="fixed bottom-0 left-0 right-0 flex justify-between bg-white p-4 shadow-lg">
        <button 
          className="previous-question-btn bg-cyan-700 text-white p-2 rounded-md"
          onClick={handlePreviousQuestion} 
          disabled={currentQuestionIndex === 0}
        >
          Pregunta anterior
        </button>
        <button 
          className='bg-red-300 p-2'
          onClick={handleFinalSubmit}
        >
          Finalizar Examen
        </button>
        <button 
          className="bg-green-700 text-white p-2 rounded-md"
          onClick={handleNextQuestion} 
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Siguiente pregunta
        </button>
      </div>
    </div>
  );
};

export default SimulationQuiz;
