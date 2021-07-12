import React, {useEffect, useState} from "react"
import axios from 'axios'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const apiUrl = process.env.REACT_APP_API_URL

function Home() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
            axios.get(`${apiUrl}/posts/posts`).then(
            data => {                 
                //console.log(data)
                setPosts(data.data.allPosts)     
            }
        ).catch(
            error => {
                console.log(error)
            }
        ) 
    }, [])    
    
    return(
        <div className='Home'> 
            {posts.map((post) => <p key={post._id}>{post.content}</p>)}
        </div>    
    )
} 

export default Home
