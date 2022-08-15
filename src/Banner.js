import React from 'react'
import './Banner.css'

const Banner = () => {
    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }

  return (
    <header className='banner' style={{ backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5efce5920d28887981c5bd9b/1620325755456-HV7G0OW366L9OEPUPR2C/Lupin+Part+2+banner.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
        <div className='banner__content'>
            <h1 className='banner__title'>Movie Name</h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
              <h1 className='banner__description'>{truncate('This is the test description.This is the test description.This is the test description.This is the test description.This is the test description.This is the test description.This is the test description.This is the test description.This is the test description.This is the test description.This is the test description.This is the test description.This is the test description.This is the test description.This is the test description.This is the test description.This is the test description.', 150)}</h1>
        </div>
        <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner