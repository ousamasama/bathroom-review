import React from 'react'

const SearchBar = props => {
  return(
    <div>
      <form onSubmit={props.handleClick}>
        <div className="input-group input-group-rounded">
            <input
              className="input-group-field"
              type="search"
              id='search-field'
              name='address'
              placeholder='Enter location'
              value={props.address}
              onChange={props.handlerFunction}
            />
            <div className="input-group-button">
                <input
                  type="submit"
                  className="button secondary"
                  value="Search"
                />
            </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar
