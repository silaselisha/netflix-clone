import React, { useState } from 'react'
import SignupScreen from './SignupScreen'

import './LoginScreen.css'

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img className='loginScreen__logo' src={`https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png`} alt='netflix logo' />
             
            {!signIn && (<button className='loginScreen__button' onClick={() => setSignIn(true)}>Sign In</button>)}
            <div className='loginScreen__gradient' />
        </div>
        <div className='loginScreen__body'>
            {signIn ? <SignupScreen /> : (
                <>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className='loginScreen__input'>
                        <form>
                            <input type='email' placeholder='Email address' />
                            <button type='button' className='loginScreen__getStarted' onClick={() => setSignIn(true)}>Get Started</button>
                        </form>
                    </div>
                </>
            )}
        </div>
    </div>
  )
}

export default LoginScreen