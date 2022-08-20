import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  const [show, setShow] = useState(false)
  const history = useHistory()
  useEffect(() => {
    const transitionHandler = () => {
      if(window.scrollY > 100) {
        setShow(true)
      }else {
        setShow(false)
      }
    }

    window.addEventListener('scroll', transitionHandler)
    return () => {
      window.removeEventListener('scroll', transitionHandler)
    }
  }, [])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
     <div className='nav__content'>
        <img className='nav__logo' src={`https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png`} alt='netflix logo' onClick={() => history.push('/')}/>
        <img className='nav__avatar' src={`https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png`} alt='netflix avatar' onClick={() => history.push('/profile')} />
      </div>
     </div>
  )
}

export default Nav