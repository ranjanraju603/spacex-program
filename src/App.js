import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
 
import Login from './Login';
import Details from './Details';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {/* <div className="header">
            <NavLink exact activeClassName="active" to="/">Login</NavLink>
            <NavLink activeClassName="active" to="/Details">Details</NavLink>
            
          </div> */}
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/Details" component={Details} />
              
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App