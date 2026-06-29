import { useMemo } from 'react';

const Particles = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${1 + Math.random() * 2.5}px`,
      animationDuration: `${2 + Math.random() * 4}s`,
      animationDelay: `${Math.random() * 5}s`,
    }));
  }, []);

  const petals = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${8 + Math.random() * 12}s`,
      animationDelay: `${Math.random() * 15}s`,
      width: `${8 + Math.random() * 10}px`,
      height: `${10 + Math.random() * 14}px`,
      opacity: 0.3 + Math.random() * 0.5,
    }));
  }, []);

  return (
    <>
      {/* Twinkling Stars */}
      <div className="stars-container">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDuration: star.animationDuration,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Falling Petals */}
      <div className="petals-container">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="petal"
            style={{
              left: petal.left,
              width: petal.width,
              height: petal.height,
              animationDuration: petal.animationDuration,
              animationDelay: petal.animationDelay,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Particles;
