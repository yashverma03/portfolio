import styles from './Hero.module.css';
import linkedinIcon from '../../../assets/hero/linkedin.svg';
import googleDriveIcon from '../../../assets/hero/googleDrive.svg';
import githubIcon from '../../../assets/hero/github.svg';

const Hero = () => {
  return (
    <header id='hero' className={styles.root}>
      <div className={styles.content}>
        <div>
          <p className={styles.muted}>Hi, I'm</p>
          <h1 className={styles.title}>Yash Verma</h1>
          <p className={styles.subtitle}>Software Engineer</p>
          <p className={styles.location}>Delhi, India</p>
          <p className={styles.description}>
            I build robust backend systems with a focus on performance, security, and reliability. I
            have 2 years of experience designing secure authentication systems, payment
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
              <img src={linkedinIcon} alt='LinkedIn' className={styles.ctaIcon} />
              LinkedIn
            </a>
            <a
              href='https://drive.google.com/file/d/1YkySjHIHsbBpE9tKmhXSG3TPu-0UMOTV'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.ctaButton}
            >
              <img src={googleDriveIcon} alt='Resume' className={styles.ctaIcon} />
              Resume
            </a>
            <a
              href='https://github.com/yashverma03'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.ctaButton}
            >
              <img src={githubIcon} alt='GitHub' className={styles.ctaIcon} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
