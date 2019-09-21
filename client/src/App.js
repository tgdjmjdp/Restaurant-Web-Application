import React, { useEffect } from 'react';
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
import Notification from './components/Notification/Notification'
import Restaurant from './components/Restaurant/Restaurant'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <CssBaseline />
          <div 
          style={{ 
            top: "0",
            zIndex: "50"
          }} 
          className="position-sticky pb-1"
          >
            <Appbar />
          </div>
          <SideNav />
          <Notification />
          <div className="">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/restaurant/create" component={RestCreate} />
              <Route exact path="/rest/:rest_id/home" component={Restaurant} />
              <Route exact path="/rest/:rest_id/asset" component={Restaurant} />
              <Route exact path="/rest/:rest_id/asset/food" component={Restaurant} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  )
}

export default App;
