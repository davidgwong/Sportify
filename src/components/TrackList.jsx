import styles from "../styles/style.module.css";
import React from "react";

export default function TrackList({ album, setTrack }) {
  return (
    <>
      <ol className={styles.tracks}>
        {album.tracks.map((track) => (
          <li key={track} className={styles.trackList}>
            {track}
            <button
              className={styles.play}
              onClick={() => setTrack(album.tracks.indexOf(track))}
            >
              ▶
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}
