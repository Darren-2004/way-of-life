import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import InstallPrompt from './components/InstallPrompt';
import NotificationBanner from './components/NotificationBanner';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
      <BackToTop />
      <InstallPrompt />
      <NotificationBanner />
    </>
  );
}

export default App;
