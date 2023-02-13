import Formulario from "./components/Formulario";
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes";
import {useState, useEffect} from 'react'



function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})


  useEffect(()=>{
    const capturarLs = () =>{
      const pacienteLs = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacienteLs)
    }
    capturarLs();
  },[])

  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const EliminarPacientes = (id) => {
    const eliminarPaciente = pacientes.filter(pacienteState  => pacienteState.id !== id )
    setPacientes(eliminarPaciente)
  }
  
  return (
  <div className="container mx-auto mt-10">
    <Header
    />
    <div className="mt-12  md:flex">
    <Formulario
    pacientes={pacientes}
    setPacientes={setPacientes}
    paciente={paciente}
    setPaciente={setPaciente}
    />
    <ListadoPacientes 
    pacientes={pacientes}
    setPaciente={setPaciente}
    EliminarPacientes={EliminarPacientes}
    />
    </div>    
  </div>
  )
}

export default App;
