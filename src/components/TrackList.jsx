import styles from "../styles/style.module.css"
import React from "react";

export default function TrackList({album}) {

    const audio = new Map();

    album.tracks.forEach(element => {
        audio.set(element, new Audio("../" + element + ".mp3"));
    });

    const start = (track) => {
        if (track.paused) track.play();
        else track.pause();
    }

    return (
        <>
            <ol>
                {album.tracks.map((track) => (
                    <li 
                    key={track} className={styles.trackList}>{track} 
                    <button className={styles.play} onClick={() => start(audio.get(track))}>▶</button>
                    </li>
                ))}
            </ol>
        </>
    )
}