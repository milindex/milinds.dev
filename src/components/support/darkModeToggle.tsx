/* eslint-disable tailwindcss/no-custom-classname */
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

function DarkModeToggle({ theme, setTheme }: any) {
  return (
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,256,256"
              width="100px"
              height="100px"
              fillRule="nonzero"
              className="icon icon-sun top-3"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                className="mix-blend-normal"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M24.90625,3.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v6c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-6c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953zM10.65625,9.84375c-0.375,0.06641 -0.67578,0.33984 -0.78125,0.70313c-0.10547,0.36719 0.00391,0.75781 0.28125,1.01563l4.25,4.25c0.24219,0.29688 0.62891,0.43359 1.00391,0.34766c0.37109,-0.08594 0.66406,-0.37891 0.75,-0.75c0.08594,-0.375 -0.05078,-0.76172 -0.34766,-1.00391l-4.25,-4.25c-0.20703,-0.22266 -0.50781,-0.33594 -0.8125,-0.3125c-0.03125,0 -0.0625,0 -0.09375,0zM39.03125,9.84375c-0.22656,0.03125 -0.4375,0.14453 -0.59375,0.3125l-4.25,4.25c-0.29687,0.24219 -0.43359,0.62891 -0.34766,1.00391c0.08594,0.37109 0.37891,0.66406 0.75,0.75c0.375,0.08594 0.76172,-0.05078 1.00391,-0.34766l4.25,-4.25c0.3125,-0.29687 0.40234,-0.76172 0.21875,-1.15234c-0.1875,-0.39453 -0.60156,-0.62109 -1.03125,-0.56641zM24.90625,15c-0.03125,0.00781 -0.0625,0.01953 -0.09375,0.03125c-0.0625,0.00391 -0.125,0.01563 -0.1875,0.03125c-0.01172,0.01172 -0.01953,0.01953 -0.03125,0.03125c-5.30469,0.22656 -9.59375,4.54688 -9.59375,9.90625c0,5.50391 4.49609,10 10,10c5.50391,0 10,-4.49609 10,-10c0,-5.33984 -4.25391,-9.64453 -9.53125,-9.90625c-0.03516,0 -0.05859,-0.03125 -0.09375,-0.03125c-0.10156,-0.03906 -0.20703,-0.05859 -0.3125,-0.0625c-0.01953,0 -0.04297,0 -0.0625,0c-0.03125,0 -0.0625,0 -0.09375,0zM24.9375,17c0.01953,0 0.04297,0 0.0625,0c0.03125,0 0.0625,0 0.09375,0c4.375,0.05078 7.90625,3.61328 7.90625,8c0,4.42188 -3.57812,8 -8,8c-4.41797,0 -8,-3.57812 -8,-8c0,-4.39844 3.54688,-7.96484 7.9375,-8zM4.71875,24c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h6c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-6c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM38.71875,24c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h6c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-6c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM15,33.875c-0.22656,0.03125 -0.4375,0.14453 -0.59375,0.3125l-4.25,4.25c-0.29687,0.24219 -0.43359,0.62891 -0.34766,1.00391c0.08594,0.37109 0.37891,0.66406 0.75,0.75c0.375,0.08594 0.76172,-0.05078 1.00391,-0.34766l4.25,-4.25c0.29688,-0.28516 0.38672,-0.72656 0.22656,-1.10547c-0.15625,-0.37891 -0.53516,-0.62109 -0.94531,-0.61328c-0.03125,0 -0.0625,0 -0.09375,0zM34.6875,33.875c-0.375,0.06641 -0.67578,0.33984 -0.78125,0.70313c-0.10547,0.36719 0.00391,0.75781 0.28125,1.01563l4.25,4.25c0.24219,0.29688 0.62891,0.43359 1.00391,0.34766c0.37109,-0.08594 0.66406,-0.37891 0.75,-0.75c0.08594,-0.375 -0.05078,-0.76172 -0.34766,-1.00391l-4.25,-4.25c-0.1875,-0.19922 -0.44531,-0.30859 -0.71875,-0.3125c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM24.90625,37.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v6c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-6c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953z"></path>
                </g>
              </g>
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
        @media (min-width: 1024px) {
          .dark-light-mode-container .theme {
            position: absolute;
            top: 12px;
            right: 32px;
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
        .dark-light-mode-container .theme .input:checked + .inner .box:before {
          width: 24px;
          height: 24px;
          transform: translate(50px, -50%);
          border-radius: 24px;
          left: -8px;
        }
        .dark-light-mode-container .theme .input:checked + .inner .icon .icon {
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
        .dark-light-mode-container .theme .icon .icon.icon-sun {
          top: 12px;
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
  );
}

export default DarkModeToggle;
