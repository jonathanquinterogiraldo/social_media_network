import React, {Component} from "react"
import axios from 'axios'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Login extends Component{

    handleSubmit = (event) => {
         event.preventDefault()

        const data = {           
            "email": "jonathan.quintero2657@gmail.com",
            "password": "123456"    
        }        
       
        axios.post(`http://localhost:3001/users/login`, data).then(
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
                            <Form.Control placeholder="Digite su correo" />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>                
                    <Form.Row>
                        <Col sm='auto'>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control placeholder="Digite su contraseña" />
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
