"use client";

export function Particles({ count = 18 }: { count?: number }) {
  const particles = Array.from({ length: count }).map((_, index) => ({
    left: `${(index * 17) % 100}%`,
    top: `${(index * 29) % 100}%`,
    delay: `${(index % 6) * 0.6}s`,
    duration: `${6 + (index % 5)}s`
  }));

  return (
    <div className="pointer-events-none absolute inset-0">
      {particles.map((particle, index) => (
        <span
          key={index}
          className="absolute h-2 w-2 animate-float rounded-full bg-blue-400/35 blur-[1px]"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration
          }}
        />
      ))}
    </div>
  );
}
