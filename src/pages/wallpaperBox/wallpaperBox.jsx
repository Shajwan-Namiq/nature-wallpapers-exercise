import React from 'react';
import Wolf from '../../wolf.mp4';
import River from '../../river.webp';
import Waves from '../../waves.webp';
import Mountain from '../../mountain.webp';
import { CloseButton } from 'react-bootstrap';

const WallpaperBox = (props) => {

  document.body.style.overflow = "hidden"

  return (
    <>
      <div>
        <div style=
          {{
            display: 'flex',
            width: '50%'
          }}>
          <CloseButton onClick={props.close} />
        </div>

        {props.backgroundProp === 'wolfWallpaper' ? (
          <video className="wallpaperBoxItem" width="400" controls><source src={Wolf} type="video/ogg" />
            Your browser does not support HTML video.
          </video>
        ) : (
          props.backgroundProp === 'mountainWallpaper' ? (
            <img className='wallpaperBoxItem' src={Mountain} alt="mountain wallpaper" />
          ) : (
            props.backgroundProp === 'wavesWallpaper' ? (
              <img className='wallpaperBoxItem' src={Waves} alt="waves wallpaper" />
            ) : (
              props.backgroundProp === 'riverWallpaper' ? (
                <img className='wallpaperBoxItem' src={River} alt="River wallpaper" />

              ) : ('')
            )
          )
        )}


      </div>
    </>

  )
}

export default WallpaperBox