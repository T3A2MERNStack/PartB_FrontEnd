import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

export default function SignupPageView() {
    const history = useHistory();
    const [user, setUser] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const handleSignUp = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:4000/users/register' , {
          username: e.target[0].value,
          email: e.target[1].value,
          password: e.target[2].value
        }, {
            withCredentials: true
        })
        .then(res => {
          console.log(res)
          if (res.data.fail) {
            setErrorMessage(res.data.fail)
          } else {
            setUser(res.data)
            history.push('/')
            console.log(res.data)
          }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <h1>Sign up form</h1>
            <form onSubmit={handleSignUp}>
                        <label>Username</label>
                        <input />
                        <label>Email</label>
                        <input />
                        <label>Password</label>
                        <input />
                        <button>Sign up</button>
                <Link to="/login">Log in</Link>
            </form>
        </div>
    )
}