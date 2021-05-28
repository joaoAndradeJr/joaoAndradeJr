import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/about" >Sobre Mim</Link>
          <Link to="/" >Página Inicial</Link>
          <Link to="/projects" >Projetos</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
