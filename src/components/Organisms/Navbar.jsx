import { useState } from 'react';
import Link from 'next/link';

import { RenderSwitch } from '../Atoms/Navigation/RenderSwitch';

export default function Navbar({ estilos, tipos }) {
  let [submenuStatus, setSubmenuStatus] = useState(false);
  let [submenuContent, setSubmenuContent] = useState();

  let handleClick = (content) => {
    setSubmenuStatus(true);
    setSubmenuContent(content);
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light d-flex justify-content-between px-md-5 px-4 -main'>
        <div>
          <Link href='/'>
            <a className='navbar-brand'>
              <img
                width='200'
                alt=''
                loading='lazy'
                className='navbar-brnd'
                src='/brand/full-logo-black.svg'
              />
            </a>
          </Link>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-md-end'
          id='navbarNavDropdown'
        >
          <ul className='navbar-nav'>
            <li
              onMouseEnter={() => setSubmenuStatus(false)}
              className='nav-item '
            >
              <Link href={`/`}>
                <a className='nav-link'>Inicio</a>
              </Link>
            </li>
            <li onMouseEnter={() => handleClick('style')} className='nav-item'>
              <a className='nav-link' href='#'>
                Estílos
              </a>
            </li>
            <li onMouseEnter={() => handleClick('type')} className='nav-item'>
              <a className='nav-link' href='#'>
                Productos
              </a>
            </li>
            <li
              onMouseEnter={() => setSubmenuStatus(false)}
              className='nav-item'
            >
              <Link href={`/distribuidores`}>
                <a className='nav-link'>Distribuidores</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {submenuStatus ? (
        <div className='container-fluid sub-menu'>
          <div onMouseLeave={() => setSubmenuStatus(false)} className='row m-0'>
            <RenderSwitch
              estilos={estilos}
              tipos={tipos}
              activeNav={submenuContent}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
