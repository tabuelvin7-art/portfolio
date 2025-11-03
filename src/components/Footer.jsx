import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
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
        </div>
        <p className={styles.copyright}>
          &copy; {currentYear} Elvin Tabu Khisa. All rights reserved.
        </p>
        <p className={styles.credit}>
          Designed & Built by Elvin Tabu Khisa
        </p>
      </div>
    </footer>
  );
};

export default Footer;
