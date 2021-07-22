import React from 'react'
import axios from 'axios'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

export default function Post() {

  const history = useHistory();

  const apiUrl = process.env.REACT_APP_API_URL

  const { register, handleSubmit } = useForm();

  const newPost = register('content', {
    require: true
  })

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
      <Form id='form' onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Row >
            <Col><h3>Nuevo Post</h3></Col>
          </Row>
        </Container>
        <Form.Group>
          <Form.Row>
            <Col sm='auto'>
              <Form.Label>Nuevo Post</Form.Label>
              <Form.Control id='newPost'
                type='newPost'
                placeholder='Digite su twitt'
                onChange={newPost.onChange}
                onBlur={newPost.onBlur}
                name={newPost.name}
                ref={newPost.ref} />
            </Col>
          </Form.Row>
        </Form.Group>
        <Button id='button' type='submit'>Crear</Button>
      </Form>
    </div>
  )
}
