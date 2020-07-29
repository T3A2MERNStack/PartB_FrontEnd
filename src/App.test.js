import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Display from './pages/DisplayRecipePage'

import CleaningPage from './pages/CleaningPage'
import HomeCarePage from './pages/HomeCarePage'
import SkincarePage from './pages/SkincarePage'
import sinon from 'sinon'
import { Link } from 'react-router';
import ShowPage from './pages/ShowPage'
import SignupPageView from './pages/SignupPage'
import NewRecipeView from './pages/candelete'


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

it ('new recipe page renders without crashing', () => {
  const wrapper = shallow(<NewRecipeView />)
  expect(wrapper.find('YOU MUST LOG IN TO CREATE RECIPES'))
})





//tests not working

it ('login button clicks', () => {
  const wrapper = shallow(<ShowPage/>)
  expect(wrapper.find('[type="submit"]').simulate("click"))
})

it ('login button clicks', () => {
  const wrapper = shallow(<SkincarePage />)
  expect(wrapper.find('.data')).to.have.lengthOf(1);
  wrapper.setState({ name: 'data' })
})

it('includes link to skincare page', () => {                                       
  const wrapper = shallow(<SkincarePage/>);
  expect(wrapper.find(Link).props().to).toBe('/skin');
 });

 it("displays steps", () => {
  const wrapper = mount(<ShowPage />);
  expect(wrapper.find("STEP"))
});

describe('LoginMethods()', () => {
  it('isEmailValid should return false if email is invalid', () => {
    expect(LoginMethods().isEmailValid('notvalidemail')).toBeFalsy();
    expect(LoginMethods().isEmailValid('notvalidemail.aswell')).toBeFalsy();
  })
});

