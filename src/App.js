import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import './App.css'
import SignupScreen from './screens/SignupScreen'
import LoginScreen from './screens/LoginScreen'

function App() {
  const user = false

  return (
    <div className="app">
      {!user ? <LoginScreen /> : (
        <Router>
          <Switch>
            <Route path={'/'} exact>
              <HomeScreen />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
