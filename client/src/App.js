import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Navbar/Navbar'
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './components/Main/Home/Home'
import CssBaseline from '@material-ui/core/CssBaseline';
import { loadUser } from './redux/actions/authAction'
import setAuthToken from './utils/setAuthToken'
import './App.css'

// Components

import RestCreate from './components/Restaurant/RestCreate';
import One from './components/Main/One'
import Two from './components/Main/Two'

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
        <Nav />
        <div className="pt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/one" component={One} />
            <Route exact path="/two" component={Two} />
            <Route exact path="/resturant" component={Home} />
            <Route exact path="/restaurant/create" component={RestCreate} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
