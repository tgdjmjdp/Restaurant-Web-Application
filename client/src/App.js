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
        <div className="App">
          <CssBaseline />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
