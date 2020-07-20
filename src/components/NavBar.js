import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import styled from 'styled-components'
import {BrowserRouter, Route, Link } from 'react-router-dom'
import StateContext from '../store'

const Styles = styled.div`
  .navbar {
    background-color: #397c5f
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    &:hover {
      color: white
    }
  }
  }
`

function LoggedIn() {
  const {store, dispatch} = useContext(StateContext)
  if (!store.login) {
    return (
    <Nav.Item>
      <Nav.Link href="/login">Log in</Nav.Link>
    </Nav.Item>
    )
  } else {
    return null
  }
}

const NavBar = () => {
  return (
      <Styles>
        <Navbar bg="#397c5f" expand="lg">
          <Navbar.Brand href="/">EcoA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/">Welcome</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <div class="dropdown">
                  <Nav.Link class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Recipe Category
                  </Nav.Link>
                  <div class="dropdown-menu" aria-labelledby="Recipe Category">
                    <Nav.Link class="dropdown-item" href="/skincare">Skincare</Nav.Link>
                    <Nav.Link class="dropdown-item" href="/cleaning">Cleaning</Nav.Link>
                    <Nav.Link class="dropdown-item" href="/homecare">Home Care</Nav.Link>
                    <Nav.Link class="dropdown-item" href="/personalcare">Personal Care</Nav.Link>
                  </div>
                </div>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/newrecipe">New Recipe</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/myrecipes">My Recipes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/signup">Sign up</Nav.Link>
              </Nav.Item>
              <LoggedIn  />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles >
  )
}
export default NavBar