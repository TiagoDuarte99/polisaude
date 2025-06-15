import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import {ToggleDarkModeButton } from './ToggleDarkModeButton';

import { Link } from 'react-router-dom';
import polisaudeLogotipo from '../assets/polisaudeLogotipo.png';

export default function ResponsiveNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background border-b border-border px-4 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold text-primary">
          <img
            src={polisaudeLogotipo}
            alt="Descrição da imagem"
            className="w-full max-w-[60px] h-auto"
          />
        </Link>
        <ToggleDarkModeButton/>

        <div>
          {/* Navbar para ecrãs médios e grandes */}
          <div className="hidden md:block">
            <DesktopMenu />
          </div>

          {/* Navbar mobile para ecrãs pequenos */}
          <div className="block md:hidden px-4 py-2">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
