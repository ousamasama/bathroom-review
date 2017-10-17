import React from 'react';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import NavBar from '../../src/components/NavBar';

describe('NavBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<NavBar/>)
  });
  it('should render a div tag with a class of top-bar', () => {
    expect(wrapper.find('div')).toHaveClassName('top-bar');
  });
  it('should render an li tag with a class of page-title', () => {
    expect(wrapper.find('li')).toHaveClassName('page-title');
  });
});
