import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import BathroomShowContainer from './containers/BathroomShowContainer'
import IndexContainer from './containers/IndexContainer'
import AdminUserIndex from './containers/AdminUserIndex'



const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={IndexContainer} />
        <Route path='/bathrooms/:id' component={BathroomShowContainer} />
        <Route path='/admin/users' component={AdminUserIndex} />
      </Route>
    </Router>
  )
}

export default App
