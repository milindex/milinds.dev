/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

function toggleDarkMode(theme: any, setTheme: any) {
  const input = document.querySelector('.input') as HTMLInputElement;
  if (theme === 'dark') {
    document.documentElement.classList.remove('dark');
    input.checked = false;
    setTheme('light');
  } else {
    document.documentElement.classList.add('dark');
    input.checked = true;
    setTheme('dark');
  }
}

function toggleMobileMenu(elem: any, mobileMenu: any, setMobileMenu: any) {
  const menu = document.querySelector('.navbar') as HTMLInputElement;

  // console.log(elem);
  // find closest parent with class name .hamburger
  const hamburger = elem.target.closest('.hamburger');

  if (!mobileMenu) {
    setMobileMenu(true);
    hamburger.classList.add('isactive');
    menu.classList.add('active');
  } else {
    setMobileMenu(false);
    hamburger.classList.remove('isactive');
    menu.classList.remove('active');
  }
}

function Navigation({ theme, setTheme }: any) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="container relative mx-auto flex w-full flex-row flex-wrap items-center justify-between py-2 shadow-md md:shadow-none">
        {/* site logo */}
        <div className="site-logo ml-3 rounded-full lg:ml-0">
          <Link
            href="/"
            className={`logo-link hover:after relative border-primary-hover${
              isHome ? ' active-home' : ''
            }`}
          >
            <img src="/assets/images/logo.png" alt="" height={42} width={42} />
          </Link>
        </div>
        {/* Jumplinks */}
        <div className="bottom-1 hidden flex-row flex-wrap items-center justify-between gap-3 lg:flex">
          <nav>
            <ul className="flex flex-row flex-wrap items-center justify-between gap-3">
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
            </ul>
          </nav>
          <div className="resume-container">
            <a
              href="/assets/files/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-btn flex rounded-full border border-primary-main p-2 pr-3 text-primary-main hover:border-transparent hover:bg-primary-hover hover:text-og-text"
            >
              <svg
                className="h-5 w-5 hover:animate-bounce"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
              <span>Resume</span>
              <style jsx>{`
                .resume-btn:hover svg {
                  animation: bounce 0.5s ease-in-out 1;
                }
              `}</style>
            </a>
          </div>
          <div className="dark-light-mode-container">
            <label className="theme">
              <input
                type="checkbox"
                className="input"
                defaultChecked={theme === 'dark'}
                onClick={() => toggleDarkMode(theme, setTheme)}
              />
              <span className="inner">
                <span className="box"></span>
                <span className="icon">
                  <svg className="icon icon-moon">
                    <path d="M6.584.005c.576-.116 1.012.512.703 1.012-1.596 2.578-1.209 5.997.97 8.23 1.668 1.608 3.979 2.285 6.273 1.903a.67.67 0 0 1 .694.996c-.279.488-.687.989-1.182 1.484-3.158 3.148-8.268 3.148-11.427 0-3.15-3.15-3.15-8.277-.015-11.411h0l.183-.188A7.44 7.44 0 0 1 6.584.005zM5.433 1.79l-.148.071a6.17 6.17 0 0 0-1.721 1.292h0l-.141.145a6.75 6.75 0 0 0 .14 9.382 6.75 6.75 0 0 0 9.527 0h0l.083-.085-.142-.001a8.57 8.57 0 0 1-5.539-2.216h0l-.183-.172C5.104 7.933 4.424 4.665 5.416 1.835h0l.016-.046.001.001zm9.194.159c.631-.523 1.506.39.891 1.003h0l-.078.086c-.599.728-.573 2.343.078 2.993h0l.054.058c.523.631-.39 1.506-1.003.891h0l-.086-.078c-.728-.599-2.343-.573-2.993.078h0l-.058.054c-.631.523-1.506-.39-.891-1.003h0l.078-.086c.599-.728.573-2.343-.078-2.993h0l-.054-.058c-.523-.631.39-1.506 1.003-.891h0l.086.078c.728.599 2.343.573 2.993-.078h0l.058-.054zm-.905 1.849l-.095.015a4.42 4.42 0 0 1-1.195 0h0l-.096-.015.015.097a4.42 4.42 0 0 1 0 1.195h0l-.015.096.096-.015a4.42 4.42 0 0 1 1.195 0h0l.095.015-.021-.097a4.42 4.42 0 0 1 0-1.195h0l.015-.097.007.001z"></path>
                  </svg>
                  <svg className="icon icon-sun">
                    <path d="M8.001 14.001c.338 0 .623.253.662.589l.005.078v.667c0 .353-.275.644-.628.665s-.659-.237-.701-.587l-.005-.078v-.667c0-.368.299-.667.667-.667zm5.142-1.8l.063.055.467.467c.248.249.26.648.028.912s-.63.302-.908.086l-.063-.055-.467-.467c-.248-.249-.26-.648-.028-.912s.63-.302.908-.086zm-9.405.055c.238.238.261.615.055.88l-.055.063-.467.467c-.249.248-.648.26-.912.028s-.302-.63-.086-.908l.055-.063.467-.467c.26-.26.682-.26.943 0h0zM8.001 4a4 4 0 1 1 0 8.001 4 4 0 1 1 0-8.001zm0 1.333a2.67 2.67 0 0 0-2.667 2.667 2.67 2.67 0 0 0 2.667 2.667 2.67 2.67 0 0 0 2.667-2.667 2.67 2.67 0 0 0-2.667-2.667zm-6.667 2c.353 0 .644.275.665.628s-.237.659-.587.701l-.078.005H.667c-.353 0-.644-.275-.665-.628s.237-.659.587-.701l.078-.005h.667zm14.001 0c.353 0 .644.275.665.628s-.237.659-.587.701l-.078.005h-.667c-.353 0-.644-.275-.665-.628s.237-.659.587-.701l.078-.005h.667zM3.209 2.267l.063.055.467.467c.248.249.26.648.028.912s-.63.302-.908.086l-.063-.055-.467-.467c-.248-.249-.26-.648-.028-.912s.63-.302.908-.086zm10.464.055c.238.238.261.615.055.88l-.055.063-.467.467c-.249.248-.648.26-.912.028s-.302-.63-.086-.908l.055-.063.467-.467c.26-.26.682-.26.943 0h0zM8.001 0c.338 0 .623.253.662.589l.005.078v.667c0 .353-.275.644-.628.665s-.659-.237-.701-.587l-.005-.078V.667c0-.368.299-.667.667-.667z"></path>
                  </svg>
                </span>
              </span>
            </label>
            <style jsx>{`
              .dark-light-mode-container .theme {
                display: inline-block;
                position: relative;
                user-select: none;
                cursor: pointer;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                font-size: 0;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                align-content: center;
              }
              @media (max-width: 768px) {
                .dark-light-mode-container .theme {
                  position: absolute;
                  top: 60px;
                  right: 28px;
                }
              }
              .dark-light-mode-container .theme .input {
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0;
              }
              .dark-light-mode-container .theme .input:checked + .inner {
                border-color: #fd5735;
              }
              .dark-light-mode-container .theme .input:checked + .inner .box {
                background: rgba(253, 87, 53, 0.3);
              }
              .dark-light-mode-container
                .theme
                .input:checked
                + .inner
                .box:before {
                width: 24px;
                height: 24px;
                transform: translate(50px, -50%);
                border-radius: 24px;
                left: -8px;
              }
              .dark-light-mode-container
                .theme
                .input:checked
                + .inner
                .icon
                .icon {
                fill: #fcfcfd;
              }
              .dark-light-mode-container
                .theme
                .input:checked
                + .inner
                .icon
                .icon:first-child {
                opacity: 0;
              }
              .dark-light-mode-container
                .theme
                .input:checked
                + .inner
                .icon
                .icon:nth-child(2) {
                opacity: 1;
              }
              .dark-light-mode-container .theme .inner {
                position: relative;
                display: inline-block;
                border: 2px solid #f4533a;
                border-radius: 24px;
                transition: all 0.2s;
              }
              .dark-light-mode-container .theme .box {
                position: relative;
                display: block;
                width: 72px;
                height: 32px;
                box-shadow: inset 0 0 0 1px rgba(119, 126, 144, 0.4);
                background: rgba(253, 87, 53, 0.3);
                border-radius: 16px;
                transition: all 0.2s;
              }
              .dark-light-mode-container .theme .box:before {
                content: '';
                position: absolute;
                top: 50%;
                left: 4px;
                transform: translateY(-50%);
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: #fd5735;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                transition: all 0.2s;
              }
              .dark-light-mode-container .theme .icon .icon {
                position: absolute;
                top: 50%;
                width: 24px;
                height: 24px;
                transform: translatey(-35%);
                fill: #b1b5c3;
                transition: all 0.2s;
              }

              .dark-light-mode-container .theme .icon .icon.icon-moon {
                fill: #141416;
              }

              .dark-light-mode-container .theme .icon .icon:first-child {
                right: 5px;
              }
              .dark-light-mode-container .theme .icon .icon:nth-child(2) {
                left: 5px;
                opacity: 0;
              }
            `}</style>
          </div>
        </div>
        {/* Mobile Nav */}
        <div className="lg:hidden">
          <div
            className="hamburger"
            onClick={(e) => toggleMobileMenu(e, mobileMenu, setMobileMenu)}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <menu className="navbar">
            <ul>
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
            </ul>
          </menu>
          <style jsx>{`
            .navbar {
              background-color: #333;
              width: 100%;
              height: 100vh;
              display: none;
              position: absolute;
              left: 0;
              top: 64px;
            }

            .navbar ul {
              overflow: hidden;
              list-style-type: none;
              padding-top: 50%;
              margin: 0;
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
              opacity: 0.5;
            }

            .hamburger .line {
              width: 50px;
              height: 5px;
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
              transform: translateY(13px) rotate(45deg);
            }

            .hamburger.isactive .line:nth-child(3) {
              transform: translateY(-13px) rotate(-45deg);
            }

            .navbar {
              transition: all 2s ease-in-out;
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
