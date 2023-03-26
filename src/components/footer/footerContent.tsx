import React from 'react';

// get current year
const year = new Date().getFullYear();

const socialLinks = [
  { platform: 'github', url: 'https://github.com/milindex' },
  { platform: 'linkedin', url: 'https://www.linkedin.com/in/milindks/' },
  { platform: 'google', url: 'mailto:milind4j@gmail.com' },
  { platform: 'gitlab', url: 'https://gitlab.com/milindks' },
  { platform: 'instagram', url: 'https://www.instagram.com/milind2k' },
  { platform: 'twitter', url: 'https://twitter.com/milind2k' },
  {
    platform: 'stackoverflow',
    url: 'https://stackoverflow.com/users/13767108/milind',
  },
];

const Footer = () => (
  <div className="container">
    {/* get in touch with me */}

    <div className="social-media-links-container">
      <div className="flex flex-row flex-wrap items-center justify-center gap-2 text-primary-main">
        {socialLinks.map(({ platform, url }) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center justify-center gap-2"
          >
            {/* fetch svg from /assets/images/social-icons/${platform}.svg */}
          </a>
        ))}
      </div>
    </div>

    <div className="flex flex-col items-center justify-center py-8">
      <p>Designed & Built by Milind Sonawane</p>
      <p>©{year} Milind Sonawane</p>
    </div>
  </div>
);

export default Footer;
