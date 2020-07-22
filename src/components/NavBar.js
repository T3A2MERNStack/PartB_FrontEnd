import React, { useContext, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
// import {BrowserRouter, Route, Link } from 'react-router-dom'
import StateContext from '../store'
import Axios from 'axios'

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
  const { user } = store
  const history = useHistory();

  useEffect(() => {
    // Update the document title using the browser API
    Axios.get('http://localhost:4000/users/me', {
        withCredentials: true
      })
        .then(res => {
            console.log(res)
            // setUser(res.data)
            // I am not getting anything back from (res)
            // dispatch({type: "setLogin" , data: true })
            dispatch({type: "setUser", data: res.data })
        })
        .catch(error => {
            if(error) {
            console.log(error.message)
          }})
  },[]);

  const handleLogOut = (e) => {
    e.preventDefault()
    Axios.get('http://localhost:4000/users/logout', {
      withCredentials: true
    })
    .then(() => {
      dispatch({type: "setUser", data: false })
      history.push('/')
    })
  }

  if (!store.user) {
    return (
      <>
        <Nav.Item>
          <Nav.Link href="/login">Log in</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/signup">Sign up</Nav.Link>
        </Nav.Item>
      </>
    )
  } else {
    return (
      <>
        <button onClick={handleLogOut}>Log Out</button>
      </>
    )
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
                <div className="dropdown">
                  <Nav.Link className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Recipe Category
                  </Nav.Link>
                  <div className="dropdown-menu" aria-labelledby="Recipe Category">
                    <Nav.Link className="dropdown-item" href="/skincare">Skincare</Nav.Link>
                    <Nav.Link className="dropdown-item" href="/cleaning">Cleaning</Nav.Link>
                    <Nav.Link className="dropdown-item" href="/homecare">Home Care</Nav.Link>
                    <Nav.Link className="dropdown-item" href="/personalcare">Personal Care</Nav.Link>
                  </div>
                </div>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/newrecipe">New Recipe</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/myrecipes">My Recipes</Nav.Link>
              </Nav.Item>
              <LoggedIn  />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles >
  )
}
export default NavBar