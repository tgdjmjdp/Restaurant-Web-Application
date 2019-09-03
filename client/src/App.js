import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Navbar/Navbar'
import { Provider } from 'react-redux'
import store from './redux/store'
import Registeration from './components/Form/Auth/Registeration'
import Home from './components/Main/Home/Home'
import Main from './components/Main/Main'
import CssBaseline from '@material-ui/core/CssBaseline';
import Rest from './components/Main/Restaurant/Restaurant'

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <CssBaseline />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Registeration} />
            <Route exact path="/restaurant" component={Rest} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App;


{/* function App() {

  const classes = useStyles();
    
      return (
    <Provider store={store}>
        <div className="App">
          <Router>
            <React.Fragment>
              <Nav />
              <main
                style={{ marginTop: '50px' }}
                className={clsx(classes.content, {
                  [classes.contentShift]: sidebarOpen,
                })}
              >
                <div
                  className={classes.drawerHeader}
                >
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Registeration} />
                  </Switch>
                </div>
              </main>
            </React.Fragment>
          </Router>
        </div>
      </Provider>
      );
    }
    

    
 */}
