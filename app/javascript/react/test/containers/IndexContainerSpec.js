import React from 'react';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import IndexContainer from '../../src/containers/IndexContainer';
import SearchBar from '../../src/components/SearchBar';

describe('IndexContainer', () => {
  let wrapper,
      address = "1 Main St, Boston, MA 02111";

  beforeEach(() => {
    spyOn(IndexContainer.prototype, 'handleFormChange').and.callThrough();
    wrapper = mount(
      <IndexContainer
      />
    )
  });

  it('should render a SearchBar component', () => {
    expect(wrapper.find(SearchBar)).toBePresent();
  });

  describe('handleFormChange', () => {
    it('should be invoked when the handleFormChange property of SearchBar is called', () => {
      wrapper.find('input').simulate('change', {target: {value: address}});
      expect(IndexContainer.prototype.handleFormChange).toHaveBeenCalled();
    });
    it('should be should change the state od address', () => {
      wrapper.find('input').simulate('change', {target: {value: address}});
      expect(wrapper.state()).toEqual({address: address});
    });
  });
});
