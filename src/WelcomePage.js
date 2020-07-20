import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'

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
        <div class="text-center">
            <Jumbotron style={{marginTop : '30px'}}>
                <Container>
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
        <div class="container" style={{backgroundColor: 'grey'}}>
            <div class="row">
                <div class="col" style={{backgroundColor: 'red', maxWidth : '40%', marginLeft : '5%', marginRight : '5%', minHeight : '200px'}}>
                    <h2>Skincare</h2>
                    
                </div>
                <div class="col" style={{backgroundColor: 'red', maxWidth : '40%', marginLeft : '5%', marginRight : '5%', minHeight : '200px'}}>
                    <h2>Cleaning</h2>
                </div>
            </div> 
            <div class="row">
                <div class="col" style={{backgroundColor: 'red', maxWidth : '40%', marginLeft : '5%', marginRight : '5%', marginTop : '40px', minHeight : '200px'}}>
                    <h2>Personal Care</h2>
                </div>
                <div class="col" style={{backgroundColor: 'red', maxWidth : '40%', marginLeft : '5%', marginRight : '5%', marginTop : '40px', minHeight : '200px'}}>
                    <h2>Home Care</h2>
                </div>
            </div> 
        </div>   
        </>  
    )
}
