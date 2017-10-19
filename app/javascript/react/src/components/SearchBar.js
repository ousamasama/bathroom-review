import React from 'react'

const SearchBar = props => {
  return(
    <div>
      <a className="button large" onClick={props.handleClick} id='submit'>Search</a>
      <label>
        <input
          id='search-field'
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
