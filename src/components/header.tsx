import { Logo } from '../assets/logo';
import { NavigationSocialLink } from './navigation-social-link';

export function Header() {
  return (
    <header className="header-container">
      <h1 className="sr-only">Shortly</h1>
      <Logo />
      <NavigationSocialLink />
    </header>
  );
}
