import React, { useState,  useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'
import StateContext from './store'

export default function LoginPageView() {
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)
    const {store, dispatch} = useContext(StateContext)
 
    const onChange = (e) => {
        switch (e.target.name) {
            case "email":
                setEmail(e.target.value)
                break
            case "password":
                setPassword(e.target.value)
                break
            default :
                break
        }
    }

    const onSubmit = (e) => {
        const user = {email, password}

        e.preventDefault() //prevents the page from reloading
        Axios.post('http://localhost:4000/users/login', user)
            .then(res => { 
                dispatch({type: "setLogin" , data: true })
                console.log("logged in")
                history.push("/")
                }
            )
            .catch(error =>  {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    setErrorMessage(error.response.data.error)
                    console.log(error.response.data.error)
                  }
                history.push("/login")
            })
    }

    return (
        <div>
            { errorMessage &&
                <h3 className="error"> { errorMessage } </h3> }
            <h1>Log in form</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={onChange} value={email} type="email" id="email" name="email" required></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={onChange} value={password} type="password" id="password" name="password" required></input>
                </div>
                <button>Log in</button>
                <Link to="/signup">Sign up</Link>
            </form>
        </div>
    )
}