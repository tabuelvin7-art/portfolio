import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './Contact.module.css';

// Form validation schema
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:tabuelvin7@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      )}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Show success message
      alert('Opening your email client. Please send the email to complete your message.');
      
      // Reset the form after successful submission
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error. Please email directly to tabuelvin7@gmail.com');
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Get In Touch</h2>
          <div className={styles.line}></div>
        </motion.div>

        <div className={styles.contactContent}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Let's work together</h3>
            <p>
              I'm currently looking for new opportunities, my inbox is always open.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
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
                href="https://linkedin.com/in/tabuelvin7-art"
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
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.contactForm}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                {...register('name')}
                className={`${styles.formInput} ${errors.name ? styles.error : ''}`}
                placeholder="Your Name"
              />
              {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className={`${styles.formInput} ${errors.email ? styles.error : ''}`}
                placeholder="example@gmail.com"
              />
              {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                {...register('subject')}
                className={`${styles.formInput} ${errors.subject ? styles.error : ''}`}
                placeholder="Subject"
              />
              {errors.subject && (
                <span className={styles.errorMessage}>{errors.subject.message}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                {...register('message')}
                className={`${styles.formTextarea} ${errors.message ? styles.error : ''}`}
                placeholder="Your message"
              ></textarea>
              {errors.message && (
                <span className={styles.errorMessage}>{errors.message.message}</span>
              )}
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
