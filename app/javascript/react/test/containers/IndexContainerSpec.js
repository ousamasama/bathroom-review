import IndexContainer from '../../src/containers/IndexContainer';
import SearchBar from '../../src/components/SearchBar';
import BathroomTile from '../../src/components/BathroomTile';

describe('IndexContainer', () => {
  let wrapper,
      address = "1 Main St, Boston, MA 02111";
  beforeEach(() => {

    spyOn(IndexContainer.prototype, 'handleClick').and.callThrough();
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
    it('should be should change the state of address', () => {
      wrapper.find('input').simulate('change', {target: {value: address}});
      expect(wrapper).toHaveState('address': address);
    });
  });
  describe('adds BathroomTile to page', () => {
    it('should add a tile for a bathroom', () => {
      let bathrooms = [
        {
          establishment: 'McDonalds',
          address: '123 Fake St.'
        }
      ]
      wrapper.setState({ bathrooms: bathrooms })
      expect(wrapper).toHaveState('bathrooms': bathrooms)
      expect(wrapper.find(BathroomTile)).toBePresent()
    })
  })
});
