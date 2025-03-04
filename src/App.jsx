import { useState } from 'react'
import './App.css'
import { Titulos } from './components/Titulos'
import { Contenido } from './components/Contenido'
import { HooksEstados } from './components/HooksEstados'

/*
  Tarea 1: Crear un componente y mostrar 2 etiquetas html a eleccion.
  Tarea 2: Crear un componente que se le pase un prop y mostrar por pantalla ese dato.
  Tarea 3: Crear un componente que muestre por pantalla la suma de dos numeros, utilice el hook useState.
*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulos />
      <Contenido nombreImagen={"flores"} />
      <HooksEstados />
    </>
  )
}

export default App
