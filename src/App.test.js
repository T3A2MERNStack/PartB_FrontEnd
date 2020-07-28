import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Display from './pages/DisplayRecipePage'

Enzyme.configure({ adapter: new EnzymeAdapter() })

it ('renders without crashing', () => {
  const wrapper = shallow(<App />)
})

it('renders an `.icon-heart`', () => {
  const wrapper = shallow(<Display />);
  expect(wrapper.find('.icon-heart')).to.have.lengthOf(5);
});
// it('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
