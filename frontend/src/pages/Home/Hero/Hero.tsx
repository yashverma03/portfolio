import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <header id='hero' className={styles.root}>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.muted}>Hi, I'm</p>
          <h1 className={styles.title}>Yash Verma</h1>
          <p className={styles.subtitle}>Software Engineer</p>
          <p className={styles.location}>Delhi, India</p>
          <p className={styles.description}>
            I build robust backend systems with a focus on performance, security, and reliability. I
            have 1.5 years of experience designing secure authentication systems, payment
            integrations, real-time dashboards, and AI-driven pipelines. I enjoy delivering
            high-impact solutions end-to-end that power scalable web applications.
          </p>
          <div className={styles.ctaButtons}>
            <a
              href='https://www.linkedin.com/in/yashverma2003'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.ctaButton}
            >
              <img src='/src/assets/hero/linkedin.svg' alt='LinkedIn' className={styles.ctaIcon} />
              LinkedIn
            </a>
            <a
              href='https://drive.google.com/file/d/1YkySjHIHsbBpE9tKmhXSG3TPu-0UMOTV'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.ctaButton}
            >
              <img src='/src/assets/hero/googleDrive.svg' alt='Resume' className={styles.ctaIcon} />
              Resume
            </a>
            <a
              href='https://github.com/yashverma03'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.ctaButton}
            >
              <img src='/src/assets/hero/github.svg' alt='GitHub' className={styles.ctaIcon} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
