import BathroomInfo from '../../src/components/BathroomInfo'
import BathroomShowContainer from '../../src/containers/BathroomShowContainer';

describe('BathroomShowContainer', () => {
  let wrapper;
  let bathrooms = {
      id: 1,
      address: '123 Fake St.',
      city: 'pizza',
      state: 'AL',
      zip: '35603',
      establishment: 'McDonalds',
      gender: "male"
    }


  beforeEach(() => {
    wrapper = mount(<BathroomShowContainer
        params={bathrooms}
      />
    );
  })

  describe('adds BathroomInfo to page', () => {
    it('should add a tile for a BathroomInfo', () => {

      wrapper.setState({ bathroomInfo: bathrooms })
      expect(wrapper).toHaveState('bathroomInfo': bathrooms)
      expect(wrapper.find(BathroomInfo)).toBePresent()
    })
  })
})
