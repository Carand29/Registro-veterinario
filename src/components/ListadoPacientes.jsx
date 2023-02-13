import Paciente from "./Paciente"
import { useEffect } from "react"

const ListadoPacientes = ({pacientes, setPaciente, EliminarPacientes}) => {
  

  
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.length ? 
      (<>
      <h2 className='text-3xl font-black text-center '>ListadoPacientes </h2>
    <p className='mt-5 text-center text-lg font-bold'>Administra tus{' '}
    <span className='font-bold text-indigo-600'>Pacientes y citas</span>
    </p>
    {pacientes.map((paciente)=>
      <Paciente 
      key={paciente.id}
      paciente={paciente}
      setPaciente={setPaciente}
      EliminarPacientes={EliminarPacientes}
      />  
    )}
    
      </>)
      :(
      <>
      <h2 className='text-3xl font-black text-center '>No hay pacientes</h2>
    <p className='mt-5 text-center text-lg font-bold'>Agrega pacientes
    <span className='font-bold text-indigo-600'>{' '}para administrarlos aca</span>
    </p>
      </>)}
    
    
    </div>
  )
}

export default ListadoPacientes