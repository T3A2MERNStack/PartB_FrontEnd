import React, { useEffect, useState } from 'react'
import { Image } from 'cloudinary-react';
import ReactDOM from 'react-dom';
import Newrecipe from './NewRecipeForm'
import Axios from 'axios'
import { Card, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function DisplayRecipePage() {
    const [data, setData] = useState("")
    const url = "http://localhost:4000"
    useEffect(() => {
        Axios.get(`${url}/recipes/lists`)
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
    return (
        <>

            <div className="d-flex justify-content-start ml-5" >
                    {
                        newArray.map((object, index) => {
                            return (
                                <Link to={`/recipe/${object._id}`} >
                                    <Card style={{margin: 20}}key={`${index}`}>
                                        <Image alt="product" cloudName="highpitchit" dpr="auto" publicId={object._id} width="300" crop="scale"/>
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
                                            Rating
                                            <Icon name='star' />
                                            <Icon name='star' />
                                            <Icon name='star' />
                                            <Icon name='star' />
                                            <Icon name='star' />
                                        </Card.Content>
                                    </Card>
                                </Link>                
                        )})     
                    }
                {/* </div>   */}
            </div>
            
            <Card>
                <Image src={ require('./img/logo.png') } />
                <Card.Content>
                <Card.Header>Recipe Product Name</Card.Header>
                <Card.Meta>
                    <span className='date'>User of this recipe</span>
                </Card.Meta>
                <Card.Description>
                    Product Summary
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    Rating
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                </Card.Content>
            </Card>
        </>
    )
}


