import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow, mount } from "enzyme"
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Display from './component/DisplayRecipePage'
import CleaningPage from './component/CleaningPage'
import HomeCarePage from './component/HomeCarePage'
import SkincarePage from './component/SkincarePage'
import ShowPage from './component/ShowPage'
import SignupPageView from './component/SignupPage'
import NewRecipeView from './component/candelete'
import NavBar from './component/NavBar'
import WelcomePage from './component/WelcomePage'
import NoMatch from './component/NoMatch'


Enzyme.configure({ adapter: new EnzymeAdapter() })

it ('renders without crashing', () => {
  const wrapper = shallow(<App />)
})


it ('display renders without crashing', () => {
  const wrapper = shallow(<Display />)
})

it ('cleaning page renders without crashing', () => {
  const wrapper = shallow(<CleaningPage />)
})

it ('home care page renders without crashing', () => {
  const wrapper = shallow(<HomeCarePage />)
})

it ('skin care page renders without crashing', () => {
  const wrapper = shallow(<SkincarePage />)
})

it ('new recipe page shows error message', () => {
  const wrapper = shallow(<NewRecipeView />)
  expect(wrapper.find('YOU MUST LOG IN TO CREATE RECIPES'))
})

it('finds no match error ', () => {
  const wrapper = shallow(<NoMatch />)
  expect(wrapper.find('h1').text()).toContain('Error 404 Page does not exist')
})


