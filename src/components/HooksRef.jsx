import { useRef, useState } from "react"

export const HooksRef = ()=>{
    const [resultado, setResultado] = useState(0)

    let input1 = useRef()
    let input2 = useRef()

    return <>
        <input ref={input1} type="number" />
        <input ref={input2} type="number" />
        <button onClick={()=>{ setResultado(input1.current.valueAsNumber + input2.current.valueAsNumber) }}>Sumar</button>

        <h3>Resultado: {resultado}</h3>
    </>
}