import React from 'react';

const Body = () => {
  return (
    <main className="flex items-center justify-center mt-24">
      <div className="bg-white rounded-lg shadow-md p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          src="https://photos.bandsintown.com/thumb/10371902.jpeg" 
          alt="Descripción de la imagen"
          className="w-52 h-52 rounded-lg mx-auto mb-4 object-cover"
        />
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:bg-blue-600 hover:bg-blue-600 transform transition-transform duration-300 ease-in-out hover:scale-105">
            Reproducir
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded focus:outline-none focus:bg-green-600 hover:bg-green-600 transform transition-transform duration-300 ease-in-out hover:scale-105">
            Descargar
          </button>
        </div>
      </div>
    </main>
  );
};

export default Body;
