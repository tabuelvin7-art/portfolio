import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
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

  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'React js',
    'AWS web services',
    'Git',
    'Responsive Design',
    'Node.js',
    'MongoDB',
    'Express js'
    
    
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.aboutContent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.div variants={item} className={styles.heading}>
            <h2>About Me</h2>
            <div className={styles.line}></div>
          </motion.div>

          <div className={styles.aboutGrid}>
            <motion.div variants={item} className={styles.aboutText}>
              <p>
                Hello! I'm Elvin, a passionate Computer Science student with a strong foundation in web development.
                My journey in programming started when I built my first website, and since then, I've been fascinated by
                the endless possibilities of creating things that live on the internet.
              </p>
              <p>
                I have hands-on experience in building responsive and user-friendly web applications using modern
                technologies. My projects include a YouTube clone and an e-commerce platform, which have helped me
                develop a strong understanding of frontend development and user experience.
              </p>
              <p>
                Currently, I'm focused on expanding my knowledge in React and exploring backend development to become a
                well-rounded full-stack developer. I'm always looking for new challenges and opportunities to grow.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>
            </motion.div>

            <motion.div variants={item} className={styles.skillsList}>
              <ul>
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
