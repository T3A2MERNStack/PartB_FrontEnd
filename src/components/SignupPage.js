import React, { useState ,useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'
import StateContext from '../store'


export default function SignupPageView() {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState(false)
    const { dispatch } = useContext(StateContext)

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
          if (res.data.fail) {
            setErrorMessage(res.data.fail)
          } else {
            dispatch({type: "setUser", data: res.data })
            history.push('/')
          }
        })
        .catch(err => {
            setErrorMessage(err)
        })
    }

    return (
        <div>
            <h1>Sign up form</h1>
            <form onSubmit={handleSignUp}>
                        <label>Username</label>
                        <input />
                        <label>Email</label>
                        <input type="email" required />
                        <label>Password</label>
                        <input />
                        <button>Sign up</button>
                <Link to="/login">Log in</Link>
            </form>
            {errorMessage ? (
              <div>
                  {/* <h4>{errorMessage.name}</h4> */}
                  <p>{errorMessage.message}</p>
              </div>
            ) : (null)}
        </div>

    )
}