import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import {Image} from 'cloudinary-react'

class NewRecipeView extends React.Component{
    state = {
      imageUrl: null,
      imageAlt: null,
    }
    
    render() {
      const { imageUrl, imageAlt } = this.state;
      this.handleImageUpload = () => {
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData();
        formData.append('file', files[0]);
        // replace this with your upload preset name
        formData.append('upload_preset', 'hpx42bqit');
        const options = {
        method: 'POST',
        body: formData,
        };

// replace cloudname with your Cloudinary cloud_name
return fetch('https://api.cloudinary.com/v1_1/highpitchit/image/upload', options)
  .then(res => res.json())
  .then(res => {
    this.setState({
      imageUrl: res.secure_url,
      imageAlt: `An image of ${res.original_filename}`
    })
  })
  .catch(err => console.log(err));
      }
      return (
        <main className="NewRecipeView">
          <section className="left-side">
            <form>
              <div className="form-group">
                <input type="file"/>
              </div>
  
              <button type="button" className="btn" onClick={this.handleImageUpload}>Submit</button>
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
      );
    }
  }

  export default NewRecipeView;