import React, { Component } from 'react';

import './style.css';

import Logo from '../../assets/images/logo.png';


class Header extends Component {
   render() {
      return (
         <nav>
            <img src={Logo} alt="Logo Basquera" />
         </nav>
      );
   }
};

export default Header;
