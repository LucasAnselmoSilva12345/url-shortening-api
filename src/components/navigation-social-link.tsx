interface NavLink {
  url_direct: string;
  url_label: string;
  bg_color: string;
}

const navLinks: NavLink[] = [
  {
    url_direct: 'https://github.com/LucasAnselmoSilva12345',
    url_label: '@LucasAnselmoSilva12345',
    bg_color: '#212830',
  },
  {
    url_direct: 'https://www.linkedin.com/in/lucas-anselmo-543636161/',
    url_label: 'LinkedIN - Lucas Anselmo',
    bg_color: '#0b67c2',
  },
];

export function NavigationSocialLink() {
  return (
    <nav className="navigation-social-link">
      <ul className="navigation-social-link-list">
        {navLinks.map(({ url_direct, url_label, bg_color }, index) => (
          <li key={index} className="navigation-social-link-items">
            <a style={{ backgroundColor: bg_color }} href={url_direct}>
              {url_label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
