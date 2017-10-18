import BathroomInfo from '../../src/components/BathroomInfo'

describe('BathroomInfo', () => {
  let wrapper;
  let bathroomInfo = {
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
      <BathroomInfo
        key='1'
        bathroomInfo={bathroomInfo}
      />
    )
  })

  it('should render a div tag', () => {
    expect(wrapper.find('div')).toBePresent()
  })

  it('should have a h1 tag with the establishment', () => {
    expect(wrapper.find('h1')).toBePresent()
    expect(wrapper.find('h1')).toHaveText('McDonalds')
  })

  it('should have p tags with the address', () => {
    expect(wrapper.find('p')).toBePresent()
  })
})
