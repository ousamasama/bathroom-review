import BathroomTile from '../../src/components/BathroomTile'

describe('BathroomTile', () => {
  let wrapper;
  let bathroom = {
            "id": 1,
            "address": "123 Fake St.",
            "city": "Boston",
            "state": "MA",
            "zip": "12111",
            "establishment": "McDonalds",
            "gender": "men",
            "key_needed": false,
            "toilet_quantity": 4
        }

  beforeEach(() => {
    wrapper = mount(
      <BathroomTile
        key='1'
        bathroom={bathroom}
      />
    )
  })

  it('should render a div tag', () => {
    expect(wrapper.find('div')).toBePresent()
  })

  it('should have a h3 tag with the establishment', () => {
    expect(wrapper.find('h3')).toBePresent()
    expect(wrapper.find('h3')).toHaveText('McDonalds')
  })

  it('should have a h4 tag with the establishment', () => {
    expect(wrapper.find('h4')).toBePresent()
    expect(wrapper.find('h4')).toHaveText('123 Fake St.')
  })
})
