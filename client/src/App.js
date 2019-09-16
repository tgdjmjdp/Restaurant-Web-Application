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
import Footer from './components/Footer/Footer'

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
          <div className="position-relative overflow-auto pb-1">
            <Appbar />
          </div>
          <SideNav />
          <Notification />
          <div className="mt-5">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/restaurant/create" component={RestCreate} />
              <Route exact path="/rest/:rest_id" component={Restaurant} />
            </Switch>
          </div>
          {/* <div style={{ bottom: '0' }} className="position-absolute w-100">
            <Footer />
          </div> */}
        </React.Fragment>
      </Router>
    </Provider>
  )
}

export default App;
