import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
<<<<<<< HEAD
import BathroomShowContainer from './containers/BathroomShowContainer'
=======
>>>>>>> master
import IndexContainer from './containers/IndexContainer'



const App = props => {
  return(
    <Router history={browserHistory}>
<<<<<<< HEAD
      <Route path='/'>
        <IndexRoute component={IndexContainer} />
        <Route path='/bathrooms/:id'component={BathroomShowContainer} />
      </Route>
=======
      <Route path='/' component={IndexContainer} />
>>>>>>> master
    </Router>
  )
}

export default App
