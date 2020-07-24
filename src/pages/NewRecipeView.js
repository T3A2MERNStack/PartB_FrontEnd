import React, { useState } from 'react'
import NewRecipeFormView from './NewRecipeForm'
import '../App.css'



const NewRecipeView = () => {
  const [imageUrl, setImageUrl] = useState(null)
  const [imageAlt, setImageAlt] = useState(null)
  
  const handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]')
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'hpx42bqi');
    const options = {
      method: 'POST',
      body: formData,
    };

    console.log(files, formData)
    return fetch('https://api.Cloudinary.com/v1_1/highpitchit/image/upload', options)
      .then(res => res.json())
      .then(res => {
        setImageUrl(res.secure_url)
        setImageAlt(`An image of ${res.original_filename}`)
        })
      .catch(err => console.log(err))
  }


    return (
      <>
        <main className="App">
          <section className="left-side">
            {/* <form>
              <div className="form-group">
                <input type="file"/>
              </div>
              <button type="button" className="btn" onClick={handleImageUpload}>Submit</button>
            </form> */}
          </section>
          <section className="right-side" >
            <p>The resulting image will be displayed here</p>
            {imageUrl && (
              <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
            )}
          </section>
        </main>
        <NewRecipeFormView />
      </>
    );
  }


  export default NewRecipeView;