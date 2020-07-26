import React, { useEffect, useState } from 'react'
import {Image} from 'cloudinary-react';
import ReactDOM from 'react-dom';
import Newrecipe from './NewRecipeForm'
import Axios from 'axios'
import { Card, Icon } from 'semantic-ui-react'

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
            {
            newArray.map((object, index) => {
                return (
                    <Card key={`${index}`}>
                        {/* <Image cloudName="highpitchit" publicId={object.id} width="300" crop="scale"/> */}
                        <Image src={ require('./img/logo.png') } wrapped ui={false} />
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
                )})     
            }
            
            <Card>
                <Image src={ require('./img/logo.png') } wrapped ui={false} />
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


