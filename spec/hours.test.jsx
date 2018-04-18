import React from 'react';
import { mount } from 'enzyme';
import { Hours } from '../client/Hours';
import EXAMPLE_RESTAURANT from './data/exampleSingleEntryRestaurantInfo';

describe('<Hours />', () => {
  it('renders a row for each day of the week', () => {
    const wrapper = mount(<Hours hours={EXAMPLE_RESTAURANT.hours} />);
    expect(wrapper.find('tr').length).toBe(7);
  });
});
