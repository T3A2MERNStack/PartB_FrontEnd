import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import {Image} from 'cloudinary-react'
import { useForm } from "react-hook-form"

const NewRecipeView = () => {
  const [imageUrl, setImageUrl] = useState(null)
  const [imageAlt, setImageAlt] = useState(null)

  // initialise the hook
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]')
    const formData = new FormData();
    formData.append('file', files[0]);
    // replace this with your upload preset name
    formData.append('upload_preset', 'hpx42bqi');
    const options = {
      method: 'POST',
      body: formData,
    };

    // replace cloudname with your Cloudinary cloud_name
    return fetch('https://api.Cloudinary.com/v1_1/highpitchit/image/upload', options)
      .then(res => res.json())
      .then(res => {
        setImageUrl(res.secure_url)
        setImageAlt(`An image of ${res.original_filename}`)
        })
      .catch(err => console.log(err));
  }

  const tags = ["quick", "zero waste", "plastic free", "low cost", "shea butter", "essential oil"]
    return (
      <>
        <main className="App">
          <section className="left-side">
            <form>
              <div className="form-group">
                <input type="file"/>
              </div>

              <button type="button" className="btn" onClick={handleImageUpload}>Submit</button>
              <button type="button" className="btn widget-btn">Upload Via Widget</button>
            </form>
          </section>
          <section className="right-side">
            <p>The resulting image will be displayed here</p>
            {imageUrl && (
              <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
            )}
          </section>
        </main>
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
              <input name="age" ref={register({ pattern: /\d+/ })} />
              {errors.age && 'Please enter number for a prep time.'}
            </div>
            <div className="form-group">
              <label>Instructions</label>
              <input name="productSummary" ref={register({ required: true })} />
              {errors.age && 'Please enter number for a prep time.'}
            </div>
            <div className="form-group">
              <label>Ingredients</label>
              <input name="productSummary" ref={register({ required: true })} />
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
                (tag,index) => <label key={tag}><input type="checkbox" value={tag} name={"tags."+index*2} ref={register} />{tag}</label>
                  )
                }
              </div>
            <input className="btn btn-primary" type="submit" />
          </form>
        </main>
      </>
    );
  }


  export default NewRecipeView;