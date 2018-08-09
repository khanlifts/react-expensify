import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  // this works because we configured jest.config.json to snapshotSerializers
  // to use enzyme-to-json/serializer
  expect(wrapper).toMatchSnapshot();
});
