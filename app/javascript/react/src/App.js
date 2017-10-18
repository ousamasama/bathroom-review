import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import BathroomShowContainer from './containers/BathroomShowContainer'
import IndexContainer from './containers/IndexContainer'



const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={IndexContainer} />
        <Route path='/bathrooms/:id'component={BathroomShowContainer} />
      </Route>
      <Route path='/' component={IndexContainer} />
    </Router>
  )
}

export default App
