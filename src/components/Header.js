import React from 'react';

const Header = () => {
  return (
    <header className="text-white p-4">
      <div className="container mx-auto flex items-center justify-center">
        {/* esto es momentaneo, pero hay que mejorar el margin top. */}
        <div className="flex items-center" style={{ marginTop: '123px' }}> 
          <input
            type="text"
            placeholder="Buscar..."
            className="py-2 px-4 border border-gray-600 rounded-l w-96 focus:outline-none focus:border-teal-500"
          />
          <button className="bg-green-500 py-2 px-4 rounded-r hover:bg-green-600 focus:outline-none focus:bg-green-700">
            Buscar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
