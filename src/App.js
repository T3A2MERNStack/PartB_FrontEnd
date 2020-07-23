import React, { useReducer } from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import DisplayRecipePage from './components/DisplayRecipePage'	
import CleaningPage from './components/CleaningPage'	
import WelcomePage from './components/WelcomePage'	
import SkincarePage from './components/SkincarePage'	
import HomeCarePage from './components/HomeCarePage'	
import MyRecipesPage from './components/MyRecipesPage'	
import PersonalCarePage from './components/PersonalCarePage'	
import NewRecipeView from './components/NewRecipeView'	
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar.js'
import SignupPageView from './components/SignupPage'
import LoginPageView from './components/LoginPage'
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
