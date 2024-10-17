import Link from "next/link";

const AuthModal = ({ onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold">Acceso Denegado</h2>
          <p>Solo los usuarios registrados pueden acceder a esta sección.</p>
          <Link href="/register" className="text-blue-600">
            Regístrate aquí
          </Link>
          <button onClick={onClose} className="mt-2 p-2 bg-gray-300 rounded">
            Cerrar
          </button>
        </div>
      </div>
    );
  };
  

  export default AuthModal