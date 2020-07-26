import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import Axios from 'axios'
import { Container, Form, Icon } from 'semantic-ui-react'

const NewRecipeFormView = () => {
    const [errorMessage, setErrorMessage] = useState(false)
    const url = "http://localhost:4000"
    const { register, handleSubmit, errors, watch } = useForm();

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

    const onSubmit = (data) => {
        Axios.post(`${url}/recipes/new`, {recipe: data})
        .then(res => {
            handleImageUpload(res.data.publicId)
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
            {errorMessage ? ( <h3>{errorMessage}</h3> ) : (null) }
            <Form style={{ padding : '10%'}} className='attached fluid segment'  onSubmit={handleSubmit(onSubmit)}>
                <label>Product name</label>
                <Form.Group>
                    <Form.Input key="productName" placeholder='productName' ref={register({ required: true })} width={6} />
                    {errors.productName && 'This is required.'}
                </Form.Group>
                    <div className="form-group">
                        <label>Product Summary</label>
                        <input key="productSummary" name="productSummary" ref={register({ required: true })} />
                        {errors.productSummary && 'This is required.'}
                    </div>
                    <div className="form-group">
                        <label>Prep Time</label>
                        <input key="prepTime" name="prepTime" type="number" ref={register({ pattern: /\d+/ })} />
                        {errors.prepTime && 'Please enter number for a prep time.'}
                    </div>
                    <div className="form-group">
                        <legend>Instructions</legend>
                        <label>Step 1  </label>
                        <input name="steps[0]" key="step1" ref={register({ required: true })} />
                        {errors.steps && 'This is required.'}{/* register an input */}
                    </div>
                    {
                        nextStep1 && (
                            <div className="form-group">
                                <label>Step 2</label>
                                <input name="steps2" key="step2" ref={register()} />
                            </div>
                        )
                    }
                    {
                        nextStep2 && (
                            <div className="form-group">
                                <label>Step 3</label>
                                <input name="steps[2]" key="step2" ref={register()} />
                            </div>
                        )
                    }
                    {
                        nextStep3 && (
                            <div className="form-group">
                                <label>Step 4</label>
                                <input name="steps[3]" key="step4" ref={register()} />
                            </div>
                        )
                    }
                    {
                        nextStep4 && (
                            <div className="form-group">
                                <label>Step 5</label>
                                <input name="steps[4]" key="step5" ref={register()} />
                            </div>
                        )
                    }
                    <div className="form-group">
                        <legend>Ingredients</legend>
                        <label>Ingredient 1</label>
                        <input key="ingredientsName[0].name" name="ingredients[0].name" ref={register()} />
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
                    </div>
                    <div className="form-group">
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
                    </div>
                    <div className="form-group">
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
                    </div>
                    <div className="form-group">
                    <legend>Category</legend>    
                        <label>Category</label>
                        <select name="category" ref={register({ required: true })}>
                        <option key="skin" value="skin">Skin Care</option>
                        <option key="cleaning" value="cleaning">Cleaning</option>
                        <option key="home" value="home">Home Care</option>
                        <option key="personal" value="personal">Personal Care</option>
                        </select>
                    </div>
                    <div className="form-group">
                    <legend>Pick the tags</legend>
                        { 
                    tags.map(
                        (tag,index) => <label key={tag}><input type="checkbox" value={tag} name={"tags."+index} ref={register} />{tag}</label>
                        )
                        }
                        
                    </div>
                    <div className="form-group">
                    <input type="file" key="image" name="image" />
                    </div>
                    <input className="btn btn-primary" type="submit" />

                    
                    {/* <button type="button" className="btn" onClick={handleImageUpload}>Submit</button> */}CDSF
                </Form>
            </Container>
        </>

    );
}


export default NewRecipeFormView;