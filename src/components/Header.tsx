import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '20px', textAlign: 'center', background: '#282c34', color: 'white' }}>
      <h1>Meu Portfólio</h1>
      <nav>
        <a href="#sobre" style={{ margin: '0 15px', color: 'white' }}>Sobre Mim</a>
        <a href="#projetos" style={{ margin: '0 15px', color: 'white' }}>Projetos</a>
      </nav>
    </header>
  );
};

export default Header;
