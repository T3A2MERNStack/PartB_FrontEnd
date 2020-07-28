import React, { useContext, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useHistory, Link } from 'react-router-dom'
import styled from 'styled-components'
// import {BrowserRouter, Route, Link } from 'react-router-dom'
import StateContext from '../store'
import Axios from 'axios'

const Styles = styled.div`
.dropdown-menu{
  background-color: #f2f2f2 
} 
.dropdown-menu .dropdown-item{
  padding-left: 10px
}
.navbar {
    background-color: white
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    &:hover {
      color: green
    } 
  }
  }
`

function LoggedIn() {
  const {store, dispatch} = useContext(StateContext)
  const history = useHistory();

  useEffect(() => {
    // Update the document title using the browser API
    Axios.get('https://sensationnel-madame-06327.herokuapp.com/users/me', {
        withCredentials: true
      })
        .then(res => {
            // console.log(res.data)
            dispatch({type: "setUser", data: res.data })
            // console.log(store.user)
            getRecipe(res.data)
        })
        .catch(error => {
            if(error) {
            console.log(error.message)
          }})
  },[]);

    const getRecipe = (data) => {
      Axios.get(`http://localhost:4000/recipes/me/${data._id}`)
      .then((res) => {
        dispatch({type: "setRecipe", data: res.data})
        // console.log(store)
      })
    }


  const handleLogOut = (e) => {
    e.preventDefault()
    Axios.get('https://sensationnel-madame-06327.herokuapp.com/users/logout', {
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
      <Nav.Item>
                <Nav.Link href="/myrecipes">My Recipes</Nav.Link>
      </Nav.Item>
      <button onClick={handleLogOut}>Log Out</button>
      </>
    )
  }


}

const NavBar = () => {

  return ( 
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
           
            <img src={ require('./img/logo.png') } style={{width: 200, margin: 0, padding: 0 , height: '100%'}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/">Welcome</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/display">All Recipes</Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <div className="dropdown" >
                  <Nav.Link className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                  Recipe Category
                  </Nav.Link>
                  <div className="dropdown-menu" aria-labelledby="Recipe Category" >
                    <Nav.Link className="dropdown-item" href="/skincare">Skincare</Nav.Link>
                    <Nav.Link className="dropdown-item" href="/cleaning">Cleaning</Nav.Link>
                    <Nav.Link className="dropdown-item" href="/homecare">Home Care</Nav.Link>
                    <Nav.Link className="dropdown-item" href="/personalcare">Personal Care</Nav.Link>
                  </div>
                </div>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link href="/newrecipe" >New Recipe</Nav.Link>
            </Nav.Item>
              <LoggedIn  />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles >
  )
}
export default NavBar