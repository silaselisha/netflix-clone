import React from 'react'
import Nav from '../Nav'
import Plan from '../Plan'
import { auth, signOut } from '../firebase'
import { selectUser } from '../features/user/userSlice'
import { useSelector } from 'react-redux'

import './ProfileScreen.css'

const ProfileScreen = () => {
  const user = useSelector(selectUser)
  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img className='profileScreen__avatar' src={`https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png`} alt='netflix avatar' />
                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen__plans'>
                        <h3>Plans</h3>
                        <p>Renewal date: {`08-17-2022`}</p>
                        <div className=''>
                            <Plan title='Netflix Standard' quality='1080p' button='subscribe' />
                            <Plan title='Netflix Basic' quality='480p' button='subscribe' />
                            <Plan title='Netflix Premium' quality='4K+HDR' button='Current Package' color/>
                        </div>
                        <button className='profileScreen__signOut' onClick={() => signOut(auth).then(() => {}).catch((err) => alert(err.message))}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen