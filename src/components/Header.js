import React, { useState } from 'react';



const Header = () => {

  const [youtubeUrl, setYoutubeUrl] = useState('');


  const handleSearch = async () => {
    try {

      const apiUrl = 'https://localhost:44371/api/youtubemp3/convertir-y-descargar';
      const urlCompleta = `${apiUrl}?URL=${encodeURIComponent(youtubeUrl)}`;

      fetch(urlCompleta, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/octet-stream',
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error en la petición: ${response.statusText}`);
          }
          // Devolver el flujo de octetos como respuesta
          return response.blob();
        })
        .then(blobData => {
          // Crear un objeto URL para el blob
          const url = window.URL.createObjectURL(new Blob([blobData]));
          // Crear un enlace y hacer clic para iniciar la descarga
          const a = document.createElement('a');
          a.href = url;
          a.download = 'audio.mp3'; // Puedes establecer el nombre del archivo aquí
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        })
        .catch(error => {
          console.error('Error en la petición:', error);
        });
      }catch (error) {
        console.error('Error en la petición:', error);
      }
    };



    return (
      <header className="text-white p-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 mt-8">Nombre de la App</h1>
        <div className="container mx-auto flex items-center justify-center">
          {/* esto es momentaneo, pero hay que mejorar el margin top. */}

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Ingrese la URL de la canción"
              className="py-2 px-4 border bg-gray-600 border-gray-600 rounded w-96 focus:outline-none focus:border-cyan-500"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)} />
            <button className="bg-cyan-500 py-2 px-4 rounded hover:bg-cyan-600 focus:outline-none focus:bg-cyan-700 ml-3" onClick={handleSearch}>
              Buscar
            </button>
          </div>
        </div>
      </header>
    );
  };

  export default Header;
