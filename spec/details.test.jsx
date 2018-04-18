import React from 'react';
import { shallow } from 'enzyme';
import Details from '../client/Details';
import EXAMPLE_RESTAURANT from './data/exampleSingleEntryRestaurantInfo';

describe('<Details />', () => {
  test('renders More Business Info title', () => {
    const wrapper = shallow(<Details attributes={EXAMPLE_RESTAURANT.attributes} />);
    expect(wrapper.find('h3').first().text()).toEqual('More Business Info');
  });
});
