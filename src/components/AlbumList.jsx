import styles from "../styles/style.module.css"

export default function AlbumList({album}) {
    return (
        <>
            <div className={styles.selectAlbum}>
                <img src={album.coverImg} className={styles.albumAvatar} />
                <span className={styles.albumName}>{album.name}</span>
            </div>
        </>
    )
}