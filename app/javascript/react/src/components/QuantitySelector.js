import React from 'react'

const QuantitySelector = (props) => {
  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

  let toiletAmount = numbers.map(option => {
    return(
      <option key={option} value={option}>{option}</option>
      );
    })

  return (
    <label>Toilet Quantity:
      <select
        id={props.name}
        name='toilet-quantity' value={props.fieldContent} onChange={props.formFieldChange}>
        <option value=""></option>
        {toiletAmount}
      </select>
    </label>
  );
}

export default QuantitySelector;
