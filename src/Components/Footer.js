import React from 'react'
import '../Styles/Footer.css'
import CurrentTrack from '../Components/CurrentTrack'
import PlayerControls from '../Components/PlayerControls'
import Volume from '../Components/Volume'

function Footer() {
  return (
    <div className='footer'>
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </div>
  )
}

export default Footer