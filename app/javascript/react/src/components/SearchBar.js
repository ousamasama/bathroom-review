import React from 'react'

const SearchBar = props => {
  return(
    <div className="input-group input-group-rounded">
      <a className="button large" onClick={props.handleClick} id='submit'>Search</a>
      <label>
        <input
          className="input-group-field"
          id='search-field'
          name='address'
          type='search'
          placeholder='Enter location'
          value={props.address}
          onChange={props.handlerFunction}
          />
      </label>
      <div className="input-group-button">
        <input type="submit" class="button secondary" value="Search" onClick={props.handleClick}/>
      </div>

      <div class="input-group input-group-rounded">
        <input class="input-group-field" type="search"/>
        <div class="input-group-button">
          <input type="submit" class="button secondary" value="Search"/>
        </div>
      </div>

    </div>

  );
}

export default SearchBar
