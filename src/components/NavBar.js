import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import styled from 'styled-components'
import {BrowserRouter, Route, Link } from 'react-router-dom'

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`

const NavBar = () => (
    <Styles>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="/">EcoA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Welcome</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/skincare">Skincare Recipes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/cleaning">Cleaning Recipes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/homecare">Home Care Recipes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/personalcare">Personal Care Recipes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/display">Recipe Name</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/newrecipe">New Recipe</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/myrecipes">My Recipes</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles >
)
 
export default NavBar
          
          
          
          
          
           