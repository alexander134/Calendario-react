import React,{useState} from 'react'

const Eventos = () => {
    const [texto, setTexto] = useState("Evento")
    const eventClick= (para="default1") =>{
        console.log("me distes Click con el boton "+para);
    }
    const eventClick3= (para="default1") =>{
        console.log("me distes Click con el boton "+para);
        setTexto("nuevo Evento")
    }

    return (
    <div>
        <h2>{texto}</h2>
        <button onClick={eventClick}>Click</button>
        <button onClick={eventClick("segundo Click")}>Se ejec pero al principio y no mas</button>
        <button onClick={()=>{eventClick3("Tercero Click")}}>llamando Evento</button>
    </div>
  )
}

export default Eventos