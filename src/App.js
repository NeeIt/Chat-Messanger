import React from 'react';
import Auth from './pages/Auth/';
import Home from './pages/Home/';
import { Route } from 'react-router-dom';

class App extends React.Component{
  render()
  {
    return (
    <div className="wrapper">
      <Route exact path={["/login","/register"]} component={Auth}/>
      <Route exact path="/" component={Home}/>
    </div>
    );
  }
}

export default App;
