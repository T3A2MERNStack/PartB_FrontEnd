import React, { useState,  useContext, useEffect } from 'react'
import { Link,  useHistory } from 'react-router-dom'
import Axios from 'axios'
import StateContext from '../store'

export default function LoginPageView() {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState(false)
    const { store, dispatch } = useContext(StateContext)
    const { user } = store
    
    useEffect(() => {
        // Update the document title using the browser API
        Axios.get('http://localhost:4000/users/me', {
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
        Axios.post('http://localhost:4000/users/login', {
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
        Axios.get('http://localhost:4000/users/logout', {
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
                    {/* { errorMessage &&
                        <h3 className="error"> { errorMessage } </h3> } */}
                    <h1>Log in form</h1>
                    <form onSubmit={onSubmit}>
                        <label>Username</label>
                        <input />
                        <label>Password</label>
                        <input />
                        <button>Log in</button>
                        <Link to="/signup">Sign up</Link>
                    </form>
                    {errorMessage ? (
                    <div>
                        {/* <h4>{errorMessage.name}</h4> */}
                        <p>{errorMessage}</p>
                    </div>
                    ) : (null)}
                </>
            )}
        </div>
    )
}