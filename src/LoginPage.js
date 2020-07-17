import React, { useState,  useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'
import StateContext from './store'

export default function LoginPageView() {
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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
            .then(res => {if (res.status === 200){
                dispatch({type: "setLogin" , data: true })
                history.push("/")
            }
            })
            .catch(err =>  history.push("/signup"))
    }

    return (
        <div>
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
                <button>Sign up</button>
                <Link to="/signup">Sign up</Link>
            </form>
        </div>
    )
}