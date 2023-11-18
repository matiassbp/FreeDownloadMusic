import React, { useState } from 'react';
import {
  RiInstagramLine, RiGithubFill, RiLinkedinBoxLine,
  RiHeart3Fill, RiPlayFill, RiSkipForwardFill, RiSkipBackFill, RiShuffleFill, RiRepeatFill,
} from 'react-icons/ri';

import LastPlayedCarousel from './LastPlayedCarousel';


const Body = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [mostrarContenido, setMostrarContenido] = useState(false);

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
      setMostrarContenido(true);
    } catch (error) {
      console.error('Error en la petición:', error);
    }
  };

  return (
    <div className='flex flex-col min-h-screen'>

      {/* Contenido superior de la página */}
      <header className=" text-sky-900 p-4">
        <h1 className="text-4xl font-bold text-center text-sky-900 mb-8 mt-8">Nombre de la App</h1>
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Ingrese la URL de la canción"
              className="placeholder-sky-800 py-2 px-4 border bg-sky-300 border-sky-300 rounded w-96 focus:outline-none focus:border-cyan-500"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
            />
            <button
              className="bg-sky-300 py-2 px-4 rounded hover:bg-cyan-600 focus:outline-none focus:bg-sky-700 ml-3"
              onClick={handleSearch}
            >
              Buscar
            </button>
          </div>
        </div>
        {/* Borrar esto despues */}
        <p className='text-center mt-2'><strong>https://www.youtube.com/watch?v=COBJFGzOE1w</strong></p>
        <p className='text-center'><strong>(BORRAR ESTO DESPUES)</strong></p>
      </header>

      {/* Contenido central de la página */}
      <div className='flex-1 mt-14'>
        {mostrarContenido && (
          <main className="opacity-100 flex flex-col items-center justify-center transition-opacity duration ease-in-out animate-fade-in">
            <div className="h-2 bg-red-light"></div>
            <div className=" bg-red-lightest">
              <div className="bg-sky-200 shadow-lg rounded-lg" style={{ width: '45rem' }}>
                <div className="flex">
                  <div>
                    <img className="w-full mt-4 ml-4 rounded hidden md:block" src="https://photos.bandsintown.com/thumb/10371902.jpeg" alt="Album Pic" />
                  </div>
                  <div className="w-full p-8 ml-2">
                    <div className="flex justify-between">
                      <div >
                        <h3 className="text-2xl text-grey-darkest font-medium">El arrepentimiento (Nombre canción)</h3>
                        <p className="text-sm text-grey mt-1">Juan Carlos Bodoque (Artista)</p>
                      </div>
                      <RiHeart3Fill className='w-6 h-6 mt-2 hover:text-red-600' /> {/*No hace nada :( */}
                    </div>
                    <div className="flex justify-between items-center mt-8">
                      <div className="text-grey-darker">
                        <RiShuffleFill className='w-8 h-8 transform transition-transform duration-300 ease-in-out hover:scale-110' />
                      </div>
                      <div className="text-grey-darker">
                        <RiSkipBackFill className='w-8 h-8 transform transition-transform duration-300 ease-in-out hover:scale-110' />
                      </div>
                      <div className="p-8 rounded-full bg-red-light shadow-lg ">
                        <RiPlayFill className='w-8 h-8 transform transition-transform duration-300 ease-in-out hover:scale-110' />
                      </div>
                      <div className="text-grey-darker">
                        <RiSkipForwardFill className='w-8 h-8 transform transition-transform duration-300 ease-in-out hover:scale-110' />
                      </div>
                      <div className="text-grey-darker">
                        <RiRepeatFill className='w-8 h-8 transform transition-transform duration-300 ease-in-out hover:scale-110' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}
      </div>
      <h2 className="text-4xl font-bold text-center text-sky-900 mt-14">Últimas canciones reproducidas</h2>
      <div className=' opacity-80'>
        {/* Modificar esto... */}
        <LastPlayedCarousel />
      </div>


      {/* Contenido inferior de la página */}
      <footer className=" text-sky-950 p-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-2 text-center">Redes Sociales</h3>
            <div className="flex flex-col space-y-2 items-center">
              <div className="flex items-center">
                <RiInstagramLine className="text-pink-500 text-2xl hover:text-pink-600" />
                <span className="ml-2">Instagram 1</span>
              </div>
              <div className="flex items-center">
                <RiGithubFill className="text-gray-500 text-2xl hover:text-gray-600" />
                <span className="ml-2">GitHub 1</span>
              </div>
              <div className="flex items-center">
                <RiLinkedinBoxLine className="text-blue-500 text-2xl hover:text-blue-600" />
                <span className="ml-2">LinkedIn 1</span>
              </div>
              {/* Agrega más iconos y textos según sea necesario */}
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Sección 2</h3>
            {/* Contenido de la segunda sección */}
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-2 text-center">Redes Sociales</h3>
            <div className="flex flex-col space-y-2 items-center">
              <div className="flex items-center">
                <RiInstagramLine className="text-pink-500 text-2xl hover:text-pink-600" />
                <span className="ml-2">Instagram 2</span>
              </div>
              <div className="flex items-center">
                <RiGithubFill className="text-gray-500 text-2xl hover:text-gray-600" />
                <span className="ml-2">GitHub 2</span>
              </div>
              <div className="flex items-center">
                <RiLinkedinBoxLine className="text-blue-500 text-2xl hover:text-blue-600" />
                <span className="ml-2">LinkedIn 2</span>
              </div>
              {/* Agrega más iconos y textos según sea necesario */}
            </div>
          </div>
        </div>
      </footer>

    </div>

  );
};

export default Body;
