const Input = (props) => {
    return(
        <div>
            <label htmlFor="nombre">nombre:</label>
            <input type="text" name="" id="nombre" placeholder="Ingrese su nombre"
                onChange={(e)=>{props.setNombre(e.target.value)}}
                value={props.nombre}
            />
            <br />
            <label htmlFor="contraseña">contraseña:</label>
            <input type="password" name="" id="contraseña" placeholder="Ingrese su contraseña" 
                onChange={(e)=>{props.setContraseña(e.target.value)}}
                value={props.contraseña}
            />
        </div>
    )
}
export default Input