import React, { useEffect, useState, useContext } from 'react'
import { Segment, Icon, Rating, Button } from 'semantic-ui-react'
import { Image } from 'cloudinary-react';
import { Link, useHistory } from 'react-router-dom'
import StateContext from '../store'
import api from '../api'


export default function ShowPage(props) {
    const [data, setData] = useState(null)
    const {recipe_id} = props.match.params
    const {store, dispatch} = useContext(StateContext)
    const history = useHistory();

    useEffect(() => {
        api.get(`/recipes/get/${recipe_id}`)
            .then(res => {
                setData(res.data[0])
            })
            .catch(error => {
                if(error) {
                    console.log(error.message)
                }})
    },[]);

    const onDelete = () => {
        api.delete(`/recipes/delete/${recipe_id}`)
            .then(res => {
                history.push('/display')
            })
            .catch (err => {
                console.log(err)
            })
    }

    return (data &&
        <>
            <Segment.Group style={{margin: '1em', padding: '1em', borderColor: "white"}}>
                <div><h1>{data.productName}</h1></div><br></br>
                <Image alt={data.productName} cloudName="highpitchit" dpr="auto" publicId={data._id} width="150" height="150" crop="scale"/>
                <div>
                
                { store.user._id === data.userId && 
                    <Link to={`/recipe/edit/${recipe_id}`}>
                        <Button>EDIT RECIPE</Button>
                    </Link>
                }
                { store.user._id === data.userId && 
                    <Button onClick={onDelete}>DELETE RECIPE</Button>
                }
                </div>
                <br></br><div className="text-right">By<Icon name = 'user' />{data.userName}</div>
                <br></br>
                <p>{data.productSummary}</p>
                
                <Rating  style={{margin: '1em'}} icon='heart' defaultRating={3} maxRating={5} /> 

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
                <h3>5</h3><p>{data.steps[4]}</p>
                <h3>CATEGORY</h3>
                <p>{data.category}</p>
            </Segment.Group>
        </>
    )
}

