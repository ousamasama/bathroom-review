import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import IndexContainer from './containers/IndexContainer'



const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={IndexContainer} />
    </Router>
  )
}

export default App
