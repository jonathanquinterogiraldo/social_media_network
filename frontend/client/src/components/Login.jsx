import React from "react"
import axios from 'axios'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useHistory } from "react-router-dom"


const apiUrl = process.env.REACT_APP_API_URL

function Login(){

    const history = useHistory();

    const {register, handleSubmit} = useForm();

    const email = register('email',{
        require: true
    })

    const password = register('password',{
        require: true
    })

    const onSubmit = (data) => {
        console.log(data)
        //axios.post(`${apiUrl}/users/login`, data)
        axios({
            method: 'POST',
            baseURL: apiUrl,
            url: '/users/login',
            data: data           
        })        
        .then(
            data => {
                if(data){
                    console.log(data)
                    localStorage.setItem('token', data.data.token)
                    history.push('/home')                      
                }    
            }
        ).catch(
            error => {
                console.log(error)
            }
        )    
    }   
    
    return(      
        <div>     
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                                            placeholder='Digite su correo'                                            
                                            onChange={email.onChange}
                                            onBlur={email.onBlur}
                                            name={email.name}
                                            ref={email.ref}/>
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>                
                    <Form.Row>
                        <Col sm='auto'>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type='password'
                                           placeholder='Digite su correo'
                                           onChange={password.onChange}
                                           onBlur={password.onBlur}
                                           name={password.name}
                                           ref={password.ref}/>
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Button type='submit'>Enviar</Button>                
            </Form>            
        </div>   
    )
}    

export default Login
