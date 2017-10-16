import React from 'react';
import { Router, browserHistory, Route, IndexRoute } form 'react-router';


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={IndexContainer} />
      </Route>
    </Router>
  )
}

export default App
