import { motion } from 'framer-motion';

const BirthdayCard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="birthday-card"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 60,
        damping: 12,
        duration: 1,
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h1 className="card-title" variants={titleVariants}>
          🎂 عيد ميلاد سعيد يا خديجة! 🎂
        </motion.h1>

        {/* Divider */}
        <motion.div className="divider" variants={itemVariants}>
          <div className="divider-line"></div>
          <span>✨</span>
          <div className="divider-line"></div>
        </motion.div>

        {/* Date Display */}
        <motion.div
          className="date-display"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <span className="date-label">📅 تاريخ الميلاد</span>
          <span className="date-text">10 / 21</span>
        </motion.div>

        {/* Photo Frame */}
        <motion.div
          className="photo-frame"
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <div className="photo-placeholder">
            <span style={{ fontSize: '3.5rem' }}>👩</span>
            <span>صورة خديجة</span>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div className="divider" variants={itemVariants}>
          <div className="divider-line"></div>
          <span>🌹</span>
          <div className="divider-line"></div>
        </motion.div>

        {/* Message */}
        <motion.p className="card-message" variants={itemVariants}>
          خديجة، أنتِ أجمل ما في حياتي.
          <br />
          كل عام وأنتِ سعادتي ونور عيوني.
          <br />
          عيد ميلاد سعيد يا أغلى البشر.
          <br />
          <motion.span
            style={{
              display: 'inline-block',
              color: '#f0d68a',
              fontFamily: 'var(--font-decorative)',
              fontSize: '1.3em',
              marginTop: '0.5rem',
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            ❤️ أحبك كثيراً! ❤️
          </motion.span>
        </motion.p>

        {/* Bottom Decoration */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '1.5rem',
            marginTop: '1rem',
          }}
        >
          {['🌹', '💝', '🎂', '💝', '🌹'].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BirthdayCard;
