import React, { Component } from 'react'
import FormField from '../components/FormField'

class ReviewFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      body: '',
      rating: 3
    }
    this.handleChange = this.handleChange.bind(this)
    this.clearForms = this.clearForms.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    let label = e.target.placeholder;

    this.setState({ [name]: value })
  }

  clearForms() {
    this.setState({
      body: '',
      rating: 3
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch(`/api/v1/reviews`, {
      credentials: 'same-origin',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        review: {
          rating: this.state.rating,
          body: this.state.body
        }
      })
    })
    this.clearForms();
  }

  render(){
    return(
      <form id='add-review-form'>
        <h3>Add New Review</h3>
        <FormField
          type='radio'
          name='rating'
          label='Rating'
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
      </form>
    )
  }
}


export default ReviewFormContainer;
