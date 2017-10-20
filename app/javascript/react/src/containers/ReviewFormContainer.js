import React, { Component } from 'react'
import FormField from '../components/FormField'
import QuantitySelector from '../components/QuantitySelector'

class ReviewFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      body: '',
      rating: 2
    }
    this.handleChange = this.handleChange.bind(this)
    this.clearForms = this.clearForms.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [event.target.id]: value })
  }

  clearForms() {
    this.setState({
      body: '',
      rating: 2
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let params = JSON.stringify({
      review: {
        bathroom_id: parseInt(this.props.bathroomInfo.id, 10),
        rating: parseInt(this.state.rating, 10),
        body: this.state.body
      }
    })
    this.props.addReview(params)
    this.clearForms();
  }

  render(){
    let number = 3
    return(
      <form id='add-review-form'>
        <h3>Add New Review</h3>
        <QuantitySelector
          name='rating'
          label='Rating'
          number={number}
          formFieldChange={this.handleChange}
          fieldContent={this.state.rating}
        />
        <FormField
          type='text'
          name='body'
          label='Review Body'
          formFieldChange={this.handleChange}
          fieldContent={this.state.body}
        />
        <input type="submit" id="review-submit" className="button" value="Add Review" onClick={this.handleSubmit}/>
      </form>
    )
  }
}


export default ReviewFormContainer;
