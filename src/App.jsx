import { useState } from 'react'
import './App.css'
import { Titulos } from './components/Titulos'

/*
  Tarea 1: Crear un componente y mostrar 2 etiquetas html a eleccion.
*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Titulos />
    </>
  )
}

export default App
