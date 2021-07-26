import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import Header from "./Header"
import NewPost from './NewPost'

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

  return (
    <div>
      <Header />

      {posts.map((post) => <p key={post._id}>{post.content}</p>)}

      <NewPost />

    </div>
  )
}

export default Home
