import { motion } from 'framer-motion';

const BloomingRose = () => {
  return (
    <motion.div
      className="rose-container"
      initial={{ scale: 0, rotate: -30, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 60,
        damping: 12,
        duration: 2,
        delay: 0.3,
      }}
    >
      {/* Sparkle particles around the rose */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="sparkle"
          style={{
            top: `${15 + Math.sin((i / 8) * Math.PI * 2) * 40 + 40}%`,
            left: `${15 + Math.cos((i / 8) * Math.PI * 2) * 40 + 40}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3 + 1,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Rose petals animation layers */}
      <motion.div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.2) 0%, transparent 70%)',
        }}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 1.2] }}
        transition={{ duration: 2.5, delay: 0.5, ease: 'easeOut' }}
      />

      {/* Main rose image */}
      <motion.img
        src="/rose.png"
        alt="وردة حمراء جميلة"
        className="rose-image"
        initial={{ scale: 0.3, opacity: 0, filter: 'blur(10px)' }}
        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      />

      {/* Outer glow ring */}
      <motion.div
        style={{
          position: 'absolute',
          width: '120%',
          height: '120%',
          borderRadius: '50%',
          border: '1px solid rgba(212, 164, 55, 0.3)',
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: [0, 0.6, 0.3] }}
        transition={{ duration: 3, delay: 1, ease: 'easeOut' }}
      />
    </motion.div>
  );
};

export default BloomingRose;
