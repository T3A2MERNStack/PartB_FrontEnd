import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new EnzymeAdapter() })

it ('renders without crashing', () => {
  const wrapper = shallow(<App />)
})
// it('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
