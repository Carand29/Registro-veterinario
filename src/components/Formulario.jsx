import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(()=>{
    Object.keys(paciente).length > 0 &&
    setNombre(paciente.nombre)
    setPropietario(paciente.propietario)
    setEmail(paciente.email)
    setFecha(paciente.fecha)
    setSintomas(paciente.sintomas)
  },[paciente])

  const generarId = () => {
    const ramdon = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return ramdon + fecha
  }


  const handleSubmit = (e) =>{
    e.preventDefault();

    //Validacion formulario
    if([nombre, propietario, email,fecha,sintomas].includes('')){
      setError(true)
      return;
    } 
      setError(false)
    
      //Objeto paciente
      const pacienteob = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      }
      if (paciente.id){
        // Editando Registro
        pacienteob.id = paciente.id
        
        const editarPaciente = pacientes.map((pacienteState)=>
          pacienteState.id === paciente.id 
          ?  pacienteob :  pacienteState 
        )
        // el modificador de paciente esta retornando el registro actualizado
        setPacientes(editarPaciente)
        // Eliminando registros para quitar peso a la aplicacion
        setPaciente({})
      }else {
        // Creacion de Nuevo Registro
        pacienteob.id = generarId()
        setPacientes([...pacientes, pacienteob]) 
      }    

      // Resetear los input del formulario
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
  }
  return (
    <div className="md:w-1/2 lg:w-2/5">
    <div className="text-3xl font-black text-center">Seguimiento Pacientes</div>
    <p className="mt-5 text-center mb-5 text-lg font-bold">Añade pacientes y {' '}
    <span className="text-indigo-600 font-bold text-lg">Administralos</span></p>

    <form
     onSubmit={handleSubmit}  
     className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">

      {error && <Error><h1>Todos los campos son obligatorios</h1></Error> }

      <div className="mb-5">


        <label htmlFor="mascota" className="block font-black uppercase text-gray-700">Nombre Mascota</label>
        <input 
          id="mascota"
          type="text"
          placeholder="Nombre de la Mascota"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-5">

        <label htmlFor="propietario" className="block font-black uppercase text-gray-700">Nombre del Propietario</label>
        <input 
          id="propietario"
          type="text"
          placeholder="Nombre del Propietario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={propietario}
          onChange={(e) => setPropietario(e.target.value)}
        />
      </div>
      <div className="mb-5">

        <label htmlFor="email" className="block font-black uppercase text-gray-700">Email</label>
        <input 
          id="email"
          type="email"
          placeholder="Email Contacto Propietario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-5">

        <label htmlFor="alta" className="block font-black uppercase text-gray-700">Alta</label>
        <input 
          id="alta"
          type="date"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <div className="mb-5">

        <label htmlFor="sintomas" className="block font-black uppercase text-gray-700">Síntomas</label>
        <textarea 
        id="sintomas"
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        placeholder="Describe los Síntomas"
        value={sintomas}
        onChange={(e) => setSintomas(e.target.value)}
        />
      </div>
      <input 
      type="submit"
      value={paciente.id ? 'Editar paciente':'Agregar paciente'}
      className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
      />

    </form>
    </div>
  )
}

export default Formulario