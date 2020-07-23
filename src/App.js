import React, { useState, useReducer } from 'react'
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import DisplayRecipePage from './pages/DisplayRecipePage'
import CleaningPage from './pages/CleaningPage'
import WelcomePage from './pages/WelcomePage'
import SkincarePage from './pages/SkincarePage'
import HomeCarePage from './pages/HomeCarePage'
import MyRecipesPage from './pages/MyRecipesPage'
import PersonalCarePage from './pages/PersonalCarePage'
import NewRecipeView from './pages/NewRecipeView'
import NoMatch from './pages/NoMatch'
import NavBar from './pages/NavBar.js'
import SignupPageView from './pages/SignupPage'
import LoginPageView from './pages/LoginPage'
import stateReducer from './stateReducer'
import StateContext from './store'


const App = () => {
  const [store, dispatch] = useReducer(stateReducer, {login: false, user: false} )
  return (
    <div >
      <StateContext.Provider value={{ store , dispatch}}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path = "/" component={WelcomePage} />
            <Route exact path = "/skincare" component={SkincarePage} />
            <Route exact path = "/cleaning" component={CleaningPage} />
            <Route exact path = "/homecare" component={HomeCarePage} />
            <Route exact path = "/personalcare" component={PersonalCarePage} />
            <Route exact path = "/display" component={DisplayRecipePage} />
            <Route exact path = "/myrecipes" component={MyRecipesPage} />
            <Route exact path = "/newrecipe" component={NewRecipeView} />
            <Route exact path = "/signup" component={SignupPageView} />
            <Route exact path = "/login" component={LoginPageView} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </StateContext.Provider>
    </div>
  )
}

export default App
