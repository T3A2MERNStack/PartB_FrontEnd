import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

export default function SignupPageView() {
    const history = useHistory();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChange = (e) => {
        switch (e.target.name) {
            case "name": 
                setName(e.target.value)
                break
            case "email":
                setEmail(e.target.value)
                break
            case "password":
                setPassword(e.target.value)
                break
        }
    }

    const onSubmit = (e) => {
        const user = { name, email, password }
        e.preventDefault() //prevents the page from reloading
        console.log(user)
        Axios.post('http://localhost:4000/users/register', user)
        .then(res => {if (res.status == 200){
            history.push("/")
        }
        })
        .catch(err =>  history.push("/signup"))
    }

    return (
        <div>
            <h1>Sign up form</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input onChange={onChange} value={name} type="text" id="name" name="name" required></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={onChange} value={email} type="email" id="email" name="email" required></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={onChange} value={password} type="password" id="password" name="password" required></input>
                </div>
                <button>Sign up</button>
                <Link to="/login">Log in</Link>
            </form>
        </div>
    )
}