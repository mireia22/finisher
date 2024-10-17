interface ModalProps {
 score: number;
  handleClose: () => void;
}

const ScoreModal = ({ score, handleClose }: ModalProps) => {

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
        <h2>Tu puntuación: {score} preguntas correctas.</h2>
          <p>Redirigiendo a la página de resumen...</p>

      </div>
    </div>
  );
};

export default ScoreModal;
