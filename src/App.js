import { useState } from "react";
import Boton from "./components/Boton";
import Input from "./components/Input";

function App() {
  const [nombre, setNombre] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
        <h1>Desafío 2 - Estado de los componentes y eventos</h1>
        <Input nombre = {nombre} setNombre = {setNombre} contraseña = {password} setContraseña = {setPassword} />
        <hr/>
        {(password === '252525')? <Boton/> : null}
    </div>
  );
}

export default App;
