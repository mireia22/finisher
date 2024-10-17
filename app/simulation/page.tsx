"use client"
import { PlayFill } from '@geist-ui/icons';
import { useRouter } from 'next/navigation';

const SimulationPage = () => {
    const router = useRouter(); 

    const handlePlayClick = () => {
        router.push('/simulation/test');
    };

    return (
      <div className='flex flex-col items-center justify-center gap-8'>
        <h1 className='font-bold'>SIMULACIÓN DE EXAMEN</h1>
        
        <div className='flex flex-col items-start justify-center gap-2'>
          <h2 className='font-bold'>Instrucciones</h2>
          <p>· Tienes <span className='font-semibold'>60 minutos</span> para responder el cuestionario.</p>
          <p>· Hay un total de <span className='font-semibold'>52 preguntas.</span></p>
          <p>· Para aprobar, debes responder correctamente al menos <span className='font-semibold text-green-800'>39 preguntas.</span></p>
          <p>· Las respuestas incorrectas no restan puntos.</p>
        </div>

        <button onClick={handlePlayClick} className='bg-yellow-400 p-2 rounded-md gap-2 flex items-center justify-center'>
          <PlayFill />
          Comenzar
        </button>
      </div>
    );
};

export default SimulationPage;
