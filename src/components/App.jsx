import styles from '../styles/style.module.css'
import AlbumList from './AlbumList'
import AlbumCover from './AlbumCover'
import TrackList from './TrackList'
import data from '../data.js'
import { useState } from 'react'

function App() {
  const [albumNum, setAlbumNum] = useState(3);

  return (
    <>
    <div className={styles.banner}>
      <div>
        <img src="/sportify.svg" className={styles.logo}/>
      </div>
      <div className={styles.title}>
        Sportify
      </div>
    </div>

      <div className={styles.currentAlbum}>
        <div>
          <AlbumCover album={data[albumNum]} />
        </div>
        <div>
          <TrackList album={data[albumNum]} />
        </div>
      </div>

      <div id="selectAlbum">
        <h2>Select an album: </h2>
        {data.map((album) => (
          <span 
            id={album.id} 
            key={album.id} 
            onClick={() => setAlbumNum(album.id)}>
            <AlbumList album={album} />
          </span>
        ))}
      </div>
    </>
  )
}

export default App
