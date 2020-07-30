import React, {  useReducer } from 'react'
import {BrowserRouter, Route,  Switch } from 'react-router-dom'
import DisplayRecipePage from './component/DisplayRecipePage'
import CleaningPage from './component/CleaningPage'
import WelcomePage from './component/WelcomePage'
import SkincarePage from './component/SkincarePage'
import HomeCarePage from './component/HomeCarePage'
import MyRecipesPage from './component/MyRecipesPage'
import PersonalCarePage from './component/PersonalCarePage'
import NewRecipeForm from './component/NewRecipeForm'
import NoMatch from './component/NoMatch'
import NavBar from './component/NavBar.js'
import SignupPageView from './component/SignupPage'
import LoginPageView from './component/LoginPage'
import stateReducer from './stateReducer'
import StateContext from './store'
import ShowPage from './component/ShowPage'
import RecipeEditForm from './component/RecipeEditForm'


const App = () => {
  const [store, dispatch] = useReducer(stateReducer, {login: false, user: false} )
  return (
    <div >
      <StateContext.Provider value={{ store , dispatch }}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path = "/" component={WelcomePage} />
            <Route exact path = "/recipe/:recipe_id" component={ShowPage} />
            <Route exact path = "/display" component={DisplayRecipePage} />
            <Route exact path = "/skin" component={SkincarePage} />
            <Route exact path = "/cleaning" component={CleaningPage} />
            <Route exact path = "/homecare" component={HomeCarePage} />
            <Route exact path = "/personal" component={PersonalCarePage} />
            <Route exact path = "/display" component={DisplayRecipePage} />
            <Route exact path = "/myrecipes" component={MyRecipesPage} />
            <Route exact path = "/newrecipe" component={NewRecipeForm} />
            <Route exact path = "/signup" component={SignupPageView} />
            <Route exact path = "/login" component={LoginPageView} />
            <Route exact path = "/recipe/edit/:recipe_id" component={RecipeEditForm} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </StateContext.Provider>
    </div>
  )
}

export default App
