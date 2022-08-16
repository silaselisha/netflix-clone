import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import { auth, onAuthStateChanged } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/user/userSlice'

import './App.css'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))
      }else {
        dispatch(logout)
      }
    })

    return unsubscribe
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
