import React, { useState, useContext, useEffect } from 'react'
import { useForm, Controller } from "react-hook-form"
import Axios from 'axios'
import { Container, Form, Message,  Checkbox } from 'semantic-ui-react'
import { useHistory, Link } from 'react-router-dom'
import StateContext from '../store'

const RecipeEditForm = (props) => {
    const {store, dispatch} = useContext(StateContext)
    const [errorMessage, setErrorMessage] = useState(false)
    const url = "http://localhost:4000"
    const { register, handleSubmit, errors, watch } = useForm();
    const history = useHistory()
    const {recipe_id} = props.match.params
    // console.log(recipe_id)
    const [recipeData, recipeSetData] = useState(null)

    const {control} = useForm();


    useEffect(() => {
        Axios.get(`${url}/recipes/get/${recipe_id}`)
            .then(res => {
                recipeSetData(res.data[0])
                // console.log(res.data)
            })
            .catch(error => {
                                if(error) {
                                console.log(error.message)
                              }})
    },[]);

    console.log(recipeData)

    const handleImageUpload = (id) => {
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', 'hpx42bqi');
        formData.append('public_id', id)
        // formData.append('overwrite', true)
        const options = {
          method: 'POST',
          body: formData,
          overwrite: true
        };
    
        console.log(files, formData)
        return fetch('https://api.Cloudinary.com/v1_1/highpitchit/image/upload', options)
          .then(res => res.json())
          .then(data => {
              console.log(data)
              history.push(`/recipe/${recipe_id}`)
            // setImageUrl(res.secure_url)
            // setImageAlt(`An image of ${res.original_filename}`)
            })
          .catch(err => console.log(err.message))
      }

    const onSubmit = (data) => 
    {
        const userId= store.user._id
        const addUserData = { ...data, userId: userId}
         Axios.put(`${url}/recipes/edit/${recipe_id}`, {recipe: addUserData} )
        .then(res => {
            // handleImageUpload(res.data.publicId)
            // addRecipeToUser(res.data._id)
            history.push(`/recipe/${recipe_id}`)
          })
        .catch(err => {
            if(err.response){
                setErrorMessage(err.response.data.message)
            } else {
                setErrorMessage("something went wrong")
                throw err
            }
        })
    };
    // console.log(store)
    const tags = ["quick", "zero waste", "plastic free", "low cost", "shea butter", "essential oil"]
    const units = ["gram", "cut","table spoon","tea spoon", "ounce", "ml","pound", "kg", "inch"]

  return ( 
    recipeData ? (
        <>
            <Container style={{ marginLeft: '20%', marginRight: '20%', marginTop: 30 }} >
                <Message
                            attached
                            style= {{backgroundColor: '#2e8b57', textAlign: 'center', fontSize: '2em'}}
                            header= 'Create new recipe'
                            // content='Fill out the form below to sign-up for a new account'
                            />
                {errorMessage ? ( <h3>{errorMessage}</h3> ) : (null) }
                <Form style={{ padding : '10%'}} className='attached fluid segment'  onSubmit={handleSubmit(onSubmit)}>
                    <label>Product name</label>
                    <Form.Group>
                        <input name="productName" defaultValue={recipeData.productName} key="productName" ref={register()}/>
                        {errors.productName && 'This is required.'}
                    </Form.Group>
                    <label>Product Summary</label>
                    <Form.Group>
                        <input name="productSummary" defaultValue={recipeData.productSummary} key="productSummary" placeholder='productSummary' ref={register()}/>
                        {errors.productSummary && 'This is required.'}
                    </Form.Group>
                    <label>Prep Time</label>
                    <Form.Group>
                        <input name="prepTime" defaultValue={recipeData.prepTime} key="prepTime" placeholder='prepTime' type="number" ref={register()}/>
                        {errors.prepTime && 'This is required.'}
                    </Form.Group>
                    <legend>Instructions</legend>
                    <label>Step 1  </label>
                    <Form.Group>
                        <input name="steps[0]" key="step1" defaultValue={recipeData.steps[0]} placeholder='step 1'  ref={register()}/>
                        {errors.steps && 'This is required.'}
                    </Form.Group>
                    <label>Step 2</label>
                    <Form.Group>
                        <input name="steps[1]" key="step2" defaultValue={recipeData.steps[1]} placeholder='step2'ref={register()}/>
                    </Form.Group>
                    <label>Step 3</label>
                    <Form.Group>
                        <input name="steps[2]" defaultValue={recipeData.steps[2]} key="step3" placeholder='step3'ref={register()}/>
                    </Form.Group>
                    <label>Step 4</label>
                    <Form.Group>
                        <input name="steps[3]" defaultValue={recipeData.steps[3]} key="step4" placeholder='step4'ref={register()}/>
                    </Form.Group>
                    <label>Step 5</label>
                    <Form.Group>
                        <input name="steps[4]" defaultValue={recipeData.steps[4]} key="step5" placeholder='step5'ref={register()}/>
                    </Form.Group>
                        <legend>Ingredients</legend>
                        <Form.Group>
                            <label>Ingredient 1</label>
                            <input key="ingredientsName[0].name" defaultValue={recipeData.ingredients[0].name} name="ingredients[0].name" ref={register()} />
                            <label>Amount </label>
                            <input type="number" key="ingredientsAmount[0].amount" defaultValue={recipeData.ingredients[0].amount}  name="ingredients[0].amount" ref={register({ pattern: /\d+/ })}/>
                            {/* {errors.ingredientsAmount[0].amount && 'Please enter number'} */}
                            <label>Unit </label>
                            <select key="ingredientsUnit[0].unit" name="ingredients[0].unit" defaultValue={recipeData.ingredients[0].unit} ref={register()}>
                                { 
                                units.map(
                                (unit,index) => <option key={unit} value={unit}>{unit}</option>
                                )
                                }
                            </select>
                        </Form.Group>
                        <Form.Group>
                            <label>Ingredient 2</label>
                            <input key="ingredientsName" defaultValue={recipeData.ingredients[1].name} name="ingredients[1].name" ref={register()} />
                            <label>Amount </label>
                            <input type="number" key="ingredientsAmount" defaultValue={recipeData.ingredients[1].amount} name="ingredients[1].amount" ref={register({ pattern: /\d+/ })}/>
                        
                            <label>Unit </label>
                            <select key="ingredientsUnit" name="ingredients[1].unit" defaultValue={recipeData.ingredients[1].unit} ref={register({ required: true })}>
                                { 
                                units.map(
                                (unit,index) => <option key={unit} value={unit}>{unit}</option>
                                )
                                }
                            </select>
                        </Form.Group>
                        <Form.Group>
                            <label>Ingredient 3</label>
                            <input key="ingredientsName" name="ingredients[2].name" defaultValue={recipeData.ingredients[2].name} ref={register()} />
                            <label>Amount </label>
                            <input type="number" key="ingredientsAmount" name="ingredients[2].amount" defaultValue={recipeData.ingredients[2].amount}ref={register({ pattern: /\d+/ })}/>
                            
                            <label>Unit </label>
                            <select key="ingredientsUnit" name="ingredients[2].unit" defaultValue={recipeData.ingredients[2].unit} ref={register({ required: true })}>
                                { 
                                units.map(
                                (unit,index) => <option key={unit} value={unit}>{unit}</option>
                                )
                                }
                            </select>
                            {errors.age && 'Please enter number for a prep time.'}
                        </Form.Group>
                        <legend>Category</legend>    
                        <Form.Group  >
                            <select name="category" defaultValue={recipeData.category} style={{width: "50%"}}  ref={register({ required: true })}>
                            <option key="skin" value="skin">Skin Care</option>
                            <option key="cleaning" value="cleaning">Cleaning</option>
                            <option key="home" value="home">Home Care</option>
                            <option key="personal" value="personal">Personal Care</option>
                            </select>
                        </Form.Group>
                        <legend>Pick the tags</legend>
                        <Form.Group widths='equal'>
                                { 
                            tags.map(
                                (tag,index) => 
                                <Checkbox key={index} label={tag} name={tag} value={tag} ref={register} />
                            )
                            }    
                        </Form.Group>
                        {/* <Form.Group>
                            <input type="file" key="image" name="image" />
                        </Form.Group> */}
                            <input className="btn btn-primary" type="submit" onClick = {handleImageUpload}  />
                </Form>
            </Container>
        </>
        ): (<Container>YOU MUST LOG IN TO CREATE RECIPES</Container>)
    ); 
}


export default RecipeEditForm;