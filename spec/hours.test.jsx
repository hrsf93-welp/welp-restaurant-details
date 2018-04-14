import React from 'react';
import { mount } from 'enzyme';
import Hours from '../client/Hours';
import EXAMPLE_RESTAURANT from '../data/exampleSingleEntryRestaurantInfo';

describe('<Hours />', () => {
  it('renders seven <li> components', () => {
    const wrapper = mount(<Hours hours={EXAMPLE_RESTAURANT.hours} />);
    expect(wrapper.find('li').length).toBe(7);
  });
});
