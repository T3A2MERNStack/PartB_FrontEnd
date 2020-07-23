import React from 'react'
import { useForm } from "react-hook-form"

const NewRecipeFormView = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    const tags = ["quick", "zero waste", "plastic free", "low cost", "shea butter", "essential oil"]
    const units = ["gram", "cut","table spoon","tea spoon", "ounce", "ml","pound", "kg", "inch"]

  return (
      <>
            <main className="App">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input name="productName" ref={register({ required: true })} /> 
                        {errors.productSummary && 'This is required.'}{/* register an input */}
                    </div>
                    <div className="form-group">
                        <label>Product Summary</label>
                        <input name="productSummary" ref={register({ required: true })} />
                        {errors.productSummary && 'This is required.'}
                    </div>
                    <div className="form-group">
                        <label>Prep Time</label>
                        <input name="prepTime" ref={register({ pattern: /\d+/ })} />
                        {errors.age && 'Please enter number for a prep time.'}
                    </div>
                    <div className="form-group">
                        <legend>Instructions</legend>
                        <label>Step 1  </label>
                        <input name="step1" ref={register({ required: true })} />
                        {errors.age && 'Please enter number for a prep time.'}
                    </div>
                    <div className="form-group">
                        <legend>Ingredients</legend>
                        <label>Ingredient 1</label>
                        <input name="ingredients[0].ingredientName" ref={register()} />
                        <label>Amount </label>
                        <input name="ingredients[0].amount.ingredientAmount" ref={register()}/>
                        <label>Unit </label>
                        <select name="ingredients[0].amount.unitName" ref={register({ required: true })}>
                            { 
                            units.map(
                            (unit,index) => <option value={unit}>{unit}</option>
                            )
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Ingredient 2</label>
                        <input name="ingredients[1].ingredientName" ref={register()} />
                        <label>Amount </label>
                        <input name="ingredients[1].amount.ingredientAmount" ref={register()}/>
                        <label>Unit </label>
                        <select name="ingredients[1].amount.unitName" ref={register({ required: true })}>
                            { 
                            units.map(
                            (unit,index) => <option value={unit}>{unit}</option>
                            )
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Ingredient 3</label>
                        <input name="ingredients[2].ingredientName" ref={register()} />
                        <label>Amount </label>
                        <input name="ingredients[2].amount.ingredientAmount" ref={register()}/>
                        <label>Unit </label>
                        <select name="ingredients[2].amount.unitName" ref={register({ required: true })}>
                            { 
                            units.map(
                            (unit,index) => <option value={unit}>{unit}</option>
                            )
                            }
                        </select>
                        {errors.age && 'Please enter number for a prep time.'}
                    </div>
                    <div className="form-group">
                    <legend>Category</legend>    
                        <label>Category</label>
                        <select name="category" ref={register({ required: true })}>
                        <option value="skin">Skin Care</option>
                        <option value="cleaning">Cleaning</option>
                        <option value="home">Home Care</option>
                        <option value="personal">Personal Care</option>
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
                    <input className="btn btn-primary" type="submit" />
                </form>
            </main>
        </>

    );
}


export default NewRecipeFormView;