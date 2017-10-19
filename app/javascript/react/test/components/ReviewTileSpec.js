import ReviewTile from '../../src/components/ReviewTile'

describe('ReviewTile', () => {
  let wrapper;
  let review = {
    "id": 1,
    "rating": 1,
    "body": "This is the review body.",
    "username": "username",
    "created_at": "10/19/17",
    "city": "furt",
    "state": "Michigan"
  }

  beforeEach(() => {
    wrapper = mount(
      <ReviewTile
        key={review.id}
        city={review.city}
        state={review.state}
        username={review.username}
        created_at={review.created_at}
        rating={review.rating}
        body={review.body}
      />
    )
  })

  it('should render a div tag', () => {
    expect(wrapper.find('div')).toBePresent()
  })

  it('should have a h3 tag with the reviewer name', () => {
    expect(wrapper.find('h3')).toBePresent()
    expect(wrapper.find('h3')).toIncludeText('username')
    expect(wrapper.find('h3')).toIncludeText('10/19/17')
    expect(wrapper.find('h3')).toIncludeText('furt')
    expect(wrapper.find('h3')).toIncludeText('Michigan')
  })

  it('should have a p tag with ratings content', () => {
    expect(wrapper.find('p')).toBePresent()
    expect(wrapper.find('.review-rating')).toIncludeText('1')
    expect(wrapper.find('.review-body')).toIncludeText('This is the review body.')
  })

})
