import React from 'react'

const SearchBar = props => {
  return(
    <div>
      <a className="button large" onClick={props.handleClick}>Search</a>
      <label>Address:
        <input
          name='address'
          type='text'
          placeholder='Enter location'
          value={props.address}
          onChange={props.handlerFunction}
          />
      </label>
    </div>

  );
}

export default SearchBar
