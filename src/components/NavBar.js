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
          
                <Link to="/">Welcome</Link>
           
            </Nav.Item>
            <Nav.Item>
              
                <Link to="/skincare">Skincare Recipes</Link>
              
            </Nav.Item>
            <Nav.Item>
         
                <Link to="/cleaning">Cleaning Reciptes</Link>
  
            </Nav.Item>
            <Nav.Item>
        
                <Link to="/cleaning">Cleaning Recipes</Link>
          
            </Nav.Item>
            <Nav.Item>
          
                <Link to="/homecare">Home Care Recipes</Link>
         
            </Nav.Item>
            <Nav.Item>
     
                <Link to="/personalcare">Personal Care Recipes</Link>
           
            </Nav.Item>
            <Nav.Item>
          
                <Link to="/display">Recipe Name</Link>
         
            </Nav.Item>
            <Nav.Item>
        
                <Link to="/newrecipe">New Recipe</Link>
          
            </Nav.Item>
            <Nav.Item>
        
              <Link to="/myrecipes">My Recipes</Link>
      
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles >
)
 
export default NavBar
          
          
          
          
          
           