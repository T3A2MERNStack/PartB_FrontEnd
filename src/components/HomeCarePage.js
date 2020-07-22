import React from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'


export default function HomeCarePage() {
    const history = useHistory();
    const logout = () => {
        Axios.get("http://localhost:4000/users/logout")
        .then(res =>  history.push('/skincare'))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <button onClick={logout}>Log out</button>
        </div>
    )
}
