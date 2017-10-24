import React from 'react'

const QuantitySelector = (props) => {
  let numbers
  if (props.number === 10) {
    numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
  } else if (props.number === 3) {
    numbers = ['1', '2', '3']
  }

  let toiletAmount = numbers.map(option => {
    return(
      <option key={option} value={option}>{option}</option>
      );
    })

  return (
    <label>{props.label}
      <select
        id={props.name}
        name='toilet-quantity' value={props.fieldContent} onChange={props.formFieldChange}>
        {toiletAmount}
      </select>
    </label>
  );
}

export default QuantitySelector;
