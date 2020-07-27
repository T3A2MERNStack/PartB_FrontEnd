import React from 'react'
// import ReactDOM from 'react-dom';
import { Segment, Icon, Rating } from 'semantic-ui-react'
import { Image } from 'cloudinary-react';


export default function ShowPage(props) {

    const {recipe_id} = props.match.params

    return (
        <>
            <Segment.Group style={{margin: '1em', padding: '1em', borderColor: "white"}}>
                {console.log(props)}
                <div><h1>BODY BUTTER</h1></div><br></br>
                <img alt="product" src={ require('./img/homecare.png') } style={{ width: '100%', outline: "3px solid white", outlineOffset: "-6px"}} />
                <br></br><div class="text-right">By<Icon name = 'user' />Arisa Okuyama</div>
                <br></br>
                <span>Use as a body moisturiser for silky soft skin. Also lovely as a night cream for your face. Use as a body moisturiser for silky soft skin. Also lovely as a night cream for your face.</span>
                {/* <Image alt="product" cloudName="highpitchit" dpr="auto" publicId={recipe_id} width="200" crop="scale"/> */}
                <p>
                    <Rating icon='heart' defaultRating={3} maxRating={5} /> (12345 ratings)
                </p>
                <Icon name = 'clock' />30mins

                <h3>INGREDIENTS</h3>
                <p>Amond oil    30g</p>
                <p>coconut oil    30g</p>
                <p>Shea butter   30g</p>
                <h3>STEPS</h3>
                <h3>1</h3><p>Heat oven to 180C/fan 160C/gas 4.</p>
                <h3>2</h3><p>Beat together 225g softened unsalted butter and 225g caster sugar until pale and creamy, then add 4 eggs, one at a time, slowly mixing through.</p>
                <h3>3</h3><p>ift in 225g self-raising flour, then add the finely grated zest of 1 lemon and mix until well combined.</p>
            </Segment.Group>
        </>
    )
}

