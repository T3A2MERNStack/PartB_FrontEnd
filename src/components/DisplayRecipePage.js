import React from 'react'
import {Image} from 'cloudinary-react';
import ReactDOM from 'react-dom';
import Newrecipe from './NewRecipeView'

export default function DisplayRecipePage() {
    return (
        <div>
        <h1>Hello, world!</h1>
        <Image cloudName="highpitchit" publicId={Newrecipe.files} width="300" crop="scale"/>
        </div>
    )
}
