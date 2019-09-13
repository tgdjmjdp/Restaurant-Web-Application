import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './components/Main/Home/Home'
import CssBaseline from '@material-ui/core/CssBaseline';
import { loadUser } from './redux/actions/authAction'
import setAuthToken from './utils/setAuthToken'
import './App.css'

// Components

import RestCreate from './components/Restaurant/RestCreate';
import SideNav from './components/Navbar/SideNav'
import Appbar from './components/Navbar/Appbar'
import Login from './components/Auth/Login'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <Appbar />
        <SideNav />
        <div className="pt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/restaurant/create" component={RestCreate} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
