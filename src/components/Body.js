import React from 'react';
import { RiPlayCircleLine, RiDownload2Fill } from "react-icons/ri";

const Body = () => {
  return (
    <main className="flex items-center justify-center mt-24">
      <div className="bg-gray-600 rounded-lg shadow-md p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          src="https://photos.bandsintown.com/thumb/10371902.jpeg" 
          alt="Descripción de la imagen"
          className="w-64 h-64 rounded-lg mx-auto mb-4 object-cover shadow-lg"
        />
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 text-gray-800 px-6 py-3 rounded-full focus:outline-none focus:bg-blue-600 hover:bg-blue-600 transform transition-transform duration-300 ease-in-out hover:scale-105 flex items-center">
            <RiPlayCircleLine className="text-2xl mr-2" />
            Reproducir
          </button>
          <button className="bg-green-500 text-gray-800 px-6 py-3 rounded-full focus:outline-none  focus:bg-green-600 hover:bg-green-600 transform transition-transform duration-300 ease-in-out hover:scale-105 flex items-center">
            <RiDownload2Fill className="text-2xl mr-2" />
            Descargar
          </button>
        </div>
      </div>
    </main>
  );
};

export default Body;
