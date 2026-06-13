import Link from 'next/link';
import { SiteConfig } from '@/constants';

const navLinks = [
  { href: '/projects', label: 'Work' },
  { href: '/experience', label: 'Experience' },
  { href: '/writing', label: 'Writing' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: SiteConfig.social.github, label: 'GitHub' },
  { href: SiteConfig.social.linkedin, label: 'LinkedIn' },
  { href: `mailto:${SiteConfig.email}`, label: 'Email' },
];

const resourceLinks = [
  { href: '/assets/resume.pdf', label: 'Resume' },
  { href: '/uses', label: 'Uses' },
  { href: '/now', label: 'Now' },
  { href: '/experiments', label: 'Lab' },
];

function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-bg-primary">
      <div className="mx-auto max-w-[1200px] px-4 py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Column 1: Bio */}
          <div>
            <p className="text-sm leading-relaxed text-text-secondary max-w-xs">
              {SiteConfig.tagline}
            </p>
            <p className="mt-8 text-xs text-text-muted">
              {SiteConfig.copyright}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-text-muted">
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-text-muted">
              Connect
            </p>
            <ul className="space-y-3">
              {socialLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-text-muted">
              Resources
            </p>
            <ul className="space-y-3">
              {resourceLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
