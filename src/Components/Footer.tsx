import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white dark:bg-white dark:text-black py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo e descrição */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Polisaúde</h2>
          <p className="text-sm text-gray-400">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Links de navegação */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Navegação</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Início
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="hover:text-gray-300">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-gray-300">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to="/contactos" className="hover:text-gray-300">
                Contactos
              </Link>
            </li>
          </ul>
        </div>

        {/* Contactos ou redes sociais */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contactos</h3>
          <ul className="space-y-1 text-sm">
            <li>
              Email:{' '}
              <a
                href="mailto:polisaude@polisaude.pt"
                className="hover:text-primary dark:hover:text-primary transition-colors duration-300"
              >
                polisaude@polisaude.pt
              </a>
            </li>
            <li>
              Telefone: <span className="text-gray-400">+351 910 000 000</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/espacopolisaude"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Facebook className="w-6 h-6 hover:text-primary dark:hover:text-primary transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com/espacopolisaude/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 hover:text-primary dark:hover:text-primary transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé final */}
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Polisaúde. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
