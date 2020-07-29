import React, {  useReducer } from 'react'
import {BrowserRouter, Route,  Switch } from 'react-router-dom'
import DisplayRecipePage from './pages/DisplayRecipePage'
import CleaningPage from './pages/CleaningPage'
import WelcomePage from './pages/WelcomePage'
import SkincarePage from './pages/SkincarePage'
import HomeCarePage from './pages/HomeCarePage'
import MyRecipesPage from './pages/MyRecipesPage'
import PersonalCarePage from './pages/PersonalCarePage'
import NewRecipeForm from './pages/NewRecipeForm'
import NoMatch from './pages/NoMatch'
import NavBar from './pages/NavBar.js'
import SignupPageView from './pages/SignupPage'
import LoginPageView from './pages/LoginPage'
import stateReducer from './stateReducer'
import StateContext from './store'
import ShowPage from './pages/ShowPage'
import RecipeEditForm from './pages/RecipeEditForm'


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
