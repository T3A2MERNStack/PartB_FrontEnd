import React, { useState,  useContext, useEffect } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import StateContext from './store'

export default function HomeCarePage() {
    const {store, dispatch} = useContext(StateContext)
    const history = useHistory();
    const logout = () => {
        Axios.get("http://localhost:4000/users/logout")
        .then(res =>  {
            dispatch({type: "setLogin" , data: false })
            dispatch({type: "setUser", data: null })
            history.push('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <button onClick={logout}>Log out</button>
        </div>
    )
}
