import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Business from './pages/Business.jsx';
import Insulation from './pages/Insulation.jsx';
import FM from './pages/FM.jsx';
import RealEstate from './pages/RealEstate.jsx';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -8 },
};
const pageTransition = { duration: 0.45, ease: [0.16, 1, 0.3, 1] };

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
        <Route path="/business" element={<AnimatedPage><Business /></AnimatedPage>} />
        <Route path="/insulation" element={<AnimatedPage><Insulation /></AnimatedPage>} />
        <Route path="/fm" element={<AnimatedPage><FM /></AnimatedPage>} />
        <Route path="/real-estate" element={<AnimatedPage><RealEstate /></AnimatedPage>} />
        <Route path="*" element={<AnimatedPage><Home /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </>
  );
}
