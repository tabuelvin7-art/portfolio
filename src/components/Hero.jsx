import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import styles from './Hero.module.css';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.heroContent}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className={styles.greeting}>
            Hi, my name is
          </motion.p>
          <motion.h1 variants={item} className={styles.name}>
            Elvin Tabu Khisa.
          </motion.h1>
          <motion.h2 variants={item} className={styles.title}>
            I build things for the web.
          </motion.h2>
          <motion.p variants={item} className={styles.description}>
            I'm a Computer Science student with expertise in modern web technologies.
            I specialize in building exceptional digital experiences with a focus on
            responsive design and clean, efficient code.
          </motion.p>
          <motion.div variants={item} className={styles.ctaContainer}>
            <a
              href="#contact"
              className={styles.ctaButton}
              aria-label="Get in touch"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        <div className={styles.socialLinks}>
          <a
            href="https://github.com/tabuelvin7-art"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/elvin-tabu-khisa-211ab0253"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/TabuElvin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:tabuelvin7@gmail.com"
            aria-label="Email"
          >
            <HiOutlineMail />
          </a>
          <div className={styles.line}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
