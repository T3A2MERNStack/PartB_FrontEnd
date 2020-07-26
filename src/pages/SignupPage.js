import React, { useState ,useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'
import StateContext from '../store'
import { Button, Form, Icon, Message, Container } from 'semantic-ui-react'


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
            setErrorMessage(res.data.fail.message)
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
        <Container style={{ marginLeft: '15%', marginRight: '15%', marginTop: 30 }} >
            <Message
              attached
              style= {{backgroundColor: '#2e8b57'}}
              header='Welcome to our site!'
              content='Fill out the form below to sign-up for a new account'
            />
          <Form  className='attached fluid segment' onSubmit={handleSignUp} >
            <Form.Field>
              <label><Icon name='user' />User Name</label>
              <input placeholder='User Name' />
            </Form.Field>
            <Form.Field>
              <label><Icon name='mail' />Email</label>
              <input placeholder='Email' type="email" required />
            </Form.Field>
            <Form.Field>
              <label><Icon name='cog' />Password</label>
              <input placeholder='Password' type="password" required/>
            </Form.Field>
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Button>
              <Icon name='signup' />Sign up
            </Button>
          </Form>
          <Message attached='bottom' warning>
            <Icon name='help' />
            Already signed up?&nbsp;<Link to="/login" >Login here</Link>&nbsp;instead.
          </Message>
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
    )
}