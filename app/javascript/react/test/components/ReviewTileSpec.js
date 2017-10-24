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
  let votes = [
    {
      id: 2,
      user_id: 25,
      review_id: 2,
      vote: 0,
      created_at: "2017-10-23T15:58:48.589Z",
      updated_at: "2017-10-23T17:03:47.572Z"
    },
    {
      id: 4,
      user_id: 28,
      review_id: 2,
      vote: 1,
      created_at: "2017-10-23T18:10:19.694Z",
      updated_at: "2017-10-23T18:10:35.679Z"
    },
    {
      id: 7,
      user_id: 26,
      review_id: 2,
      vote: 1,
      created_at: "2017-10-23T18:14:00.524Z",
      updated_at: "2017-10-23T18:14:00.524Z"
    }
  ]
  let user = {
      id: 28,
      email: "new_user@email.com",
      created_at: "2017-10-20T18:33:03.055Z",
      updated_at: "2017-10-23T18:14:19.258Z",
      role: "member",
      username: "new_user2",
      city: null,
      state: null,
      profile_photo: {
        url: "/uploads/user/profile_photo/28/expedition-pack.jpg"
      }
    }

  beforeEach(() => {
    wrapper = mount(
      <ReviewTile
        key={review.id}
        city={review.city}
        state={review.state}
        username={review.username}
        createdAt={review.created_at}
        rating={review.rating}
        body={review.body}
        currentUser={user}
        votes={votes}
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
