import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import Axios from 'axios'
import { Container, Form, Message,  Checkbox } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

const NewRecipeFormView = () => {
    const [errorMessage, setErrorMessage] = useState(false)
    const url = "http://localhost:4000"
    const { register, handleSubmit, errors, watch } = useForm();
    const history = useHistory()

    const handleImageUpload = (id) => {
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', 'hpx42bqi');
        formData.append('public_id', id)
        const options = {
          method: 'POST',
          body: formData,
        };
    
        console.log(files, formData)
        return fetch('https://api.Cloudinary.com/v1_1/highpitchit/image/upload', options)
          .then(res => res.json())
          .then(data => {
              console.log(data)
            // setImageUrl(res.secure_url)
            // setImageAlt(`An image of ${res.original_filename}`)
            })
          .catch(err => console.log(err.message))
      }

    const onSubmit = (data) => 
    {
        Axios.post(`${url}/recipes/new`, {recipe: data})
        .then(res => {
            console.log(res.data.publicId)
            handleImageUpload(res.data.publicId)
            history.push('/')
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
       
    const nextStep1 =  watch("steps[0]")
    const nextStep2 =  watch("steps[1]")
    const nextStep3 =  watch("steps[2]")
    const nextStep4 =  watch("steps[3]")
    const tags = ["quick", "zero waste", "plastic free", "low cost", "shea butter", "essential oil"]
    const units = ["gram", "cut","table spoon","tea spoon", "ounce", "ml","pound", "kg", "inch"]

  return (
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
                        <input name="productName" key="productName" placeholder='productName'  ref={register({ required: true })}/>
                        {errors.productName && 'This is required.'}
                    </Form.Group>
                    <label>Product Summary</label>
                    <Form.Group>
                        <input name="productSummary" key="productSummary" placeholder='productSummary' ref={register({ required: true })}/>
                        {errors.productSummary && 'This is required.'}
                    </Form.Group>
                    <label>Prep Time</label>
                    <Form.Group>
                        <input name="prepTime" key="prepTime" placeholder='prepTime' type="number" ref={register({ required: true })}/>
                        {errors.prepTime && 'This is required.'}
                    </Form.Group>
                    <legend>Instructions</legend>
                    <label>Step 1  </label>
                    <Form.Group>
                        <input name="steps[0]" key="step1" placeholder='step 1'  ref={register({ required: true })}/>
                        {errors.steps && 'This is required.'}
                    </Form.Group>
                        {
                            nextStep1 && (
                                <>
                                    <label>Step 2</label>
                                    <Form.Group>
                                        <input name="steps[1]" key="step2" placeholder='step2'ref={register({ required: true })}/>
                                    </Form.Group>
                                </>
                            )
                        }
                        {
                            nextStep2 && (
                                <>
                                    <label>Step 3</label>
                                    <Form.Group>
                                        <input name="steps[2]" key="step3" placeholder='step3'ref={register({ required: true })}/>
                                    </Form.Group>
                                </>
                            )
                        }
                        {
                            nextStep3 && (
                                <>
                                    <label>Step 4</label>
                                    <Form.Group>
                                        <input name="steps[3]" key="step4" placeholder='step4'ref={register({ required: true })}/>
                                    </Form.Group>
                                </>
                            )
                        }
                        {
                            nextStep4 && (
                                <>
                                    <label>Step 5</label>
                                    <Form.Group>
                                        <input name="steps[4]" key="step5" placeholder='step5'ref={register({ required: true })}/>
                                    </Form.Group>
                                </>
                            )
                        }
                        <legend>Ingredients</legend>
                        <Form.Group>
                            <label>Ingredient 1</label>
                            <input key="ingredientsName[0].name" name="ingredients[0].name" ref={register({ required: true })} />
                            <label>Amount </label>
                            <input type="number" key="ingredientsAmount[0].amount" name="ingredients[0].amount" ref={register({ pattern: /\d+/ })}/>
                            {/* {errors.ingredientsAmount[0].amount && 'Please enter number'} */}
                            <label>Unit </label>
                            <select key="ingredientsUnit[0].unit" name="ingredients[0].unit" ref={register({ required: true })}>
                                { 
                                units.map(
                                (unit,index) => <option key={unit} value={unit}>{unit}</option>
                                )
                                }
                            </select>
                        </Form.Group>
                        <Form.Group>
                            <label>Ingredient 2</label>
                            <input key="ingredientsName" name="ingredients[1].name" ref={register()} />
                            <label>Amount </label>
                            <input type="number" key="ingredientsAmount" name="ingredients[1].amount" ref={register({ pattern: /\d+/ })}/>
                        
                            <label>Unit </label>
                            <select key="ingredientsUnit" name="ingredients[1].unit" ref={register({ required: true })}>
                                { 
                                units.map(
                                (unit,index) => <option key={unit} value={unit}>{unit}</option>
                                )
                                }
                            </select>
                        </Form.Group>
                        <Form.Group>
                            <label>Ingredient 3</label>
                            <input key="ingredientsName" name="ingredients[2].name" ref={register()} />
                            <label>Amount </label>
                            <input type="number" key="ingredientsAmount" name="ingredients[2].amount" ref={register({ pattern: /\d+/ })}/>
                            
                            <label>Unit </label>
                            <select key="ingredientsUnit" name="ingredients[2].unit" ref={register({ required: true })}>
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
                            <select name="category" style={{width: "50%"}}  ref={register({ required: true })}>
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
                        <Form.Group>
                            <input type="file" key="image" name="image" />
                        </Form.Group>
                            <input className="btn btn-primary" type="submit" onClick = {handleImageUpload} />
                </Form>
            </Container>
        </>
    );
}


export default NewRecipeFormView;