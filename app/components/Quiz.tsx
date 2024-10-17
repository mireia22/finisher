"use client";
import { useState } from 'react';
import { Answer, Question, useUserContext } from '../context/userContext';
import Modal from './Modal';

const Quiz = ({ questions }: { questions: Question[] }) => {
  const [userAnswer, setUserAnswer] = useState<Answer>({text: "", explanation:""});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { addCorrectQuestion, addIncorrectQuestion, user} = useUserContext();

  console.log("user in quiz", user)

  console.log("Questions prop:", questions);

  const handleAnswerChange = (selectedAnswer: Answer) => {
    if (!isSubmitted) {
      setUserAnswer({text: selectedAnswer.text, explanation:selectedAnswer.explanation});
      setErrorMessage('');
    }
  };

  const handleSubmit = async () => {
    if (!userAnswer) {
      setErrorMessage('⚠️ Selecciona una respuesta.');
      return;
    }

    setIsSubmitted(true);
    const question = questions[currentQuestionIndex];
    console.log("QUESTION", question)
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
    setUserAnswer({text: "", explanation:""});
    setIsSubmitted(false);
    setErrorMessage('');
  };

  const handleShowExplanation = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      {questions[currentQuestionIndex] && (
        <div key={questions[currentQuestionIndex]._id} className={`flex flex-col gap-4`}>
          <p className="self-end">{currentQuestionIndex + 1}/{questions.length}</p>
          <p className="self-center font-bold">{questions[currentQuestionIndex].category?.toUpperCase()}</p>
          <h4 className="font-semibold">{currentQuestionIndex + 1}. {questions[currentQuestionIndex].statement}</h4>

          <div className={`flex flex-col gap-4`}>
            {[questions[currentQuestionIndex].correctAnswer, ...questions[currentQuestionIndex].incorrectAnswers].map((answer, answerIndex) => {
              const isSelected = userAnswer.text === answer.text;
              const inputId = `question-${currentQuestionIndex}-answer-${answerIndex}`;

              return (
                <div
                  key={answerIndex}
                  className={`p-1 ${isSelected ? 'border-2 rounded-md border-cyan-800' : ''} ${isSubmitted ? (isSelected ? (userAnswer.text === questions[currentQuestionIndex].correctAnswer.text ? 'bg-green-300' : 'bg-red-300') : '') : ''}`}
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

          {isSubmitted && (
            <button onClick={handleShowExplanation} className='bg-yellow-500'>Ver explicación</button>
          )}
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 flex justify-between bg-white p-4 shadow-lg">
        <button 
          className="previous-question-btn bg-cyan-700 text-white p-2 rounded-md"
          onClick={handlePreviousQuestion} 
          disabled={currentQuestionIndex === 0}
        >
          Pregunta anterior
        </button>

        {!isSubmitted ? (
          <button 
            className="submit-question-btn bg-green-600 text-white p-2 rounded-md"
            onClick={handleSubmit}
          >
            Comprobar
          </button>
        ) : (
          <button 
            className="bg-green-700 text-white p-2 rounded-md"
            onClick={handleNextQuestion} 
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Siguiente pregunta
          </button>
        )}
      </div>

      {isModalOpen && (
        <>
          <div className="modal-background" onClick={handleCloseModal}></div> 
          <Modal
            question={questions[currentQuestionIndex]}
            userAnswer={userAnswer}
            handleClose={handleCloseModal}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
