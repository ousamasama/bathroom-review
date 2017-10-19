import React from 'react';

const FormField = props => {
  return(
    <div>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.label}
        onChange={props.formFieldChange}
        value={props.fieldContent}
      />
    </div>
  )
}

export default FormField;
