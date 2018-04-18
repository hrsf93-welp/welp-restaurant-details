import React from 'react';
import { shallow } from 'enzyme';
import Summary from '../client/Summary';
import EXAMPLE_RESTAURANT from './data/exampleSingleEntryRestaurantInfo';

describe('<Summary />', () => {
  test('renders Price Range correctly', () => {
    const wrapper = shallow(<Summary
      today={{ hoursOpen: '', isOpen: '' }}
      menu=""
      price={EXAMPLE_RESTAURANT.attributes.restaurantsPriceRange2}
    />);
    expect(wrapper.find('.price dd').first().text()).toEqual('$11-30');
  });
});
