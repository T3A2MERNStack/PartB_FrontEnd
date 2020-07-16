import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function Home(props) {
    const [recipe, getRecipe] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:4000/lists", {"name":"TEST", "duration":"1111"})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        Axios.get("http://localhost:4000/lists")
        .then(res => {
            getRecipe(res.data.map(value=> value.name))
        })
        .catch(err => console.log(err))
    },[])

    return (
        <div>
            <h1> Welcome to EcoA - your resource for zero waste home products</h1>
            <form onSubmit={onSubmit}>
                <button>Add test recipe</button>
            </form>
            <p>{recipe}</p>
            {console.log(recipe)}
        </div>
    )
}
