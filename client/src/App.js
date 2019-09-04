import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Navbar/Navbar'
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './components/Main/Home/Home'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css'

const App = () => {

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
