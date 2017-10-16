import React from 'react'

const SearchBar = props => {
  return(
    <label>Address:
      <input
        name='address'
        type='text'
        placeholder='Enter location'
        value={props.address}
        onChange={props.handlerFunction}
      />
    </label>
  );
}

export default SearchBar
