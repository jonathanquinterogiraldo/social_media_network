import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useHistory } from "react-router-dom"
import '../styles/components/register.css'
import swal from 'sweetalert'

const apiUrl = process.env.REACT_APP_API_URL

function Register() {

  const history = useHistory()

  const { register, handleSubmit, formState: { errors } } = useForm();

  // const name = register('name', {
  //   require: true
  // })

  // const first_lastname = register('first_lastname', {
  //   require: true
  // })

  // const second_lastname = register('second_lastname', {
  //   require: true
  // })

  // const nickname = register('nickname', {
  //   require: true
  // })

  // const email = register('email', {
  //   require: true
  // })

  // const password = register('password', {
  //   require: true
  // })

  const onSubmit = (data) => {
    console.log(data)
    axios({
      method: 'POST',
      baseURL: apiUrl,
      url: '/users/register',
      data: data
    }).then(
      data => {
        if (data) {
          swal({
            text: 'Usuario creado exitosamente',
            icon: 'success',
            buttons: 'Aceptar'
          }).then(response => {
            if (response) {
              console.log(data)
              localStorage.setItem('token', data.data.token)
              history.push('/home')
            }
          })
        }
      }
    ).catch(
      error => {
        console.log(error)
      }
    )
  }

  return (
    <div className='Register'>
      <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
        <h2><span className='font-weight-bold'>Regístrese</span></h2>
        <label className='mt-3'>Nombre</label>
        <input
          className='form-control my-2'
          name='name'
          type='text'
          placeholder='Digite su nombre'
          {...register('name', {
            required: {
              value: true,
              message: 'El nombre es obligatorio'
            }
          })}
        />
        <span className='text-danger text-small d-block mb-2'>
          {errors.name && errors.name.message}
        </span>
        <label className='mt-2'>Primer Apellido</label>
        <input className='form-control my-2'
          name='first_lastname'
          type='text'
          placeholder='Digite su primer apellido'
          {...register('first_lastname', {
            required: {
              value: true,
              message: 'El primer apellido es obligatorio'
            }
          })}
        />
        <span className='text-danger text-small d-block mb-2'>
          {errors.first_lastname && errors.first_lastname.message}
        </span>
        <label className='mt-2'>Segundo Apellido</label>
        <input className='form-control my-2'
          name='second_lastname'
          type='text'
          placeholder='Digite su segundo apellido'
          {...register('second_lastname', {

          })}
        />
        <label className='mt-2'>Usuario</label>
        <input className='form-control my-2'
          name='nickname'
          type='text'
          placeholder='Digite su usuario'
          {...register('nickname', {
            required: {
              value: true,
              message: 'El usuario es obligatorio'
            }
          })}
        />
        <span className='text-danger text-small d-block mb-2'>
          {errors.nickname && errors.nickname.message}
        </span>
        <label className='mt-2'>Correo</label>
        <input className='form-control my-2'
          name='email'
          type='email'
          placeholder='Digite su correo'
          {...register('email', {
            required: {
              value: true,
              message: 'El correo es obligatorio'
            }
          })}
        />
        <span className='text-danger text-small d-block mb-2'>
          {errors.email && errors.email.message}
        </span>
        <label className='mt-2'>Contraseña</label>
        <input className='form-control my-2'
          name='password'
          type='password'
          placeholder='Digite su contraseña'
          {...register('password', {
            required: {
              value: true,
              message: 'La contraseña es obligatoria'
            }
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors.password && errors.password.message}
        </span>

        <button className="btn btn-primary btn-block mt-4" >Registrarse</button>
        <div className='mt-4 text-center'>
          <a href='/login'>Volver a inicio de sesión</a>
        </div>
      </form>
    </div>
  )
}

export default Register