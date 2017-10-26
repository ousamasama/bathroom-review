import BathroomForm from '../../src/containers/BathroomForm';
import FormField from '../../src/components/FormField';
import QuantitySelector from '../../src/components/QuantitySelector';

describe('BathroomForm', () => {
  let wrapper,
      handleChange;

  beforeEach(() => {
    spyOn(BathroomForm.WrappedComponent.prototype, 'handleChange').and.callThrough();
    wrapper = mount(
      <BathroomForm.WrappedComponent
      />
    )
  });

  it('should render a FormField component', () => {
    expect(wrapper.find(FormField)).toBePresent();
  });

  it('should render a QuantitySelector component', () => {
    expect(wrapper.find(QuantitySelector)).toBePresent();
  });

  it('should render a Submit button', () => {
    expect(wrapper.find("#bathroom-submit")).toBePresent();
  });

  describe('handleChange', () => {
    it('should be invoked when the handleChange property of BathroomForm is called', () => {
      wrapper.find('#establishment').simulate('change', {target: { establishment: "McDonalds" }});
      expect(BathroomForm.WrappedComponent.prototype.handleChange).toHaveBeenCalled();
    });
    it('should be should change the state of address', () => {
      wrapper.find('#establishment').simulate('change', {target: { establishment: "McDonalds" }});
      expect(wrapper).toHaveState('establishment': "McDonalds");
    });
  });
});
