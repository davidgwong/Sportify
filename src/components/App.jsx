import styles from "../styles/style.module.css";
import AlbumList from "./AlbumList";
import AlbumCover from "./AlbumCover";
import TrackList from "./TrackList";
import MusicPlayer from "./MusicPlayer";
import data from "../data.js";
import { useState } from "react";

function App() {
  const [albumNum, setAlbumNum] = useState(3);
  const [trackNum, setTrackUrl] = useState(0);

  return (
    <>
      <div className={styles.banner}>
        <div>
          <img src="/sportify.svg" className={styles.logo} />
        </div>
        <div className={styles.title}>Sportify</div>
      </div>

      <div className={[styles.row, styles.currentAlbum]}>
        <div id="player" className={styles.col}>
          <MusicPlayer track={data[albumNum].trackUrl[trackNum]} />
        </div>
        <div className={styles.col}>
          <TrackList album={data[albumNum]} setTrack={setTrackUrl} />
        </div>
      </div>

      <div id="selectAlbum" className={styles.row}>
        <h2>Select an album: </h2>
        {data.map((album) => (
          <span
            id={album.id}
            key={album.id}
            onClick={() => setAlbumNum(album.id)}
          >
            <AlbumList album={album} />
          </span>
        ))}
      </div>
    </>
  );
}

export default App;
