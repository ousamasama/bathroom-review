import React, { Component } from 'react';
import FormField from '../components/FormField';
import QuantitySelector from '../components/QuantitySelector';

class BathroomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      establishment: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      gender: '',
      keyNeeded: false,
      toiletQuantity: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyNeededChange = this.handleKeyNeededChange.bind(this);
    this.clearForms = this.clearForms.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    let label = event.target.placeholder;
    this.validateInputs(value, name, label);
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    Object.keys(this.state).forEach((stateKey) => {
      if( stateKey != 'errors' && stateKey != 'keyNeeded' && stateKey != 'toiletQuantity' ) {
        let label = document.getElementById(stateKey).placeholder
        this.validateInputs(this.state[stateKey], stateKey, label)
      }
    })
    if( Object.keys(this.state.errors).length === 0 ) {
      fetch(`/api/v1/bathrooms`, {
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({
          bathroom: {
            establishment: this.state.establishment,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            gender: this.state.gender,
            key_needed: this.state.keyNeeded,
            toilet_quantity: parseInt(this.state.toiletQuantity, 10)
          }
        })
      })
      this.clearForms();
    }
  }

  clearForms() {
    this.setState({
      establishment: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      gender: '',
      keyNeeded: false,
      toiletQuantity: 1
    })
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

    let number = 10

    return(
      <div className="add-bathroom-form">
        <form id='add-bathroom-form'>
          <h3>Add New Bathroom:</h3>
          {errorDiv}
          <div className="grid-x">
            <FormField
              type='text'
              name='establishment'
              label='Establishment Name'
              formFieldChange={this.handleChange}
              fieldContent={this.state.establishment}
            />
          </div>
          <div className="grid-x">
            <FormField
              type='text'
              name='address'
              label='Address'
              formFieldChange={this.handleChange}
              fieldContent={this.state.address}
            />
          </div>
          <div className="grid-x">
            <div className="small-5 cell">
              <FormField
                type='text'
                name='city'
                label='City'
                formFieldChange={this.handleChange}
                fieldContent={this.state.city}
              />
            </div>
            <div className="small-5 cell">
              <FormField
            type='text'
            name='state'
            label='State'
            formFieldChange={this.handleChange}
            fieldContent={this.state.state}
              />
            </div>
          </div>
          <div className="grid-x">
            <div className="small-2 cell">
              <FormField
                type='text'
                name='zip'
                label='Zip'
                formFieldChange={this.handleChange}
                fieldContent={this.state.zip}
              />
            </div>
            <div className="small-2 cell">
              <FormField
                type='text'
                name='gender'
                label='Gender'
                formFieldChange={this.handleChange}
                fieldContent={this.state.gender}
              />
            </div>
            <div className="small-2 cell">
              <QuantitySelector
                name="toiletQuantity"
                label="Toilet Quantity:"
                number={number}
                formFieldChange={this.handleChange}
                fieldContent={this.state.toiletQuantity}
              />
            </div>
          </div>
          <label>
            Key Needed?
            <input id="keyNeeded" onChange={this.handleKeyNeededChange} type="checkbox" checked={this.state.keyNeeded} name="keyNeeded"/>
          </label>
          <input type="submit" id="bathroom-submit" className="button" value="Add Bathroom" onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default BathroomForm;
