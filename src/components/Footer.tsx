import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa'; // Ícone do Instagram (Font Awesome)

function Footer() {
  return (
    <footer className="bg-green-900 text-gray-300 text-sm">
      <div className="container mx-auto py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          {/* Coluna 1: Logo e Descrição */}
          <div>
            <Link to="/" className="flex items-center justify-center md:justify-start space-x-2">
              <img src="/logo-brazuka.png" alt="Logo Arena Brazuka" className="h-16 w-auto" />
            </Link>
            <h3 className="text-lg font-bold text-white mt-2 mb-1">Arena Brazuka</h3>
            <p className="text-xs leading-tight">O melhor do esporte na areia, feito para você e seus amigos.</p>
          </div>  

          
          {/* Coluna 3: Contato*/}
          <div>
            <h4 className="font-semibold text-white mb-2 pt-6 ">Navegação</h4>
            <ul>
              <li className="mb-2"><Link to="/" className="hover:text-orange-400">Home</Link></li>
              <li className="mb-2"><Link to="/aulas" className="hover:text-orange-400">Aulas</Link></li>
              <li className="mb-2"><Link to="/eventos" className="hover:text-orange-400">Eventos</Link></li>
              <li className="mb-2"><Link to="/contato" className="hover:text-orange-400">Contato</Link></li>
            </ul>
            
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h4 className="font-semibold text-white mb-2 pt-6">Siga-nos</h4>
            <div className="flex justify-center md:justify-start space-x-3">
              <a href="https://www.instagram.com/guerreirosportbar/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
              <FaInstagram className="w-5 h-5 hover:text-orange-400 transition duration-200" />

              </a>
            </div>
            <h4 className="font-semibold text-white mb-2 pt-6">Contato</h4>
            <ul>
              <li className='mb-2 text-xs'>Email: arenabrazuka@gmail.com</li>
              <li className='mb-2 text-xs'>Telefone: (19) 9231-2145</li>
            </ul>
          </div>

        </div>

        {/* Linha de Copyright */}
        <div className="border-t border-gray-700 mt-4 pt-3 text-center text-xs">
          <p>&copy; 2025 Arena Brazuka. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
