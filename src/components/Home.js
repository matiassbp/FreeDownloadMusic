import React from 'react';
import Body from './Body';

const App = () => {
  const estilos = {
    background: 'linear-gradient(to right, #4a90e2, #63b8ff)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const contenido = {
    flex: 1,
  };

  return (
    <div style={estilos}>
      <Body style={contenido} />
    </div>
  );
};

export default App;
