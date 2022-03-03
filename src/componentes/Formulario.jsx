import React,{useState} from 'react'

const Formulario = () => {

    const [nombre, setnombre] = useState("")
    const [edad, setedad] = useState("")
    const [edadif, setedadif] = useState(false)
    const [nombreif, setnombreif] = useState(false)
    const [lista, setlista] = useState([])

    const guardarDatos = (e) => {
        e.preventDefault()
        if(!nombre.trim()){
            setnombreif(true)
            return
        }else{
            setnombreif(false)
        }
        if(!edad.trim()){
            setedadif(true);
            return
        }else{
            setedadif(false)
        }
        setlista([
            ...lista,
            {nombre:nombre ,edad:edad}
        ])

        console.log("procesando");
        e.target.reset()
        setnombre("")
        setedad("")
    }
  return (
    <div>
        <form onSubmit={guardarDatos}>
            {
                nombreif && <h3>debe completar el nombre</h3> 
            }
            <input type="text" placeholder="Ingrese nombre" className="form-control mb-2" onChange={e => setnombre(e.target.value)}/>
            {
                edadif && <h3>debe completar la edad</h3>
            }
            <input type="text" placeholder="Ingrese edad" className="form-control mb-2" onChange={e => setedad(e.target.value)}/>
            <button className="btn btn-primary btn-block"  type="submit" >Agregar</button>
        </form>
        <ul>
        {
            lista.map((elemento, index)=>(
                <li key={index}>{elemento.nombre}</li>
            ))
        }
        </ul>
        
    </div>
  )
}

export default Formulario