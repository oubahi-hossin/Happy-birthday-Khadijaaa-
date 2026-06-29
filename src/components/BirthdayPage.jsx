import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BirthdayPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 70, damping: 18 },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 80, damping: 12 },
    },
  };

  const quotes = [
    {
      icon: '💖',
      text: 'أنتِ النجمة التي تضيء سمائي، والقمر الذي ينير ليالي الظلام',
    },
    {
      icon: '🌹',
      text: 'كل يوم معكِ هو هدية من السماء، وعيد ميلادكِ هو أجمل أيام السنة',
    },
    {
      icon: '✨',
      text: 'أتمنى لكِ عمراً مديداً مليئاً بالسعادة والحب والنجاح',
    },
    {
      icon: '💫',
      text: 'كل عام وأنتِ بخير، كل عام وأنتِ حبيبتي وسر سعادتي',
    },
    {
      icon: '🕊️',
      text: 'أدعو الله أن يحفظكِ ويبارك لكِ في عمركِ ويجعل أيامكِ كلها فرح',
    },
  ];

  return (
    <div className="birthday-page">
      {/* ===== Hero Section ===== */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
        >
          عيد ميلاد سعيد
          <br />
          يا خديجة 🎂
        </motion.h1>

        <motion.div
          className="hero-date"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span className="hero-date-label">📅 تاريخ الميلاد</span>
          <div className="hero-date-divider" />
          <span className="hero-date-number">10 / 21</span>
        </motion.div>
      </motion.section>

      {/* ===== Photo Section (Clickable) ===== */}
      <motion.section
        className="photo-section"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1, type: 'spring', stiffness: 70 }}
      >
        <Link to="/surprise" style={{ textDecoration: 'none' }}>
          <div className="photo-frame-wrapper" style={{ cursor: 'pointer' }}>
            <div className="photo-frame-glow" />
            <motion.div
              className="photo-frame"
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <img
                  src="/khadija.png"
                  alt="خديجة"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
                />
            </motion.div>
          </div>
          {/* Click hint */}
          <motion.p
            style={{
              textAlign: 'center',
              marginTop: '1rem',
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              color: 'var(--gold-light)',
              letterSpacing: '1px',
            }}
            animate={{ opacity: [0.4, 1, 0.4], y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            ✨ اضغطي هنا ✨
          </motion.p>
        </Link>
      </motion.section>

      {/* ===== Message Section ===== */}
      <motion.section
        className="message-section"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <motion.div className="message-card" variants={itemUp}>
          {/* Top Ornament */}
          <motion.div className="message-ornament" variants={itemUp}>
            <div className="ornament-line" />
            <span className="ornament-symbol">❦</span>
            <div className="ornament-line" />
          </motion.div>

          {/* Main Message */}
          <motion.p className="message-text" variants={itemUp}>
            خديجة، أنتِ أجمل ما في حياتي
            <br />
            كل عام وأنتِ سعادتي ونور عيوني
            <br />
            عيد ميلاد سعيد يا أغلى البشر
            <motion.span
              className="message-highlight"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              ❤️ أحبكِ كثيراً ❤️
            </motion.span>
          </motion.p>

          {/* Bottom Ornament */}
          <motion.div className="message-ornament" variants={itemUp}>
            <div className="ornament-line" />
            <span className="ornament-symbol">❦</span>
            <div className="ornament-line" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ===== Romantic Quotes Section ===== */}
      <motion.section
        className="quotes-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {quotes.map((quote, i) => (
          <motion.div
            key={i}
            className="quote-card"
            variants={itemUp}
            whileHover={{ scale: 1.02, y: -3 }}
          >
            <div className="quote-icon">{quote.icon}</div>
            <p className="quote-text">{quote.text}</p>
          </motion.div>
        ))}

        {/* Special Dua Card */}
        <motion.div
          className="quote-card"
          variants={scaleIn}
          whileHover={{ scale: 1.03 }}
          style={{
            background: 'linear-gradient(135deg, rgba(212,164,55,0.1) 0%, rgba(185,28,60,0.08) 100%)',
            borderColor: 'rgba(212,164,55,0.25)',
          }}
        >
          <motion.p
            className="quote-text-gold"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            🤲 اللهم بارك لها في عمرها وارزقها السعادة والتوفيق 🤲
          </motion.p>
        </motion.div>
      </motion.section>

      {/* ===== Footer ===== */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="footer-text">❤️ صُنع بكل حب لأجلكِ يا خديجة ❤️</p>
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.8rem',
            fontSize: '1.5rem',
            marginTop: '1rem',
          }}
        >
          {['🌹', '💝', '🎂', '💝', '🌹'].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.footer>
    </div>
  );
};

export default BirthdayPage;
