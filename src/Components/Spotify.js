import React, { useEffect, useRef, useState } from 'react'
import '../Styles/Spotify.css'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios'
import { reducerCases } from '../utils/Constants'

function Spotify() {

    const[{ token },dispatch]=useStateProvider();

    const bodyRef = useRef();
    const [navBackground, setNavBackground] = useState(false);
    const [headerBackground, setHeaderBackground] = useState(false);

    const bodyScrolled = () => {
        bodyRef.current.scrollTop >= 30
        ? setNavBackground(true)
        : setNavBackground(false);
        bodyRef.current.scrollTop >= 268
        ? setHeaderBackground(true)
        : setHeaderBackground(false);
    }

    useEffect(()=>{
        const getUserInfo = async() => {
            const {data} = await axios.get('https://api.spotify.com/v1/me',{
                headers : {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type":"application/json",        
                }
              })

              const userInfo = {
                userId : data.id,
                userName : data.display_name,
            };

            dispatch({
                type:reducerCases.SET_USER,
                userInfo
            });
        }

        getUserInfo();
        
    },[token,dispatch])

  return (
    <div className='spotify_container'>
        <div className='spotify_body'>
            <Sidebar />
            <div className='body' ref={bodyRef} onScroll={bodyScrolled}>
                <Navbar navBackground={navBackground} />
                <div className='body_contents'>
                    <Body headerBackground={headerBackground} />
                </div>
            </div>
        </div>

        <div className='spotify_footer'>
            <Footer />
        </div>

    </div>

    
  )
}

export default Spotify