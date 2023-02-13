import ListadoPacientes from "./ListadoPacientes"

const Paciente = ({paciente, setPaciente, EliminarPacientes}) => {


  const handelEliminar = () =>{
    const respuesta = confirm('Estas Seguro de eliminar ?')
    respuesta && EliminarPacientes(id)
  }
 
  const {nombre, propietario, email, fecha, sintomas, id} = paciente
  return (
    <div className='mx-5 my-5 bg-white m-4 px-5 py-10'>
      <p className='font-bold uppercase mb-3'>
        Nombre: {' '}
        <span className='font-normal normal-case'>
          {nombre}
        </span>
      </p>
      <p className='font-bold uppercase mb-3'>
        Propietario: {' '}
        <span className='font-normal normal-case'>
          {propietario}
        </span>
      </p>
      <p className='font-bold uppercase mb-3'>
        Email: {' '}
        <span className='font-normal normal-case'>
          {email}
        </span>
      </p>
      <p className='font-bold uppercase mb-3'>
        Fecha de Alta: {' '}
        <span className='font-normal normal-case'>
        {fecha}
        </span>
      </p>
      <p className='font-bold uppercase mb-3'>
        Síntomas: {' '}
        <span className='font-normal normal-case'>
        {sintomas}
        </span>
      </p>
      <div className="flex justify-between">
    <button 
    type="button"
    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white font-bold rounded-lg uppercase"
    onClick={() => setPaciente(paciente)}
    >Editar</button>

    <button
    type="button"
    className="py-2 px-10 bg-red-600 hover:bg-red-700 cursor-pointer text-white font-bold rounded-lg uppercase"
    onClick={handelEliminar}
    >
      Eliminar
    </button>

      </div>
    </div>
  )
}

export default Paciente