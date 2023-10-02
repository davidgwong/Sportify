import styles from "../styles/style.module.css"

export default function AlbumCover({album}) {
    return (
        <img src={album.coverImg} className={styles.albumCover} />
    )
}