import { Link } from 'react-router-dom'

function Login(){
    return(
        <div>
            <h1>Login</h1>
            <form action='users/login' method='/post'>
                <label for='email'>Correo</label>
                <br/>
                <input type='text' id='email'></input>
                <br/>
                <label for='password'>Contraseña</label>
                <br/>
                <input type='text' id='password'></input>
                <br/>
                <br/>
                <button type='submit'>Enviar</button>                
            </form>             
        </div>        
    )
}

export default Login
