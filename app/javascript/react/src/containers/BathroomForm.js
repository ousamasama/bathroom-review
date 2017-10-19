import React, { Component } from 'react';
import FormField from '../components/FormField';
import QuantitySelector from '../components/QuantitySelector';

class BathroomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      address: '',
      city: '',
      state: '',
      zip: '',
      establishment: '',
      gender: '',
      keyNeeded: false,
      toiletQuantity: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyNeededChange = this.handleKeyNeededChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    let label = event.target.placeholder;
    this.validateInputs(value, name, label);
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit() {


  }

  handleKeyNeededChange(event) {
    if( this.state.keyNeeded === false ) {
      this.setState({ keyNeeded: true });
    } else {
      this.setState({ keyNeeded: false });
    }
  }

  validateInputs(value, name, label) {
    if (value === '' || value === ' ') {
      let newError = { [name]: `${label} can't be blank` };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState[name];
      this.setState({ errors: errorState });
      return true;
    }
  }

  render() {
    let errorDiv;
    let errorItems;
    if(Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return( <p key={error}>{error}</p> )
      })
      errorDiv = <div className='callout alert'>{errorItems}</div>
    }

    return(
      <form id='add-bathroom-form'>
        <h3>Add New Bathroom:</h3>
        {errorDiv}
        <FormField
          type='text'
          name='establishment'
          label='Establishment Name'
          formFieldChange={this.handleChange}
          fieldContent={this.state.establishment}
        />
        <FormField
          type='text'
          name='address'
          label='Address'
          formFieldChange={this.handleChange}
          fieldContent={this.state.address}
        />
        <FormField
          type='text'
          name='city'
          label='City'
          formFieldChange={this.handleChange}
          fieldContent={this.state.city}
        />
        <FormField
          type='text'
          name='state'
          label='State'
          formFieldChange={this.handleChange}
          fieldContent={this.state.state}
        />
        <FormField
          type='text'
          name='zip'
          label='Zip'
          formFieldChange={this.handleChange}
          fieldContent={this.state.zip}
        />
        <FormField
          type='text'
          name='gender'
          label='Gender'
          formFieldChange={this.handleChange}
          fieldContent={this.state.gender}
        />
        <QuantitySelector
          name="toiletQuantity"
          formFieldChange={this.handleChange}
          fieldContent={this.state.toiletQuantity}
        />
        <label>
          Key Needed?
          <input id="keyNeeded" onChange={this.handleKeyNeededChange} type="checkbox" checked={this.state.keyNeeded} name="keyNeeded"/>
        </label>
        <input type="submit" id="bathroom-submit" className="button" value="Add Bathroom" onClick={this.handleSubmit}/>
      </form>
    )
  }
}

export default BathroomForm;
