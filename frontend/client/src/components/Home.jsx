import React, {Component} from "react"
import axios from 'axios'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Home extends Component{

    // handleSubmit = (event) => {
    //      event.preventDefault()

    //     const data = {           
    //         "email": "jonathan.quintero2657@gmail.com",
    //         "password": "123456"    
    //     }        
       
    //     axios.post(`http://localhost:3001/users/login`, data).then(
    //         data => {
    //             console.log(data)
    //         }
    //     ).catch(
    //         error => {
    //             console.log(error)
    //         }
    //     )
    
  
    render(){
        return(
            <div className='Home'> 
            Hola
            
            </div>    
        )
    } 
    
}


export default Home
