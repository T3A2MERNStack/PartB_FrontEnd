import React, { useEffect, useState } from 'react'
import {Image} from 'cloudinary-react';
import ReactDOM from 'react-dom';
import Newrecipe from './NewRecipeView'
import Axios from 'axios'

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
        console.log(typeof(data))
        const newArray = Array.from(data)
        return (
                <>
                {console.log(data)}
                {
                newArray.map((object, index) => {
                    return (
                        <div>
                        <p key={`${object.recipe.productName}`}>
                            {object.recipe.steps}
                        </p>
                        <h1>Hello, world!</h1>
                        <Image cloudName="highpitchit" publicId={Newrecipe.id} width="300" crop="scale"/>
                        </div>                       
                    )})
                
            }
                </>
    )
}

//             
//             >
        
//         
//         </>
//     }
// }


