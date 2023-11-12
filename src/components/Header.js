import React from 'react';

const Header = () => {
  return (
    <header className="text-white p-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 mt-8">Nombre de la App</h1>
      <div className="container mx-auto flex items-center justify-center">
        {/* esto es momentaneo, pero hay que mejorar el margin top. */}
        
        <div className="flex items-center"> 
          <input
            type="text"
            placeholder="Ingrese la URL de la canción"
            className="py-2 px-4 border bg-gray-600 border-gray-600 rounded w-96 focus:outline-none focus:border-cyan-500"/>
          <button className="bg-cyan-500 py-2 px-4 rounded hover:bg-cyan-600 focus:outline-none focus:bg-cyan-700 ml-3">
            Buscar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
