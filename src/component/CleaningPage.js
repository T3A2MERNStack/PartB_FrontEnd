import React, { useEffect, useState } from 'react'
import { Image } from 'cloudinary-react';
import { Card, Rating, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Container, Row , Col} from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import api from '../api'

export default function CleaningPage() {
    const [data, setData] = useState("")
    const category = "cleaning"

    useEffect(() => {
        api.get(`/recipes/category/${category}`)
            .then(res => {
                setData(res.data)
            })
            .catch(error => {
                if(error) {
                console.log(error.message)
            }})
        },[]);

   const newArray = Array.from(data)

    return (
        <>
        <Jumbotron className="text-center" style={{ marginTop: '30px'}}>
        <Container>
                    <h1>Cleaning Recipes</h1>
        </Container>
        </Jumbotron>
        <Container>
            <Row  className="justify-content">
                {
                    newArray.map((object, index) => {
                        return (
                            <Col sm={12} md={3} key={`${object._id}`} >
                            <Link to={`/recipe/${object._id}`} key={`${object._id}`} >
                                <Card key={`${index}`} style={{margin: 10, width: "250px", height: "400px"}}>
                                <Image alt={object.productName} cloudName="highpitchit" dpr="auto" publicId={object._id} width="150" height="150" crop="scale"/>
                                    <Card.Content>
                                        <Card.Header>{object.productName}</Card.Header>
                                        <Card.Meta>
                                            {object.userName && <span className='date'>By<Icon name = 'user' />{object.userName}</span>}
                                        </Card.Meta>
                                        <Card.Description>
                                            {object.productSummary}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Rating icon='heart' defaultRating={3} maxRating={5} />
                                    </Card.Content>
                                </Card>
                            </Link>                
                        </Col>
                    )})     
                }
            </Row>
        </Container>
    </>
    )
}


