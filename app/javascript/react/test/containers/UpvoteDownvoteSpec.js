import UpvoteDownvote from '../../src/containers/UpvoteDownvote'

describe ('UpvoteDownvote', () => {
  let wrapper;
  let reviewId = 3
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
    spyOn(UpvoteDownvote.prototype, 'handleClick').and.callThrough();
    wrapper = mount(
      <UpvoteDownvote
        currentUser={user}
        votes={votes}
        review={reviewId}
      />
    )
  })

  it("should render an i tag with className 'fa-thumbs-up'", () => {
    expect(wrapper.find('.fa-thumbs-up')).toBePresent();
    expect(wrapper.find('.selected')).toBePresent();
  })

  it("should render an i tag with className 'fa-thumbs-down'", () => {
    expect(wrapper.find('.fa-thumbs-down')).toBePresent();
  })

  it("should render an p tag with content Votes: ", () => {
    expect(wrapper.find('p')).toHaveText('Votes: 2');
  })
})
