import React, { useState } from 'react'
import {BrowserRouter, Route, Link } from 'react-router-dom'
import DisplayRecipePage from './DisplayRecipePage'
import CleaningPage from './CleaningPage'
import WelcomePage from './WelcomePage'
import SkincarePage from './SkincarePage'
import HomeCarePage from './HomeCarePage'
import MyRecipesPage from './MyRecipesPage'
import PersonalCarePage from './PersonalCarePage'
import NewRecipeView from './NewRecipeView'

const App = () => {
  // const [page, setPage] = useState("home")
  return (
    <div >
      <BrowserRouter>
        <nav>
          <Link to="/">Welcome</Link>
          <Link to="/skincare">Skincare Recipes</Link>
          <Link to="/cleaning">Cleaning Reciptes</Link>
          <Link to="/homecare">Home Care Recipes</Link>
          <Link to="/personalcare">Personal Care Recipes</Link>
          <Link to="/display">Recipe Name</Link>
          <Link to="/myrecipes">My Recipes</Link>
          <Link to="/newrecipe">Create a new Recipe</Link>
        </nav>
        <Route exact path = "/" component={WelcomePage}/>
        <Route exact path = "/skincare" component={SkincarePage}/>
        <Route exact path = "/cleaning" component={CleaningPage}/>
        <Route exact path = "/homecare" component={HomeCarePage}/>
        <Route exact path = "/personalcare" component={PersonalCarePage}/>
        <Route exact path = "/display" component={DisplayRecipePage}/>
        <Route exact path = "/myrecipes" component={MyRecipesPage}/>
        <Route exact path = "/newrecipe" component={NewRecipeView}/>
      </BrowserRouter>
    </div>
  )
}

export default App
