import './home.css';
import React from 'react';
import { useState } from 'react';
import Wolf from '../../wolf.mp4';
import River from '../../river.webp';
import Waves from '../../waves.webp';
import Mountain from '../../mountain.webp';
//wallpaperComp
import Wallpaper from '../wallpaperBox/wallpaperBox';


const Home = () => {

  const [isClicked, setIsClicked] = useState(false);
  const [wallName, setWallName] = useState('');
  document.body.style.overflow = "hidden"

  const goBacktoContainer = () => {
    return setIsClicked(false);
  }

  return (
    <>

      <div>

        {isClicked ?

          <Wallpaper backgroundProp={wallName} close={goBacktoContainer} />
          :
          (

            <div className='wallpaperContainers'>

              <h5 className='wallpapersTitle'> Nature Wallpapers </h5>

              <div className='wallpaperContainer' onClick={() => {
                setWallName('riverWallpaper');
                setIsClicked(true)
              }} >
                <img className='wallpaperItem' src={River} alt="river wallpaper" />
              </div>

              <div className='wallpaperContainer' onClick={() => {
                setWallName('wolfWallpaper');
                setIsClicked(true);
              }}>
                <video className="wallpaperItem" width="400" controls><source src={Wolf} type="video/ogg" />
                  Your browser does not support HTML video.
                </video>
              </div>

              <div className='wallpaperContainer' onClick={() => {
                setWallName('wavesWallpaper');
                setIsClicked(true);
              }}>
                <img className='wallpaperItem' src={Waves} alt=" waves wallpaper" />
              </div>

              <div className='wallpaperContainer' onClick={() => {
                setWallName('mountainWallpaper');
                setIsClicked(true);
              }}>
                <img className='wallpaperItem' src={Mountain} alt="mountain wallpaper" />
              </div>

            </div>
          )
        }

      </div>


    </>
  )
}

export default Home;