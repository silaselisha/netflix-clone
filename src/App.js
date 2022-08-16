import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import { auth, onAuthStateChanged } from './firebase'

import './App.css'

function App() {
  const user = false
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        console.log(user)
      }else {
        console.log('User not logged in')
      }
    })

    return unsubscribe()
  }, [])

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
