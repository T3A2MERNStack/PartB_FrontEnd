import React, { useEffect, useState, useContext } from 'react'
import { Segment, Icon, Rating } from 'semantic-ui-react'
import { Image } from 'cloudinary-react';
import Axios from 'axios'
import { Link } from 'react-router-dom'
import StateContext from '../store'


export default function ShowPage(props) {
    const [data, setData] = useState(null)
    const {recipe_id} = props.match.params
    const url = "http://localhost:4000"
    const {store, dispatch} = useContext(StateContext)

    useEffect(() => {
        Axios.get(`${url}/recipes/get/${recipe_id}`)
            .then(res => {
                setData(res.data[0])
                console.log(res.data[0])

            })
            .catch(error => {
                                if(error) {
                                console.log(error.message)
                              }})
    },[]);

    console.log(store)

    return (data &&
        <>
            <Segment.Group style={{margin: '1em', padding: '1em', borderColor: "white"}}>
                <div><h1>{data.productName}</h1></div><br></br>
                <img alt="product" src={ require('./img/homecare.png') } style={{ width: '100%', outline: "3px solid white", outlineOffset: "-6px"}} />
                <br></br><div className="text-right">By<Icon name = 'user' />Arisa Okuyama</div>
                <br></br>
                <p>{data.productSummary}</p>
                {/* <Image alt="product" cloudName="highpitchit" dpr="auto" publicId={recipe_id} width="200" crop="scale"/> */}

                <Rating  style={{margin: '1em'}} icon='heart' defaultRating={3} maxRating={5} /> (12345 ratings)

                <p><Icon name = 'clock' style={{margin: '1em'}}/>{data.prepTime}mins</p>

                <h3>INGREDIENTS</h3>
                <p>{data.ingredients[0].name}  {data.ingredients[0].amount} {data.ingredients[0].unit}</p>
                <p>{data.ingredients[1].name}    {data.ingredients[1].amount} {data.ingredients[1].unit}</p>
                <p>{data.ingredients[2].name}   {data.ingredients[2].amount} {data.ingredients[2].unit} </p>
                <h3>STEPS</h3>
                <h3>1</h3><p>{data.steps[0]}</p>
                <h3>2</h3><p>{data.steps[1]}</p>
                <h3>3</h3><p>{data.steps[2]}</p>
                <h3>4</h3><p>{data.steps[3]}</p>
                <h3>4</h3><p>{data.steps[4]}</p>
                <Link to={`/recipe/edit/${recipe_id}`}>EDIT FORM</Link>
            </Segment.Group>
        </>
    )
}

