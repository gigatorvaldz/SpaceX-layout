import React, { useEffect, useRef } from "react";

const SparkleBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const parentRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const particles = particlesRef.current;

    const createParticles = () => {
      const numParticles = 90;

      for (let i = 0; i < numParticles; i++) {
        particles.push(createParticle());
      }
    };

    const createParticle = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 2 + 1;
      const speed = Math.random() * 0.14;
      const angle = Math.random() * Math.PI * 2;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      const alpha = Math.random() * 0.5 + 0.5;
      const color = getRandomOrangeColor();

      return { x, y, radius, vx, vy, alpha, color };
    };

    const getRandomOrangeColor = () => {
      const hue = Math.floor(Math.random() * 30) + 15;
      const saturation = Math.floor(Math.random() * 51) + 50;
      const lightness = Math.floor(Math.random() * 21) + 40;

      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    const updateParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.y < 0 ||
          particle.y > canvas.height
        ) {
          particles[i] = createParticle();
        }

        particle.alpha -= 0.005;

        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2,
          false
        );
        context.fillStyle = `rgba(255, 165, 0, ${particle.alpha})`;

        context.fillStyle = particle.color;
        context.fill();

        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50) {
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(mouseRef.current.x, mouseRef.current.y);
          context.strokeStyle = `rgba(255, 165, 0, ${particle.alpha})`;
          context.strokeStyle = particle.color;
          context.stroke();
        }
      }

      requestAnimationFrame(updateParticles);
    };

    const handleResize = () => {
      const parent = parentRef.current;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    const handleMouseMove = (event) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    const init = () => {
      const parent = parentRef.current;
      const parentStyle = getComputedStyle(parent);
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;

      canvas.style.width = parentStyle.width;
      canvas.style.height = parentStyle.height;

      handleResize();
      createParticles();
      updateParticles();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    init();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={parentRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default SparkleBackground;
