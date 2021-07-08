import React, {Component} from "react"
import axios from 'axios'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import Home from './Home'
import { useHistory } from "react-router-dom"

require('dotenv').config();

const apiUrl = process.env.REACT_APP_API_URL
class Login extends Component{

    handleSubmit = (event) => {
         event.preventDefault()

        const data = {           
            "email": this.email,
            "password": this.password    
        }        
       console.log(data)            
            axios.post(`${apiUrl}/users/login`, data).then(
            data => {
                console.log(data)     
            }
        ).catch(
            error => {
                console.log(error)
            }
        )
    }
  
    render(){
        return(
            <div className='Login'> 
            <Form onSubmit={ this.handleSubmit }>
                <Container>
                    <Row >
                        <Col><h3>Inicio de Sesión</h3></Col>
                    </Row>
                </Container>            
                <Form.Group>
                    <Form.Row>
                        <Col sm='auto'>
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type='email'
                                          placeholder="Digite su correo" 
                                          onChange={ e => this.email = e.target.value }/>
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>                
                    <Form.Row>
                        <Col sm='auto'>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type='password'
                                          placeholder="Digite su contraseña" 
                                          onChange={ e => this.password = e.target.value } />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Button type='submit'>Enviar</Button>                
            </Form>            
            </div>    
        )
    }    
}

export default Login
