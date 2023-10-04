export default function MusicPlayer({ track }) {
  let trackUrl = "https://www.youtube.com/embed/" + track + "?autoplay=1";
  return (
    <iframe
      width="300"
      height="300"
      src={trackUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture; 
        web-share"
      allowFullScreen
      autoPlay="1"
    ></iframe>
  );
}
