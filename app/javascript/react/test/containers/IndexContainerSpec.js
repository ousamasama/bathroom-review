import IndexContainer from '../../src/containers/IndexContainer';
import BathroomForm from '../../src/containers/BathroomForm';
import SearchBar from '../../src/components/SearchBar';
import BathroomTile from '../../src/components/BathroomTile';
import BathroomShowFormButton from '../../src/components/BathroomShowFormButton';

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

  it('should not render a BathroomForm component or a BathroomShowFormButton component', () => {
    expect(wrapper.find(BathroomForm)).not.toBePresent();
    expect(wrapper.find(BathroomShowFormButton)).not.toBePresent();
  });

  it('should render a BathroomShowFormButton component if user is logged in', () => {
    wrapper.setState({
      user: {id: 1}
    })
    expect(wrapper.find(BathroomForm)).not.toBePresent();
    expect(wrapper.find(BathroomShowFormButton)).toBePresent();
  });

  it('should render a BathroomForm component if user is logged in', () => {
      wrapper.setState({
        user: {id: 1},
        button: false,
        form: true
      })
      expect(wrapper.find(BathroomForm)).toBePresent();
      expect(wrapper.find(BathroomShowFormButton)).not.toBePresent();
    });

  describe('handleFormChange', () => {
    it('should be invoked when the handleFormChange property of SearchBar is called', () => {
      wrapper.find('#search-field').simulate('change', {target: {value: address}});
      expect(IndexContainer.prototype.handleFormChange).toHaveBeenCalled();
    });
    it('should be should change the state of address', () => {
      wrapper.find('#search-field').simulate('change', {target: {value: address}});
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
