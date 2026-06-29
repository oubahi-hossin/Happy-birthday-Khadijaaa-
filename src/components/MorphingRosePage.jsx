import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MorphingRosePage = () => {
  const [phase, setPhase] = useState('rose'); // 'rose' → 'bloom' → 'revealed'
  const navigate = useNavigate();

  const handleRoseClick = () => {
    if (phase === 'rose') {
      setPhase('revealed');
    }
  };

  return (
    <div className="morphing-page">
      {/* Ambient particles */}
      <div className="morphing-particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="m-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1.5 + Math.random() * 2.5}px`,
              height: `${1.5 + Math.random() * 2.5}px`,
              animationDuration: `${2 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="morphing-center">
        <AnimatePresence>
          {phase === 'rose' && (
            /* ===== Phase 1: Rose (waiting for click) ===== */
            <motion.div
              key="rose-phase"
              className="rose-bloom-stage"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                scale: 1.3,
                opacity: 0,
                filter: 'blur(15px)',
                transition: { duration: 1.2, ease: 'easeInOut' },
              }}
              transition={{
                type: 'spring',
                stiffness: 50,
                damping: 15,
              }}
              onClick={handleRoseClick}
              style={{ cursor: 'pointer' }}
            >
              {/* Outer glow */}
              <motion.div
                className="bloom-outer-glow"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Orbiting sparkles */}
              <motion.div
                className="bloom-orbit"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="orbit-dot"
                    style={{
                      transform: `rotate(${i * 45}deg) translateX(195px)`,
                    }}
                  />
                ))}
              </motion.div>

              {/* The single rose image */}
              <motion.div className="bloom-rose-circle">
                <img
                  src="./morphing-rose.png"
                  alt="وردة رومانسية"
                  className="bloom-rose-img"
                />
              </motion.div>

              {/* Click hint */}
              <motion.p
                className="morphing-hint"
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                🌹 اضغطي على الوردة 🌹
              </motion.p>
            </motion.div>
          )}

          {phase === 'revealed' && (
            /* ===== Phase 2: Rose frame blooms around Khadija's photo ===== */
            <motion.div
              key="reveal-phase"
              className="photo-reveal-stage"
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Romantic glow behind everything */}
              <motion.div
                className="reveal-glow"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />

              {/* Rose wreath frame + photo container */}
              <motion.div
                className="rose-photo-container"
                initial={{ scale: 0.3, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 40,
                  damping: 12,
                  duration: 2,
                }}
              >
                {/* Rose wreath frame (behind photo) */}
                <motion.div
                  className="rose-wreath-overlay"
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.3,
                    duration: 1.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <img
                    src="./rose-frame.png"
                    alt="إطار ورد"
                    className="rose-wreath-img"
                  />
                </motion.div>

                {/* Orbiting sparkles around her photo for VIP effect */}
                <motion.div
                  className="photo-orbit"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  style={{ position: 'absolute', width: '320px', height: '320px', zIndex: 15 }}
                >
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: i % 2 === 0 ? '6px' : '3px',
                        height: i % 2 === 0 ? '6px' : '3px',
                        background: 'var(--gold-bright)',
                        borderRadius: '50%',
                        boxShadow: '0 0 12px var(--gold)',
                        transform: `rotate(${i * 30}deg) translateX(150px)`,
                        marginTop: i % 2 === 0 ? '-3px' : '-1.5px',
                        marginLeft: i % 2 === 0 ? '-3px' : '-1.5px',
                      }}
                    />
                  ))}
                </motion.div>

                {/* Khadija's photo (on top of the rose frame) */}
                <motion.div
                  className="khadija-photo-inner"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
                >
                  <img
                    src="./khadija.png"
                    alt="خديجة"
                    className="khadija-photo-img"
                  />
                </motion.div>

                {/* Golden border ring */}
                <motion.div
                  className="golden-ring"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                />
              </motion.div>

              {/* "أحبك" text */}
              <motion.div
                className="love-text-container"
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 2, duration: 1, ease: 'easeOut' }}
              >
                <motion.h2
                  className="love-text-main"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
                >
                  أحبكِ يا خديجة
                </motion.h2>

                <motion.div
                  className="love-text-hearts"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8 }}
                >
                  {['❤️', '🌹', '💕', '🌹', '❤️'].map((emoji, i) => (
                    <motion.span
                      key={i}
                      animate={{ y: [0, -8, 0], scale: [1, 1.15, 1] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: 3 + i * 0.15,
                        ease: 'easeInOut',
                      }}
                      style={{ fontSize: '1.5rem' }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.p
                  className="love-text-sub"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 3.2 }}
                >
                  أنتِ أجمل ما في حياتي وكل حياتي ❤️
                </motion.p>
              </motion.div>

              {/* Back button */}
              <motion.button
                className="name-button"
                style={{ marginTop: '2rem', zIndex: 50, padding: '1rem 3rem', fontSize: '1.2rem' }}
                onClick={() => navigate('/')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                العودة للواجهة الرئيسية
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MorphingRosePage;
