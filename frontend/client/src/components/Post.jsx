import React from 'react'
import axios from 'axios'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'


export default function Post() {

  const history = useHistory();

  const apiUrl = process.env.REACT_APP_API_URL

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    axios({
      method: 'POST',
      baseURL: apiUrl,
      url: '/posts/post',
      data: data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(
        data => {
          if (data) {
            console.log(data)
            history.push('/home')
          }
        }
      ).catch(
        error => {
          console.log(error)
        }
      )
  }

  return (
    <div>
      <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
        <h1><span className='font-weight-bold'>Nuevo Post</span></h1>
        <input
          className="form-control my-2"
          name="content"
          type='text'
          {...register('content', {
            required: {
              value: true,
              message: 'Debe tener contenido'
            }
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors.content && errors.content.message}
        </span>
        <button className="btn btn-primary btn-block mt-4" >Agregar</button>
      </form>
    </div>
  )
}
