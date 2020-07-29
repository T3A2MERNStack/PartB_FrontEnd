import React, { useEffect, useState, useContext } from 'react'
import { Image } from 'cloudinary-react';
import Axios from 'axios'
import { Card, Icon, Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Container, Row , Col, Jumbotron} from 'react-bootstrap'
import StateContext from '../store'

export default function MyRecipe() {
    const {store, dispatch} = useContext(StateContext)
    const [data, setData] = useState(false)
    const url = "https://sensationnel-madame-06327.herokuapp.com"

    // useEffect(() => {
    //     console.log(store.recipe)
    //     setData(store.recipe)

    // },[]);
    console.log(store.recipe)
    
    // setData(store.recipe)
    // const newArray = Array(store.recipe)

    return (
        store.recipe ? (
        <>
            <Jumbotron className="text-center" style={{ marginTop: '30px'}}>
            <Container>
                        <h1>My Recipes</h1>
            </Container>
            </Jumbotron>
            <Container>
                <Row  className="justify-content">
                    
                    {
                        store.recipe.map((object, index) => {
                            return (
                                <Col sm={12} md={3} key={`${object._id}`}>
                                <Link to={`/recipe/${object._id}`} key={`${object._id}`} >
                                    <Card style={{margin: 10, width: "250px", height: "400px"}}>
                                        <Image alt="product" cloudName="highpitchit" dpr="auto" publicId={object._id} width="150" crop="scale"/>
                                        <Card.Content>
                                            <Card.Header>{object.productName}</Card.Header>
                                            <Card.Meta>
                                                <span className='date'>User</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                {object.productSummary}
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <Rating icon='heart' defaultRating={3} maxRating={5} /> (### ratings)
                                        </Card.Content>
                                    </Card>
                                </Link>                
                            </Col>
                        )})     
                    }
                </Row>
            </Container>
        </>
        ): (<Container>YOU DONT HAVE RECIPE</Container>)
    )
}

