import SearchBar from '../../src/components/SearchBar';

describe('SearchBar',() => {
  let wrapper, handleClick, handleFormChange;

  beforeEach(() => {
    handleClick = jasmine.createSpy('handleClick spy')
    handleFormChange = jasmine.createSpy('handleFormChange spy')
    wrapper = mount(
      <SearchBar
        address= "123 Fake St."
        handlerFunction={handleFormChange}
        handleClick={handleClick}
      />
    )
  })
  it('should render an A tag', () => {
    expect(wrapper.find('#submit')).toHaveClassName('button large')
  })

  it('should call handleClick when button is click', () => {
    wrapper.find('#submit').simulate('click')
    expect(handleClick).toHaveBeenCalled()
  })

  it('should render an input tag', () => {
    expect(wrapper.find('#search-field')).toHaveValue('123 Fake St.')
  })
})
