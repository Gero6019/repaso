import { useState } from "react"

export const HooksEstados = () => {
    const [estadoValor, setEstadoValor] = useState("")

    return <>
        <h2>Hooks Estado</h2>
        <input type="text" onChange={(element)=>{ setEstadoValor(element.target.value) }}/>
        <h3>{estadoValor}</h3>
    </>
}