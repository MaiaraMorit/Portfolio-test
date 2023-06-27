import { HomeIcon, MoonIcon } from '@heroicons/react/outline';
import React from 'react';

function Header() {
  // const englishVersion = localStorage.getItem('englishVersion');
  // teste

  return (
    <div>
    {/* {
      englishVersion ? ( */}
        <header id='header' className="bg-orange shadow-md pb-2">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="hidden lg:flex lg:flex-1 lg:justify-start">
            <button type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <HomeIcon className="w-6 h-6" />
            </button>

            <button type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <MoonIcon className="w-6 h-6"/>
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              Projects
            </button>

            <button type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              Training
            </button>

            <button type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              Experiences
            </button>
          </div>
        </nav>
      </header>
      {/* ) : */}
      {/* ( */}
<div>
      <header id='header' className="bg-orange shadow-md pb-2">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="hidden lg:flex lg:flex-1 lg:justify-start">
            <button type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <HomeIcon className="w-6 h-6" />
            </button>

            <button type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <MoonIcon className="w-6 h-6"/>
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              Projetos
            </button>

            <button type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              Formação
            </button>

            <button type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              Experiências
            </button>
          </div>
        </nav>
      </header>
    </div>
      {/* )} */}
    </div>
  );
}

export default Header;


