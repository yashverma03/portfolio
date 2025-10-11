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
          <p className={styles.description}>
            I build robust backend systems with a focus on performance, security, and reliability. I
            have experience designing secure authentication systems, payment integrations, real-time
            dashboards, and AI-driven pipelines. I enjoy delivering high-impact solutions end-to-end
            that power scalable web applications.
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
