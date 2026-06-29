import { useState, useCallback } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Particles from './components/Particles';
import LandingPage from './components/LandingPage';
import BirthdayPage from './components/BirthdayPage';
import MorphingRosePage from './components/MorphingRosePage';
import Confetti from './components/Confetti';

// Page Transition Wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, filter: 'blur(10px)' }}
    animate={{ opacity: 1, filter: 'blur(0px)' }}
    exit={{ opacity: 0, filter: 'blur(10px)' }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
    style={{ width: '100%', minHeight: '100vh' }}
  >
    {children}
  </motion.div>
);

function HomePage() {
  const [revealed, setRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleReveal = useCallback(() => {
    setRevealed(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 6000);
  }, []);

  return (
    <PageWrapper>
      <Confetti active={showConfetti} />
      <AnimatePresence mode="wait">
        {!revealed ? (
          <LandingPage key="landing" onReveal={handleReveal} />
        ) : (
          <BirthdayPage key="birthday" />
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/surprise" element={
          <PageWrapper>
            <MorphingRosePage />
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HashRouter>
      <Particles />
      <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
        <AnimatedRoutes />
      </div>
    </HashRouter>
  );
}

export default App;
