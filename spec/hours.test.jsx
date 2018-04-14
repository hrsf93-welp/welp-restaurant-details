import React from 'react';
import { shallow } from 'enzyme';
import Hours from '../client/Hours';

describe('<Hours />', () => {
  it('renders seven <li> components', () => {
    const wrapper = shallow(<Hours />);
    expect(wrapper.find('li').length).toBe(7);
  });
});
