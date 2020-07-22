import React, { useState,  useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'
// import StateContext from './store'

export default function LoginPageView() {
    const history = useHistory();
    const [user, setUser] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    // const {store, dispatch} = useContext(StateContext)
    
    useEffect(() => {
        // Update the document title using the browser API
        Axios.get('http://localhost:4000/users/me', {
            withCredentials: true
          })
            .then(res => {
                console.log(res)
                setUser(res.data)
                // I am not getting anything back from (res)
                // dispatch({type: "setLogin" , data: true })
                // dispatch({type: "setUser", data: "name" })
            })
            .catch(error => {
                if(error) {
                console.log(error.message)
              }})
    },[]);

    // const onChange = (e) => {
    //     switch (e.target.name) {
    //         case "username":
    //             setEmail(e.target.value)
    //             break
    //         case "password":
    //             setPassword(e.target.value)
    //             break
    //         default :
    //             break
    //     }
    // }
    const handleSignUp = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:4000/users/register' , {
          username: e.target[0].value,
          password: e.target[1].value
        }, {
            withCredentials: true
        })
        .then(res => {
          console.log(res)
          if (res.data.fail) {
            setErrorMessage(res.data.fail)
          } else {
            setUser(res.data)
            console.log(res.data)
          }
        })
        .catch(err => {
            console.log(err)
        })
      }

    const onSubmit = (e) => {
        e.preventDefault() //prevents the page from reloading
        Axios.post('http://localhost:4000/users/login', {
        username: e.target[0].value,
        password: e.target[1].value },
       {withCredentials: true})
            .then(res => { 
                // console.log("logged in")
                // dispatch({type: "setLogin" , data: true })
                setUser(res.data)

                }
            )
            .catch(error =>  {
                setErrorMessage(error.response.data)
                // if (error.response) {
                //     // The request was made and the server responded with a status code
                //     // that falls out of the range of 2xx
                //     // setErrorMessage(error.response.data.error)
                //     // console.log(error.response.data.error)
                //     // console.log(error.response.data.user)
                //   }
                // history.push("/login")
            })


    }
    const handleLogOut = (e) => {
        e.preventDefault()
        Axios.get('http://localhost:4000/users/logout', {
          withCredentials: true
        })
        .then(() => {
          setUser(false)
          setErrorMessage(false)
        })
    }
    

    return (
        <div>
            {user ? (
                <>
                    <h2>You have already Logged, {user.displayName} </h2>
                    <button onClick={handleLogOut}>Log Out</button>
                </>
            ) : (
                <>
                    {/* { errorMessage &&
                        <h3 className="error"> { errorMessage } </h3> } */}
                    <h1>Log in form</h1>
                    <h2>Register</h2>
                    <form onSubmit={handleSignUp}>
                        <label>Username</label>
                        <input />
                        <label>Password</label>
                        <input />
                        <button>Sign up</button>
                    </form>
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
                        <h4>{errorMessage.name}</h4>
                        <p>{errorMessage.message}</p>
                    </div>
                    ) : (null)}
                </>
            )}
        </div>
    )
}