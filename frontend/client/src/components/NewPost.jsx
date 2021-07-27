import React from 'react'
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import '../styles/components/newPost.css';

export default function NewPost() {

  const history = useHistory();

  const apiUrl = process.env.REACT_APP_API_URL

  const onSubmit = () => {

    Swal.fire({
      title: '¿Qué estás pensando?',
      input: 'text',
      confirmButtonText: 'Publicar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      customClass: {
        validationMessage: 'my-validation-message'
      },
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage(
            '<i class="fa fa-info-circle"></i> El post debe tener contenido!'
          )
        }
        else {

          const data = { content: value }

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
                  window.location.reload();
                  //history.push('/home')
                }
              }
            ).catch(
              error => {
                console.log(error)
              }
            )
        }
      }
    })
  }

  return (
    <div>
      <Button className='postButton' variant="primary" onClick={onSubmit}>Nuevo Post</Button>
    </div>
  )
}
