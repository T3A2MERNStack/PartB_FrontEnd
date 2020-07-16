import React from 'react'
import Axios from 'axios'

export default function Home(props) {
    const onSubmit = () => {
        Axios.post("http://localhost:4000/lists", {"name":"test recipe", "duration":"345678"})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h1> Welcome to EcoA - your resource for zero waste home products</h1>
            <form onSubmit={onSubmit}>
                <button>Get all recipe</button>
            </form>
        </div>
    )
}
