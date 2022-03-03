import React,{useState} from 'react'

const Lista = () => {
    const estadoIni  =[1,2 ]
    const estadoIni2  =[
        {id:1, texto:"tarea 1"},
        {id:2, texto:"tarea 2"},
        {id:3, texto:"tarea 3"},
    ]
    // console.log(estadoIni2); 
    const [lista, setlista] = useState(estadoIni2)

    const agregartarea =() =>{
        let cantidad =lista.length+1
        setlista([
            ...lista,
            {id : cantidad ,texto:"tarea "+cantidad}
        ])
    }

  return (
    <div>
    {
        lista.map((item,index) => (
            <h4 key={index}>{item.texto}</h4>
        ))
    }
    <button onClick={ ()=>{agregartarea()}}> agregar tarea</button>
    </div>
  )
}

export default Lista