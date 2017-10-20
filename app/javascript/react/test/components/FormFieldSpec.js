import FormField from '../../src/components/FormField'

describe('FormField', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <FormField
        type='text'
        name='establishment'
        label='Establishment Name'
        fieldContent="McDonalds"
      />
    )
  })

  it('should render a div tag', () => {
    expect(wrapper.find('div')).toBePresent()
  })

  it('should have a input tag with the establishment', () => {
    expect(wrapper.find('input')).toBePresent()
    expect(wrapper.find('input')).toHaveValue('McDonalds')
  })
})
