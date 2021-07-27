import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useHistory, Link } from "react-router-dom"
import '../styles/components/register.css'
import Swal from 'sweetalert2'
import { useState } from 'react'

const apiUrl = process.env.REACT_APP_API_URL

function Register() {

  const history = useHistory()

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [file, setFile] = useState(null)
  const [imageRead, setImageRead] = useState(null)

  const handleFile = (event) => {
    setFile(event.target.files[0])
    readFile(event.target.files[0])
  }

  const readFile = (file) => {
    const reader = new FileReader()

    reader.onload = (event) => {
      setImageRead(event.target.result)
      Swal.fire({
        title: 'Tu imagen se ha cargado!',
        imageUrl: event.target.result,
        confirmButtonText: `Aceptar`,
      })
    }

    reader.readAsDataURL(file)      
  }  

  const onSubmit = (data) => {

    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('lastname', data.lastname)
    formData.append('nickname', data.nickname)
    formData.append('email', data.email)
    formData.append('password', data.password)

    if (file) {
      formData.append('file', file, file.name)
    }

    console.log(formData)
    axios({
      method: 'POST',
      baseURL: apiUrl,
      url: '/users/register',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(
      data => {
        console.log(data)
        if (data) {
          Swal.fire({
            text: 'Usuario creado exitosamente',
            icon: 'success',
            confirmButtonText: `Aceptar`,
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
      (error) => {
        let errorMessage = '';
        let errorIcon = '';
        if (error.message === 'Request failed with status code 401') {
          errorMessage = 'Este correo ya se ecuentra registrado'
          errorIcon = 'warning'
        }
        if (error.message === 'Request failed with status code 500') {
          errorMessage = 'Error en el servidor'
          errorIcon = 'error'
        }

        Swal.fire({
          text: errorMessage,
          icon: errorIcon,
          button: 'Ok'
        })
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
        <label className='mt-2'>Apellidos</label>
        <input className='form-control my-2'
          name='lastname'
          type='text'
          placeholder='Digite su primer apellido'
          {...register('lastname', {
            required: {
              value: true,
              message: 'El primer apellido es obligatorio'
            }
          })}
        />
        <span className='text-danger text-small d-block mb-2'>
          {errors.lastname && errors.lastname.message}
        </span>
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
              message: 'La contraseña es obligatoria',
              minLength: 6,
              maxLength: 8
            }
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors.password && errors.password.message}
        </span>
        <span>
          <label className='mt-2'>Imagen de perfil</label>          
        </span>               
        <fieldset>
          <input variant='light' 
          type='file' 
          name='file'          
          accept='image/*' 
          onChange={handleFile} />     
        </fieldset>

        <button className="btn btn-primary btn-block mt-4" >Registrarse</button>
        <div className='mt-4 text-center'>
          <Link to="/login">Volver a inicio de sesión</Link>
        </div>
      </form>
    </div>
  )
}

export default Register