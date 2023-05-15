import React from 'react'
import '../Styles/Sidebar.css'
import {HiOutlineHome, HiSearch} from 'react-icons/hi'
import {VscLibrary} from 'react-icons/vsc'
import Playlists from '../Components/Playlists'

const logo = 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='top_links'>
        <div className='logo'>
          <img src={logo} alt=''/>
        </div>
        <ul>
          <li>
            <HiOutlineHome />
            <span>Home</span>
          </li>
          <li>
            <HiSearch />
            <span>Search</span>
          </li>
          <li>
            <VscLibrary />
            <span>Library</span>
          </li>
        </ul>
      </div>

      <Playlists />
    </div>
  )
}

export default Sidebar