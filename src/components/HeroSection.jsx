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

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Star properties
    const stars = [];
    const numStars = 200;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach(star => {
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around canvas
        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        // Connect nearby stars
        stars.forEach(otherStar => {
          const distance = Math.sqrt(
            Math.pow(star.x - otherStar.x, 2) + Math.pow(star.y - otherStar.y, 2)
          );
          if (distance < 50) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 50})`;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hero-container">
      <canvas ref={canvasRef} className="star-background"></canvas>

      <div className="content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <b>Taofeeq Mukadaz</b> {/* Make the name bolder */}
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
            href="/MukadazT.pdf"
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
        /* CSS styles here */
        .hero-container {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          background: linear-gradient(135deg, #1e1e2f 0%, #2a2a4a 100%);
          color: #ffffff;
          font-family: 'Arial', sans-serif;
        }

        .star-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .navbar {
          position: absolute;
          top: 20px;
          right: 40px;
          display: flex;
          gap: 20px;
        }

        .navbar a {
          color: #ffffff;
          text-decoration: none;
          font-size: 18px;
          transition: color 0.3s ease;
        }

        .navbar a:hover {
          color: #ffd700;
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
          font-size: 4rem;
          margin-bottom: 20px;
          background: linear-gradient(45deg, #ffd700, #ff69b4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold; /* Make the name bolder */
        }

        .typewriter {
          font-size: 1.5rem;
          margin-bottom: 20px;
        }

        .subtitle {
          font-size: 1.2rem;
          margin-bottom: 40px;
          color: #b0b0b0;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 40px;
        }

        .cta-primary, .cta-secondary {
          padding: 12px 24px;
          border-radius: 30px;
          font-size: 1rem;
          font-weight: bold;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-primary {
          background: linear-gradient(45deg, #ffd700, #ff69b4);
          color: #1e1e2f;
        }

        .cta-secondary {
          background: transparent;
          color: #ffffff;
          border: 2px solid #ffffff;
        }

        .social-links {
          display: flex;
          gap: 20px;
        }

        .social-links a {
          color: #ffffff;
          font-size: 24px;
          transition: color 0.3s ease;
        }

        .social-links a:hover {
          color: #ffd700;
        }

        /* Media queries for responsiveness */
        @media (max-width: 768px) {
          h1 {
            font-size: 3rem;
          }

          .typewriter {
            font-size: 1.2rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .navbar {
            top: 10px;
            right: 20px;
          }

          .navbar a {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2.5rem;
          }

          .typewriter {
            font-size: 1rem;
          }

          .subtitle {
            font-size: 0.9rem;
          }

          .cta-buttons {
            gap: 10px;
          }

          .cta-primary, .cta-secondary {
            padding: 10px 20px;
          }

          .social-links a {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;