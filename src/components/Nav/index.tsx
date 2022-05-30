import React from 'react';
import { Link } from 'react-router-dom';

 import { Container } from './style';

function Nav() {
  return (
          <Container>
              <Link to='/home'>
              <img className='logo-nav' src='https://xpcorp.gama.academy/assets/logo-nav-black-478b995c681064a54339fa14e4885288162d2cb9c6a8ddca326315622f0a25cf.svg' alt='logo'/>
              </Link>
              <div className='div-nav'>
                  <Link to='/contact'>Contact</Link>
              </div>
          </Container>
  )
}

export default Nav;