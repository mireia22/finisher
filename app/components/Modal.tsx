import Image from "next/image";
import { Answer, Question } from "../context/userContext";

interface ModalProps {
  question: Question; 
  userAnswer: Answer; 
  handleClose: () => void;
}

const Modal = ({ question, userAnswer, handleClose }: ModalProps) => {
  const isCorrect = userAnswer.text === question.correctAnswer.text;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClose}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs relative flex flex-col items-start gap-2">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={handleClose}
        >
          &times;
        </button>
        <div className="mb-4">
          <Image
            className="rounded-md"
            src={question?.image || '/path/to/default-image.jpg'}
            alt="Question Image"
            width={100}
            height={100}
          />
        </div>
          <h2 className="font-semibold">{question.statement}</h2>
        
        {isCorrect ? (
          <div className="flex flex-col text-xs bg-emerald-100 p-2 ">
            <p className="font-bold mt-4">Respuesta correcta!</p>
            <p className="text-green-500 font-semibold">{question.correctAnswer.text}</p>
            <p className="text-gray-600">{question.correctAnswer.explanation}</p>
          </div>
        ) : (
          <div className="flex flex-col text-xs gap-2">
             <div className="flex flex-col text-sm bg-red-100 p-2 ">
            <p className="font-bold">Tu respuesta:</p>
            <p className={isCorrect ? "font-semibold text-green-600" : "font-semibold text-red-600"}>
              {userAnswer.text}
            </p>
            <p className="text-gray-600">{userAnswer.explanation}</p>
            </div>
            <div className="flex flex-col text-sm bg-emerald-100 p-2 ">
            <p className="font-bold ">Respuesta correcta:</p>
            <p className="text-green-500 font-semibold">{question.correctAnswer.text}</p>
            <p className="text-gray-600">{question.correctAnswer.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
