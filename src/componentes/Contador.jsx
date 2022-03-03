import React,{useState} from 'react'

const Contador = () => {
    const [contador, setcontador] = useState(0)

    const Aumenta= () =>{
        let res =contador+1;
        setcontador(res)
    }

  return (
    <div>
        <h2>contador</h2>
        <h3>nuestro numero contador: {contador}</h3>
        {
            contador >2 ? <h1> mayor a 2 </h1> :<h1>menor a 2</h1>
        }
        <button onClick={()=>{Aumenta()}}>Aumenta</button>
        <button onClick={()=>{setcontador(contador-1)}}>Disminuye</button>

    </div>
  )
}

export default Contador