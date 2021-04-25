import React from 'react'
import { Link } from 'react-router-dom'
import { Cabecalho } from './style';

const Header = () => { 
  return(
    <Cabecalho>
      <div className="menu-hamburger">
        <span className="menu-hamburger__icone">
        </span>
      </div>

      <nav className="menu-cabecalho">
        <ul className="menu-itens">
          <li><Link to="/champions" className="menu-item "> Campeões </Link></li>
        </ul>

      </nav>
      <div className="menu-cabecalho-background"></div>
    </Cabecalho>
  )
}


export default Header