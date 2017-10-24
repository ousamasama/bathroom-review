import React from 'react'

const SearchBar = props => {
  return(
    <form>
      <input type="submit" className="button large" value="Search" onClick={props.handleClick} id='submit'></input>
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
    </form>

  );
}

export default SearchBar
