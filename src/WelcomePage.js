import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default function Home(props) {
    const [recipe, getRecipe] = useState("")
    const history = useHistory();

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
       <>
        <div>
            <Jumbotron >
                <Container >
                    <h1>Welcome to EcoA</h1>
                    <p>
                        Your resource for zero waste home products
                    </p>
                </Container>
            </Jumbotron>
        </div> 
            <form onSubmit={onSubmit}>
                <button>Add test recipe</button>
            </form>
            <div class="card w-1">
        <div class="card-body">
            <h5 class="card-title">Skincare</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/skincare" class="card-link">Card link</a>
        </div>
        </div>
            {/* {console.log(recipe)} */}
        </>  
    )
}
