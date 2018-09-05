import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Page/Navigation';
import './AppHeader.css';

const AppHeader = () => {
  return (
    <header className={'app-header'}>
      <div className={'inner'}>
        <div className={'logo'}>
          <Link to={'/'}>App</Link>
        </div>
        <div className={'nav'}>
          <Navigation/>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
