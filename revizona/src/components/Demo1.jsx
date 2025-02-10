import { useState } from 'react';
import './CSS/Demo1.css'

function Demo1() {
    const [estado, setEstado] = useState(0)
    function incrementaestado(){
        setEstado(estado + 1)
    }
    let cornometro = 0;
    function incrementaCornometro(){
        cornometro++;
        console.log(cornometro);
    }
    function alertarUsuario(){
        alert("Corra para as colinas!!")
    }
  return (
    <div className='container-demo1'>
      <h2>Demo1</h2>
      <button onClick={alertarUsuario}>Clica em mim</button>
      <button onClick={() => {alert("Executei uma arrow function")}}>Ex Arrow Function</button>

      <div>
        Cornometro: {cornometro}
        <button onClick={incrementaCornometro}>+</button>
      </div>
      <div>
        Estado: {estado}
        <button onClick={incrementaestado}>+</button>
      </div>
    </div>
  )
}

export default Demo1
