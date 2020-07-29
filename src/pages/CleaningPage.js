import React, { useEffect, useState } from 'react'
import { Image } from 'cloudinary-react';
import Axios from 'axios'
import { Card, Icon, Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Container, Row , Col} from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'


export default function CleaningPage() {

    const [data, setData] = useState("")
    const url = "http://localhost:4000"
    const category = "cleaning"

    useEffect(() => {
        Axios.get(`${url}/recipes/category/${category}`)
            .then(res => {
                setData(res.data)
                console.log(res.data)
            })
            .catch(error => {
                if(error) {
                console.log(error.message)
            }})
        },[]);
    // console.log(typeof(data))
   const newArray = Array.from(data)

    console.log(data)
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
                            <Col sm={12} md={3}>
                            <Link to={`/recipe/${object._id}`} key={`${object._id}`} >
                                <Card key={`${index}`} style={{margin: 10, width: "250px", height: "400px"}}>
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
    )
}


