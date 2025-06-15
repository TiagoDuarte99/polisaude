import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';

import './App.css';

import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Servicos from './Pages/Servicos';
import Contactos from './Pages/Contactos';
import Biomagnetismo from './Pages/Biomagnetismo';
import TerapiasManual from './Pages/TerapiasManual';

import NotFoundPage from './Pages/NotFound';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <main className="pt-20">
        {' '}
        {/* empurra o conteúdo para baixo da navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/biomagnetismo" element={<Biomagnetismo />} />
          <Route path="/terapiasmanual" element={<TerapiasManual />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
