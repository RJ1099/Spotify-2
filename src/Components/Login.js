import React from 'react'
import '../Styles/Login.css'


const logo = 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png'

function Login() {

    const handleClick = () =>{
        const clientId = '7b5f17cadde445a3ba08e3cd6c0fa665';
        const redirectUri = "http://localhost:3000/";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-email",
            "user-read-private",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-playback-position",
            "user-top-read",
        ];

        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialogue=true`;
    }
  return (
    <div className='login'>
        <img src={logo} alt='spotify' />
        <button onClick={handleClick}>Connect Spotify</button>
    </div>
  )
}

export default Login
