import ReviewFormContainer from '../../src/containers/ReviewFormContainer'
import FormField from '../../src/components/FormField';
import QuantitySelector from '../../src/components/QuantitySelector';

describe('ReviewFormContainer', () => {
  let wrapper,
      review = {
          "id": 1,
          "rating": 1,
          "body": "This is the review body.",
          "username": "username",
          "created_at": "10/19/17",
          "city": "furt",
          "state": "Michigan"
        }

  beforeEach(() => {
    spyOn(ReviewFormContainer.prototype, 'handleChange').and.callThrough();
    spyOn(ReviewFormContainer.prototype, 'clearForms').and.callThrough();
    wrapper = mount(
      <ReviewFormContainer
        bathroomInfo={review}
      />
    )
  })

  it('should render a FormField component', () => {
    expect(wrapper.find(FormField)).toBePresent();
  });

  it('should render a QuantitySelector component', () => {
    expect(wrapper.find(QuantitySelector)).toBePresent();
  });

  it('should render a Submit button', () => {
    expect(wrapper.find("#review-submit")).toBePresent();
  });

  describe('handleChange', () => {
    it('should be invoked when the handleChange property of ReviewFormContainer is called', () => {
      wrapper.find('#rating').simulate('change', {target: { rating: 3 }});
      expect(ReviewFormContainer.prototype.handleChange).toHaveBeenCalled();
    });
    it('should be should change the state of rating', () => {
      wrapper.find('#rating').simulate('change', {target: { rating: 3 }});
      expect(wrapper).toHaveState('rating': 3);
    });
  })
})
