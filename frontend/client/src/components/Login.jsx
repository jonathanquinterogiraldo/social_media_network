import React, { render } from "react"
import axios from 'axios'
import { Form, Button, Alert, Col, Container, Row, FormGroup } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useHistory, Link } from 'react-router-dom'
import '../styles/components/login.css';
import Swal from 'sweetalert2'

const apiUrl = process.env.REACT_APP_API_URL

function Login() {

  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    axios({
      method: 'POST',
      baseURL: apiUrl,
      url: '/users/login',
      data: data
    })
      .then(
        data => {
          if (data) {
            console.log(data)
            localStorage.setItem('token', data.data.token)
            history.push('/home')
          }
        }
      ).catch(
        error => {

          let errorMessage = 'Usuario o contraseña incorrecta!';
          let errorIcon = 'warning';

          if (error.message !== 'Request failed with status code 401') {
            errorMessage = 'Este en el servidor!'
            errorIcon = 'error'
          }

          Swal.fire({
            icon: errorIcon,
            text: errorMessage
          })
        }
      )
  }


  return (
    <>
      <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
        <h1><span className='font-weight-bold'>twittor</span></h1>
        <label className='mt-3'>Correo</label>
        <input
          className="form-control my-2"
          name="email"
          type='email'
          placeholder='Digite su correo'
          {...register("email", {
            required: {
              value: true,
              message: 'El correo es obligatorio'
            }
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors.email && errors.email.message}
        </span>
        <label className='mt-2'>Contraseña</label>
        <input className="form-control my-2"
          name="password"
          type='password'
          placeholder='Digite su contraseña'
          {...register("password", {
            required: {
              value: true,
              message: 'La contraseña es obligatoria',
              minLength: 6,
              maxLength: 8
            }
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors.password && errors.password.message}
        </span>

        <button className="btn btn-primary btn-block mt-4" >Iniciar sesión</button>
        <div className='mt-4 text-center'>
          <Link to="/register">Regístrese</Link>
        </div>
      </form>
    </>
  )
}

export default Login
