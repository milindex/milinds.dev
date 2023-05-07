/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import DarkModeToggle from '@/components/support/darkModeToggle';
import Logo from '@/components/svg/Logo';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

function toggleMobileMenu(elem: any, mobileMenu: any, setMobileMenu: any) {
  const menu = document.querySelector('.navbar') as HTMLInputElement;
  const hamburger = elem.target.closest('.hamburger');
  if (!mobileMenu) {
    setMobileMenu(true);
    hamburger.classList.add('isactive');
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    window.addEventListener('beforeunload', resetOverflow);
  } else {
    setMobileMenu(false);
    hamburger.classList.remove('isactive');
    menu.classList.remove('active');
    document.body.style.overflow = 'auto';
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    window.removeEventListener('beforeunload', resetOverflow);
  }
}

function resetOverflow() {
  document.body.style.overflow = 'auto';
}

function Navigation({ theme, setTheme }: any) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  const [mobileMenu, setMobileMenu] = useState(false);

  // check if .hamburger is isactive in useEffect
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger') as HTMLInputElement;
    const menu = document.querySelector('.navbar') as HTMLInputElement;
    if (hamburger.classList.contains('isactive')) {
      setMobileMenu(true);
      menu.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      setMobileMenu(false);
      menu.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }, []);

  return (
    // {`navbar${scrolled ? ' scrolled' : ''}`}
    <>
      <div
        className={`container relative mx-auto flex w-full flex-row flex-wrap items-center justify-between py-2`}
      >
        {/* site logo */}
        <div className="site-logo rounded-full">
          <Link
            href="/"
            className={`logo-link hover:after relative border-primary-hover${
              isHome ? ' active-home' : ''
            }`}
          >
            <Logo />
          </Link>
        </div>
        {/* Jumplinks */}
        <div className="bottom-1 hidden flex-row flex-wrap items-center justify-between gap-3 md:flex">
          <nav>
            <ul className="flex flex-row flex-wrap items-center justify-between gap-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  {/* add Class active to current page */}
                  <Link
                    className={`border-b-2 pb-1 text-lg text-primary-main transition duration-300 ease-in-out hover:border-primary-hover hover:text-primary-hover${
                      router.pathname === href
                        ? ' active-page border-primary-main'
                        : ' border-transparent'
                    }`}
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Dark Mode Toggle */}
        <div className="relative hidden md:block">
          <DarkModeToggle theme={theme} setTheme={setTheme} />
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden">
          <div
            className="hamburger"
            onClick={(e) => toggleMobileMenu(e, mobileMenu, setMobileMenu)}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <menu className="navbar z-10">
            <ul>
              <li>
                <Link
                  href="/"
                  className={`border-b-2 pb-1 text-primary-main transition duration-300 ease-in-out hover:border-primary-hover hover:text-primary-hover${
                    router.pathname === '/'
                      ? ' active-page border-primary-main'
                      : ' border-transparent'
                  }`}
                >
                  Home
                </Link>
              </li>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  {/* add Class active to current page */}
                  <Link
                    className={`border-b-2 pb-1 text-primary-main transition duration-300 ease-in-out hover:border-primary-hover hover:text-primary-hover${
                      router.pathname === href
                        ? ' active-page border-primary-main'
                        : ' border-transparent'
                    }`}
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                {/* Dark Mode Toggle */}
                <DarkModeToggle
                  className="mobile-toggle"
                  theme={theme}
                  setTheme={setTheme}
                />
                {/* Mobile Nav */}
              </li>
            </ul>
          </menu>
          <style jsx>{`
            .navbar {
              width: 100%;
              height: 100vh;
              display: none;
              position: absolute;
              left: 0;
              top: 65px;
              backdrop-filter: blur(10px);
              transition: transform 0.3s ease-in-out;
            }

            .navbar ul {
              overflow: hidden;
              list-style-type: none;
              margin: 0;
              text-align: center;
            }

            .navbar li {
              display: block;
              margin: 0;
              padding: 5% 50px;
              width: 100%;
            }

            .navbar li:hover {
              cursor: pointer;
            }

            .navbar li a {
              color: #d3e3e3;
              text-decoration: none;
              font-family: 'Raleway', sans-serif;
              font-size: 1.6em;
              transition: all 0.5s;
            }

            .hamburger {
              margin: 0;
              padding: 0;
              transition: opacity 0.3s;
            }

            .hamburger:hover {
              cursor: pointer;
              opacity: 1;
            }

            .hamburger .line {
              width: 30px;
              height: 2px;
              background: rgb(236, 66, 66);
              margin: 8px auto;
              transition: all 0.3s ease-in-out;
              border-radius: 5px;
            }

            .hamburger .line:nth-child(1) {
              background-color: var(--primary-color);
            }

            .hamburger .line:nth-child(2) {
              background-color: --secondary-color;
            }

            .hamburger .line:nth-child(3) {
              background-color: var(--primary-color);
            }

            .hamburger.isactive .line:nth-child(2) {
              opacity: 0;
            }

            .hamburger.isactive .line:nth-child(1) {
              transform: translatey(7px) rotate(45deg);
            }

            .hamburger.isactive .line:nth-child(3) {
              transform: translateY(-13px) rotate(-45deg);
            }

            .navbar {
              transition: all 0.25s ease-in-out;
            }

            .navbar.active {
              display: block;
              animation: fade 0.5s;
            }

            @keyframes fade {
              from {
                transform: translateX(-200px);
                opacity: 0;
              }
              to {
                transform: translateX(0px);
                opacity: 1;
              }
            }
          `}</style>
        </div>
      </div>
    </>
  );
}

export default Navigation;
