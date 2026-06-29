import { useEffect, useState, useMemo } from 'react';

const Confetti = ({ active }) => {
  const [pieces, setPieces] = useState([]);

  const colors = useMemo(
    () => ['#d4a437', '#b91c3c', '#f5d990', '#ff6b81', '#7f1d2b', '#ffd700', '#ff4757', '#ffe4a0', '#f9c6d0'],
    []
  );

  const shapes = useMemo(() => ['circle', 'rect', 'star'], []);

  useEffect(() => {
    if (!active) return;

    const newPieces = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: `${2.5 + Math.random() * 3.5}s`,
      delay: `${Math.random() * 2}s`,
      size: 6 + Math.random() * 10,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      rotation: Math.random() * 360,
    }));

    setPieces(newPieces);

    const timer = setTimeout(() => setPieces([]), 6000);
    return () => clearTimeout(timer);
  }, [active, colors, shapes]);

  if (!active || pieces.length === 0) return null;

  return (
    <div className="confetti-container">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: piece.left,
            animationDuration: piece.duration,
            animationDelay: piece.delay,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        >
          {piece.shape === 'circle' ? (
            <div
              style={{
                width: `${piece.size}px`,
                height: `${piece.size}px`,
                borderRadius: '50%',
                background: piece.color,
              }}
            />
          ) : piece.shape === 'star' ? (
            <span style={{ fontSize: `${piece.size * 1.2}px`, color: piece.color }}>✦</span>
          ) : (
            <div
              style={{
                width: `${piece.size * 0.6}px`,
                height: `${piece.size * 1.5}px`,
                borderRadius: '2px',
                background: piece.color,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
