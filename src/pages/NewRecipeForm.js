import React from 'react'
import { useForm } from "react-hook-form"

const NewRecipeFormView = () => {
    const { register, handleSubmit, errors, watch } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    // const numbers = [1,2,3,4]

    // numbers.map(number =>{
    //    `const nextStep${number} = watch("steps[${number}]")`
    // })
       
    const nextStep1 =  watch("steps[0]")
    const nextStep2 =  watch("steps[1]")
    const nextStep3 =  watch("steps[2]")
    const nextStep4 =  watch("steps[3]")

    const tags = ["quick", "zero waste", "plastic free", "low cost", "shea butter", "essential oil"]
    const units = ["gram", "cut","table spoon","tea spoon", "ounce", "ml","pound", "kg", "inch"]

  return (
      <>
            <main className="App">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input key="productName" name="productName" ref={register({ required: true })} /> 
                        {errors.productSummary && 'This is required.'}{/* register an input */}
                    </div>
                    <div className="form-group">
                        <label>Product Summary</label>
                        <input key="productSummary" name="productSummary" ref={register({ required: true })} />
                        {errors.productSummary && 'This is required.'}
                    </div>
                    <div className="form-group">
                        <label>Prep Time</label>
                        <input key="prepTime" name="prepTime" ref={register({ pattern: /\d+/ })} />
                        {errors.age && 'Please enter number for a prep time.'}
                    </div>
                    <div className="form-group">
                        <legend>Instructions</legend>
                        <label>Step 1  </label>
                        <input name="steps[0]" key="step1" ref={register({ required: true })} />
                    </div>
                    {
                        nextStep1 && (
                            <div className="form-group">
                                <label>Step 2</label>
<<<<<<< HEAD
                                <input name="steps[1]" key="step2" ref={register({ required: true })} />
=======
                                <input name="steps[1]" key="step2" ref={register()} />
>>>>>>> 862dc7cc1486e093df69a16f42afdf25c5845923
                            </div>
                        )
                    }
                    {
                        nextStep2 && (
                            <div className="form-group">
                                <label>Step 3</label>
<<<<<<< HEAD
                                <input name="steps[2]" key="step2" ref={register({ required: true })} />
=======
                                <input name="steps[2]" key="step2" ref={register()} />
>>>>>>> 862dc7cc1486e093df69a16f42afdf25c5845923
                            </div>
                        )
                    }
                    {
                        nextStep3 && (
                            <div className="form-group">
                                <label>Step 4</label>
<<<<<<< HEAD
                                <input name="steps[3]" key="step4" ref={register({ required: true })} />
=======
                                <input name="steps[3]" key="step4" ref={register()} />
>>>>>>> 862dc7cc1486e093df69a16f42afdf25c5845923
                            </div>
                        )
                    }
                    {
                        nextStep4 && (
                            <div className="form-group">
                                <label>Step 5</label>
<<<<<<< HEAD
                                <input name="steps[4]" key="step5" ref={register({ required: true })} />
=======
                                <input name="steps[4]" key="step5" ref={register()} />
>>>>>>> 862dc7cc1486e093df69a16f42afdf25c5845923
                            </div>
                        )
                    }
                    <div className="form-group">
                        <legend>Ingredients</legend>
                        <label>Ingredient 1</label>
                        <input key="ingredientName" name="ingredients[0].ingredientName" ref={register()} />
                        <label>Amount </label>
                        <input key="ingredientAmount" name="ingredients[0].amount.ingredientAmount" ref={register()}/>
                        <label>Unit </label>
                        <select key="ingredientUnit" name="ingredients[0].amount.unitName" ref={register({ required: true })}>
                            { 
                            units.map(
                            (unit,index) => <option key={unit} value={unit}>{unit}</option>
                            )
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Ingredient 2</label>
                        <input key="ingredientName" name="ingredients[1].ingredientName" ref={register()} />
                        <label>Amount </label>
                        <input key="ingredientAmount" name="ingredients[1].amount.ingredientAmount" ref={register()}/>
                        <label>Unit </label>
                        <select key="ingredientUnit" name="ingredients[1].amount.unitName" ref={register({ required: true })}>
                            { 
                            units.map(
                            (unit,index) => <option key={unit} value={unit}>{unit}</option>
                            )
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Ingredient 3</label>
                        <input key="ingredientName" name="ingredients[2].ingredientName" ref={register()} />
                        <label>Amount </label>
                        <input key="ingredientAmount" name="ingredients[2].amount.ingredientAmount" ref={register()}/>
                        <label>Unit </label>
                        <select key="ingredientUnit" name="ingredients[2].amount.unitName" ref={register({ required: true })}>
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
                    <input className="btn btn-primary" type="submit" />
                </form>
            </main>
        </>

    );
}


export default NewRecipeFormView;