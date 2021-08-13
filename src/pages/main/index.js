import React from 'react';
import TechList from '../../components/TechList/TechList';
import Header from '../../components/Header/Header';

import './style.css';
import '../../../src/global.css';

function Main() {
   return (
      <>
         <Header />
         <TechList />
      </>
   )
};

export default Main;