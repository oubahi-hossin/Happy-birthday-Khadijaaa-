import { useMemo } from 'react';

const FloatingHearts = () => {
  const hearts = useMemo(() => {
    const heartEmojis = ['❤️', '💕', '🌹', '💖', '✨', '💗', '🥀', '💝'];
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      emoji: heartEmojis[i % heartEmojis.length],
      left: `${Math.random() * 100}%`,
      animationDuration: `${6 + Math.random() * 8}s`,
      animationDelay: `${Math.random() * 10}s`,
      fontSize: `${0.8 + Math.random() * 1.2}rem`,
    }));
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: heart.left,
            animationDuration: heart.animationDuration,
            animationDelay: heart.animationDelay,
            fontSize: heart.fontSize,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
