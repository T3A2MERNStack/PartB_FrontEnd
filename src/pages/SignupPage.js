import React, { useState ,useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'
import StateContext from '../store'
import { Button, Checkbox, Form } from 'semantic-ui-react'


export default function SignupPageView() {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState(false)
    const { dispatch } = useContext(StateContext)
    const url = "https://sensationnel-madame-06327.herokuapp.com"

    const handleSignUp = (e) => {
        e.preventDefault()
        Axios.post(`${url}/users/register` , {
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
      <>
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
        <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
      </>
    )
}