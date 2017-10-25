import QuantitySelector from '../../src/components/QuantitySelector';

describe('QuantitySelector', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <QuantitySelector
        label="Quantity"
        number={3}
        name="toiletQuantity"
        fieldContent="3"
      />
    )
  });

  it('should render a label tag', () => {
    expect(wrapper.find('label')).toBePresent();
  });

  it('should have a select tag with the toilet quantity', () => {
    expect(wrapper.find('select')).toBePresent();
    expect(wrapper.find('select')).toHaveValue("3");
  });
});
