import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useHistory } from "react-router-dom"

const apiUrl = process.env.REACT_APP_API_URL

function Register() {

    const history = useHistory();

    const {register, handleSubmit} = useForm();

    const name = register('name',{
        require: true
    })

    const first_lastname = register('first_lastname',{
        require: true
    })

    const second_lastname = register('second_lastname',{
        require: true
    })

    const nickname = register('nickname',{
        require: true
    })

    const email = register('email',{
        require: true
    })

    const password = register('password',{
        require: true
    })

    const onSubmit = (data) => {
        console.log(data)
        axios.post(`${apiUrl}/users/register`, data).then(
            data => {
                if(data){
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
    
    return(
        <div class='Register'>      
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Container>
                <Row >
                    <Col><h3>Regístrese</h3></Col>
                </Row>
            </Container> 
            <Form.Group>
                <Form.Row>
                    <Col sm='auto'>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type='name'
                                        placeholder='Digite su nombre'                                            
                                        onChange={name.onChange}
                                        onBlur={name.onBlur}
                                        name={name.name}
                                        ref={name.ref}/>
                    </Col>
                </Form.Row>
            </Form.Group>    
            <Form.Group>
                <Form.Row>
                    <Col sm='auto'>
                        <Form.Label>Primer Apellido</Form.Label>
                        <Form.Control type='first_lastname'
                                        placeholder='Digite su primer apellido'                                            
                                        onChange={first_lastname.onChange}
                                        onBlur={first_lastname.onBlur}
                                        name={first_lastname.name}
                                        ref={first_lastname.ref}/>
                    </Col>
                </Form.Row>
            </Form.Group>  
            <Form.Group>
                <Form.Row>
                    <Col sm='auto'>
                        <Form.Label>Segundo Apellido</Form.Label>
                        <Form.Control type='second_lastname'
                                        placeholder='Digite su segundo apellido'                                            
                                        onChange={second_lastname.onChange}
                                        onBlur={second_lastname.onBlur}
                                        name={second_lastname.name}
                                        ref={second_lastname.ref}/>
                    </Col>
                </Form.Row>
            </Form.Group>
            <Form.Group>
                <Form.Row>
                    <Col sm='auto'>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type='nickname'
                                        placeholder='Digite su suario'                                            
                                        onChange={nickname.onChange}
                                        onBlur={nickname.onBlur}
                                        name={nickname.name}
                                        ref={nickname.ref}/>
                    </Col>
                </Form.Row>
            </Form.Group>          
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

export default Register