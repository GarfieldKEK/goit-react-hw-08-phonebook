import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import image from '../../image/telefon_spr.png';

const Layout = () => {
  return (
    <>
      <header>
        <div>
          <img src={image} alt="tel" width={'40px'} />
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <UserMenu />
      </header>
      <main >
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
