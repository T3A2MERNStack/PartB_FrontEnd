import React, { useState,  useContext, useEffect } from 'react'
import {useHistory } from 'react-router-dom'
import Axios from 'axios'
import StateContext from '../store'
import { Button, Form, Container, Message, Icon } from 'semantic-ui-react'

export default function LoginPageView() {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState(false)
    const { store, dispatch } = useContext(StateContext)
    const { user } = store
    const url = "https://sensationnel-madame-06327.GJLjgapp.com"
    
    useEffect(() => {
        // Update the document title using the browser API
        Axios.get(`${url}/users/me`, {
            withCredentials: true
          })
            .then(res => {
                dispatch({type: "setUser", data: res.data })
            })
            .catch(error => {
                if(error) {
                console.log(error.message)
              }})
    },[]);

    const onSubmit = (e) => {
        e.preventDefault() //prevents the page from reloading
        Axios.post(`${url}/users/login`, {
        username: e.target[0].value,
        password: e.target[1].value },
       {withCredentials: true})
            .then(res => { 
                dispatch({type: "setUser", data: res.data })
                console.log(user)
                history.push('/')
                }
            )
            .catch(error =>  {
                setErrorMessage(error.response.data.message)
            })


    }
    const handleLogOut = (e) => {
        e.preventDefault()
        Axios.get(`${url}users/logout`, {
          withCredentials: true
        })
        .then(() => {
          dispatch({type: "setUser", data: false })
          setErrorMessage(false)
        })
    }
    

    return (
        <div>
            {user ? (
                <>
                    <h2>You have already Logged, {user.username} </h2>
                    <button onClick={handleLogOut}>Log Out</button>
                </>
            ) : (
                <>
                    <Container style={{ marginLeft: '15%', marginRight: '15%', marginTop: 30 }} >
                        <Message
                        attached
                        style= {{backgroundColor: '#2e8b57'}}
                        header= 'Log in form'
                        // content='Fill out the form below to sign-up for a new account'
                        />
                        <Form className='attached fluid segment' onSubmit={onSubmit} >
                            {/* <h1 style={{ margin: 30, textAlign: 'center' }}>Log in form</h1> */}
                            <Form.Field>
                                <label><Icon name='user' />Username</label>
                                <input placeholder='Username' required />
                            </Form.Field>
                            <Form.Field>
                                <label><Icon name='cog' />Password</label>
                                <input placeholder='Password' type="password" required/>
                            </Form.Field>
                            <Button>
                            <Icon name='sign in' />Log in
                            </Button>
                        </Form>
                        {errorMessage ? (
                            <div>
                            <Message
                                error
                                header={errorMessage}
                                />
                        </div>
                        ) : (null)}
                    </Container>
                </>
            )}
        </div>
    )
}