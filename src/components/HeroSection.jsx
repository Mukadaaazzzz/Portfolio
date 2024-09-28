import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 60 + 180}, 100%, 50%)`,
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2
        }
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;

        if (particle.x < 0 || particle.x > canvas.width) particle.velocity.x *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.velocity.y *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="hero-container">
      <canvas ref={canvasRef} className="particle-background"></canvas>

      <div className="content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="name">Taofeeq Mukadaz</span>
        </motion.h1>
        <motion.div
          className="typewriter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Typewriter
            options={{
              strings: [
                "Fullstack Developer 💻",
                "Strategy & IT Consultant 🔍",
                "AI, Web3.0 & Beyond Enthusiast 🚀"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Building the future, one idea at a time.
        </motion.p>
        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.a
            href="/mukadazlabs.pdf"
            className="cta-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
          <motion.a
            href="https://wa.me/2347081162893"
            className="cta-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>
        <div className="social-links">
          <motion.a
            href="https://github.com/Mukadaaazzzz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mukadaz-taofeeq?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:tmukadaz@gmail.com"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>
      <style jsx>{`
        .hero-container {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          background: linear-gradient(135deg, #0f0f1f 0%, #1a1a3a 100%);
          color: #ffffff;
          font-family: 'Arial', sans-serif;
        }

        .particle-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          padding: 0 20px;
          text-align: center;
        }

        h1 {
          font-size: 4.5rem;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .name {
          background: linear-gradient(45deg, #00ffff, #ff00ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .typewriter {
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: #f0f0f0;
        }

        .subtitle {
          font-size: 1.4rem;
          margin-bottom: 40px;
          color: #d0d0d0;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 40px;
        }

        .cta-primary, .cta-secondary {
          padding: 14px 28px;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: bold;
          text-decoration: none;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cta-primary {
          background: linear-gradient(45deg, #00ffff, #ff00ff);
          color: #0f0f1f;
          box-shadow: 0 4px 15px rgba(0, 255, 255, 0.4);
        }

        .cta-secondary {
          background: transparent;
          color: #ffffff;
          border: 2px solid #ffffff;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
        }

        .social-links {
          display: flex;
          gap: 25px;
        }

        .social-links a {
          color: #ffffff;
          font-size: 28px;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          color: #00ffff;
          transform: translateY(-5px);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 3.5rem;
          }

          .typewriter {
            font-size: 1.4rem;
          }

          .subtitle {
            font-size: 1.2rem;
          }

          .cta-buttons {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2.8rem;
          }

          .typewriter {
            font-size: 1.2rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .cta-primary, .cta-secondary {
            padding: 12px 24px;
            font-size: 1rem;
          }

          .social-links a {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;