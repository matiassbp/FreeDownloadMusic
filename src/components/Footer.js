import React from 'react';
import { RiInstagramLine, RiGithubFill, RiLinkedinBoxLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="text-white p-4 mt-32 ">
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
      <div className="text-center mt-4">
        <p>&copy; 2023 My React App</p>
        {/* Otros elementos del pie de página */}
      </div>
    </footer>
  );
};

export default Footer;
