import { useState } from 'react'
import './App.css'
import { Titulos } from './components/Titulos'
import { Contenido } from './components/Contenido'

/*
  Tarea 1: Crear un componente y mostrar 2 etiquetas html a eleccion.
  Tarea 2: Crear un componente que se le pase un prop y mostrar por pantalla ese dato.
*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulos />
      <Contenido nombreImagen={"flores"} />
    </>
  )
}

export default App
