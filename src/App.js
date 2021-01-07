import React from 'react';
import SignUp from './components/SignUp'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import UpdateProfile from './components/UpdateProfile'
import {BrowserRouter, Link, Switch,Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
function App() {
  return (
    <BrowserRouter>
    <Route path='/signup' exact component={SignUp}/>
    <Route path='/login' exact component={Login}/>
    <PrivateRoute path='/' exact component={Dashboard}/>
    <PrivateRoute path='/update-profile' exact component={UpdateProfile}/>
    </BrowserRouter>
  );
}

export default App;
