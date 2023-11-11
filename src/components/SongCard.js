// SongCard.jsx
import React, { useState, useRef } from 'react';
import "../Styles/SongCard.css"; // Asegúrate de tener tus estilos importados

const SongCard = ({ audioUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleDownload = () => {
    // Lógica para descargar el archivo de audio
    const link = document.createElement('a');
    link.href = audioUrl;
    link.download = 'cancion.mp3'; // Puedes personalizar el nombre del archivo
    link.click();
  };

  return (
    <div className="song-card-container">
      <div className={`song-card ${isPlaying ? 'playing' : ''}`}>
        <img src="https://static.wikia.nocookie.net/31minutos/images/b/bd/31minutos.jpg" alt="Miniatura de la canción" />
        <div className="song-controls">
          <button onClick={togglePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={handleDownload}>
            Download
          </button>
        </div>
        <audio ref={audioRef} src={audioUrl} />
      </div>
    </div>
  );
}

export default SongCard;
