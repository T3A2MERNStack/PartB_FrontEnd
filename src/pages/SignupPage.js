import React, { useState ,useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'
import StateContext from '../store'
import { Button, Form, Segment, Responsive } from 'semantic-ui-react'


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
            console.log(res.data.fail)
          } else {
            dispatch({type: "setUser", data: res.data })
            history.push('/')
          }
        })
        .catch(err => {
            setErrorMessage(err)
        })
    }
    // const { height } = Dimensions.get('window')

    return (
      <>
        {errorMessage ? (
          <div>
              {/* <h4>{errorMessage.name}</h4> */}
              <p>{errorMessage.message}</p>
          </div>
        ) : (null)}

        <Form style={{ marginLeft: '20%', marginRight: '20%' }} onSubmit={handleSignUp} >
          <h1 style={{ margin: 30, textAlign: 'center' }}>Sign up form</h1>
          <Form.Field>
            <label>User Name</label>
            <input placeholder='User Name' />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Email' type="email" required />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' type="password" required/>
          </Form.Field>
          <Button>
            Sign up
          </Button>
        </Form>
      </>
    )
}