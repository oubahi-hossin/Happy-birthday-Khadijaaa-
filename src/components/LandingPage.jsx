import { motion } from 'framer-motion';

const LandingPage = ({ onReveal }) => {
  return (
    <motion.div
      className="landing-page"
      exit={{
        opacity: 0,
        scale: 0.9,
        filter: 'blur(10px)',
        transition: { duration: 0.8, ease: 'easeInOut' },
      }}
    >
      {/* Top sparkle text */}
      <motion.p
        style={{
          fontFamily: 'var(--font-elegant)',
          fontSize: '1rem',
          color: 'var(--gold)',
          opacity: 0,
          marginBottom: '2rem',
          letterSpacing: '2px',
        }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        ✦ مفاجأة خاصة ✦
      </motion.p>

      {/* Bouquet Container */}
      <motion.div
        className="bouquet-wrapper"
        initial={{ scale: 0, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 15,
          duration: 2.5,
          delay: 0.2,
        }}
      >
        {/* Glow Effects */}
        <motion.div
          className="bouquet-glow"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 2 }}
        />
        <motion.div
          className="bouquet-ring"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
        />
        <motion.div
          className="bouquet-ring-outer"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        />

        {/* Main Bouquet Image */}
        <motion.img
          src="./bouquet.png"
          alt="باقة ورد رومانسية"
          className="bouquet-image"
          initial={{ scale: 0.6, filter: 'blur(15px) brightness(0.3)' }}
          animate={{ scale: 1, filter: 'blur(0px) brightness(1)' }}
          transition={{
            duration: 2.5,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />

        {/* Sparkle particles around bouquet */}
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i / 10) * Math.PI * 2;
          const radius = 52;
          return (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                background: 'var(--gold-light)',
                borderRadius: '50%',
                top: `${50 + Math.sin(angle) * radius}%`,
                left: `${50 + Math.cos(angle) * radius}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 1.5 + i * 0.25,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </motion.div>

      {/* Name Button */}
      <motion.div
        className="name-button-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, ease: 'easeOut' }}
      >
        <motion.button
          id="reveal-button"
          className="name-button"
          onClick={onReveal}
          whileHover={{ scale: 1.06, y: -3 }}
          whileTap={{ scale: 0.96 }}
        >
          <span style={{ fontSize: '1.3rem' }}>🌹</span>
          <span className="name-text">Khadija</span>
          <span style={{ fontSize: '1.3rem' }}>🌹</span>
        </motion.button>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 3, duration: 1.5 }}
      >
        اضغطي لتكتشفي المفاجأة 💕
      </motion.p>
    </motion.div>
  );
};

export default LandingPage;
