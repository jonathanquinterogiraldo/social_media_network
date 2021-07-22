import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { RiLogoutBoxRLine } from "react-icons/ri";
import { SiTwitter } from "react-icons/si";
import { GrNotification } from "react-icons/gr";
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom'

export default function Header() {

  const history = useHistory()

  const onSubmit = () => {
    swal({
      text: '¿Desea cerrar la sesión?',
      icon: 'warning',
      buttons: ['No', 'Sí']
    }).then(response => {
      if (response) {
        localStorage.removeItem('token')
        history.push('/login')
      }
    })
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" className='flex-column'>
        <Container>
          <Navbar.Brand variant="link" href="/home"><SiTwitter /> twittor </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link variant='link' href="#features"><GrNotification /></Nav.Link> */}
            <Button variant="link" onClick={onSubmit}>Salir <RiLogoutBoxRLine /></Button>          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
