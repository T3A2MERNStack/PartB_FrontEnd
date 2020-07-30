import React, { useEffect, useState } from 'react'
import { Image } from 'cloudinary-react';
import Axios from 'axios'
import { Card, Icon, Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Container, Row , Col} from 'react-bootstrap'
import api from '../api'

export default function RecipePage() {
    const [data, setData] = useState("")
    const newArray = Array.from(data)
    return (
            <Container>
                <Row  className="justify-content">
                    {newArray.map((object, index) => {
                            return (
                                <Col sm={12} md={3}>
                                <Link to={`/recipe/${object._id}`} key={`${object._id}`} >
                                    <Card key={`${index}`} style={{margin: 10}}>
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
    )
    
}


