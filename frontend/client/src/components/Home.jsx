import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import Header from "./Header"

const apiUrl = process.env.REACT_APP_API_URL

function Home() {

  const history = useHistory()

  const { handleSubmit } = useForm();

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: apiUrl,
      url: '/posts/posts',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(
      ({ data }) => {
        if (data.allPosts) {
          setPosts(data.allPosts)
        }
      }
    ).catch(
      error => {
        console.log(error)
      }
    )
  }, [])

  // const onSubmit = () => {
  //   swal({
  //     text: '¿Desea cerrar la sesión?',
  //     icon: 'warning',
  //     buttons: ['No', 'Sí']
  //   }).then(response => {
  //     if (response) {
  //       localStorage.removeItem('token')
  //       history.push('/login')
  //     }
  //   })
  // }

  const onSubmitPost = () => {
    history.push('/post')
  }

  return (
    <div>
      <Header />
      {posts.map((post) => <p key={post._id}>{post.content}</p>)}
      {/* <Form onSubmit={handleSubmit(onSubmit)}>
        <Button variant="danger" type='submit'>Salir</Button>
      </Form> */}


      <Button variant="success" onClick={onSubmitPost}>Nuevo Post</Button>


    </div>
  )
}

export default Home
